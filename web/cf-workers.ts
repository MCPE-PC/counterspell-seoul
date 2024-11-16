import {
	type ExportedHandler,
	type Response as WorkersResponse,
} from '@cloudflare/workers-types';

const Response = globalThis.Response as unknown as typeof WorkersResponse;

const headers = {
	'Access-Control-Allow-Headers': '*',
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
	'Access-Control-Allow-Origin': '*',
};

export default {
	async fetch(request, env, context) {
		if (request.method.toLowerCase() === 'options') {
			return new Response('OK', {
				headers,
			});
		}

		if (request.method.toLowerCase() !== 'post') {
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
			return new Response('Bad body', {status: 400, headers});
		}

		const phoneNumber = body.phoneNumber;

		if (!/^(010|tester)\d{8}$/.test(phoneNumber)) {
			return new Response('Invalid phone number format', {status: 400, headers});
		}

		const existingEntry = await env.CSS_KV.get(phoneNumber);
		if (existingEntry) {
			return new Response(existingEntry, {
				headers: {'Content-Type': 'application/json', ...headers},
			});
		}

		const newEntry = JSON.stringify({
			referralCode: generateReferralCode(),
			gift: generateRandomGift(),
			createdAt: new Date().toISOString(),
		});
		await env.CSS_KV.put(phoneNumber, newEntry);

		return new Response(newEntry, {
			headers: {'Content-Type': 'application/json', ...headers},
		});
	},
} satisfies ExportedHandler<Env>;

function generateReferralCode() {
	const array = new Uint8Array(3);
	crypto.getRandomValues(array);
	return Array.from(array, (byte) => byte.toString(36)).join('');
}

function generateRandomGift() {
	return Math.floor((crypto.getRandomValues(new Uint8Array(1))[0] / 256) * 3);
}
