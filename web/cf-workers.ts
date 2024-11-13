import {
	type ExportedHandler,
	type Response as WorkersResponse,
} from '@cloudflare/workers-types';

const Response = globalThis.Response as unknown as typeof WorkersResponse;

export default {
	async fetch(request, env, context) {
		if (request.method !== 'POST') {
			return new Response('Method not allowed', {status: 405});
		}

		const body = await request.json();

		if (
			!(
				body &&
				typeof body === 'object' &&
				'phoneNumber' in body &&
				typeof body.phoneNumber === 'string'
			)
		) {
			return new Response('Bad body', {status: 400});
		}

		const phoneNumber = body.phoneNumber;

		if (!/^(010|tester)\d{8}$/.test(phoneNumber)) {
			return new Response('Invalid phone number format', {status: 400});
		}

		const existingEntry = await env.CSS_KV.get(phoneNumber);
		if (existingEntry) {
			return new Response(existingEntry, {
				headers: {'Content-Type': 'application/json'},
			});
		}

		const newEntry = JSON.stringify({
			referralCode: generateReferralCode(),
			gift: generateRandomGift(),
		});
		await env.CSS_KV.put(phoneNumber, newEntry);

		return new Response(newEntry, {
			headers: {'Content-Type': 'application/json'},
		});
	},
} satisfies ExportedHandler<Env>;

function generateReferralCode() {
	const array = new Uint8Array(3);
	crypto.getRandomValues(array);
	return Array.from(array, (byte) => byte.toString(36)).join('');
}

function generateRandomGift() {
	const gifts = [
		{
			displayName: '아몬드뺴빼로',
			imageUrl:
				'https://st.kakaocdn.net/product/gift/product/20231201135328_56033219f6194a778002ddfa29ca223f.png',
		},
		{
			displayName: '츄파춥스',
			imageUrl:
				'https://st.kakaocdn.net/product/gift/product/20230525135605_0ce38d2f80704914be1931f54738e33f.png',
		},
		{
			displayName: '육개장사발면(소컵)',
			imageUrl:
				'https://st.kakaocdn.net/product/gift/product/20211202151700_ca74ea9539924fc38491fa6d01f4c954.jpg',
		},
	];

	return gifts[
		Math.floor(
			(crypto.getRandomValues(new Uint8Array(1))[0] / 256) * gifts.length,
		)
	];
}
