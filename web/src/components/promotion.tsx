import React from 'react';
import Swal from 'sweetalert2';

type Gift = {
	displayName: string;
	imageUrl: string;
};

const Promotion: React.FC = () => {
	// Note: Sorry for the dirty code as it is so urgent.

	const [isFetching, setIsFetching] = React.useState(false);
	const [phoneNumber, setPhoneNumber] = React.useState('010');
	const [agreePrivacy, setAgreePrivacy] = React.useState(false);

	const gifts: Gift[] = [
		{
			displayName: '아몬드빼빼로',
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
		{
			displayName: '아이스 카페 아메리카노 T 2잔 + 부드러운 생크림 카스텔라',
			imageUrl:
				'https://st.kakaocdn.net/product/gift/product/20240430151332_0716eac9c1604c1e82b01afe5ad7746d.jpg',
		},
	];

	const handlePromotion = async () => {
		if (isFetching) {
			return;
		}

		if (!agreePrivacy) {
			await Swal.fire({
				icon: 'error',
				text: '개인정보처리방침에 동의해주세요.',
			});
			return;
		}

		setIsFetching(true);

		try {
			const response = await fetch(
				'https://counterspell-seoul.mcpepc.workers.dev/',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({phoneNumber}),
				},
			);

			if (response.ok) {
				const data = await response.json();
				const referral = data.referralCode as string;
				const gift = gifts[data.gift as number];
				const text = `대규모 청소년 게임잼
초대 코드 ${referral} 입력하고 참석하면
랜덤 선물을 드려요.

https://counterspell-seoul.vercel.app/?gift=${referral}`;

				const share = await Swal.fire({
					icon: 'success',
					title: referral,
					text: '(영어 소문자와 숫자)',
					confirmButtonText:
						'<div class="flex items-center"><span class="material-icons">share</span> 공유</div>',
					allowOutsideClick: false,
					async preConfirm() {
						await navigator.clipboard.writeText(text);

						await Promise.race([
							new Promise((resolve) => {
								setTimeout(() => {
									resolve(true);
								}, 5000);
							}), // Timeout
							navigator
								.share({
									text,
								})
								.catch(() => {}),
						]);
					},
				});

				await Swal.fire({
					title: gift.displayName,
					text: '축하해요! 친구가 참석하면 이 선물을 보내드려요!',
					imageUrl: gift.imageUrl,
					imageAlt: gift.displayName,
					imageWidth: 200,
					imageHeight: 200,
				});
			} else {
				throw new RangeError('Not OK');
			}
		} catch (error) {
			await Swal.fire({
				icon: 'error',
				title: '실패',
				text: '휴대전화번호를 확인해주세요.',
			});
			throw error;
		} finally {
			setIsFetching(false);
		}
	};

	return (
		<div>
			<input
				type="checkbox"
				id="promotion-open"
				className="peer hidden"
				onChange={(event) => {
					if (!navigator?.share) {
						event.preventDefault();

						window.location.href = /ipad|iphone|ipod/i.test(navigator.userAgent)
							? `googlechrome://navigate?url=${window.location.href}`
							: `intent:${window.location.href}#Intent;end`;
					}
				}}
			/>

			<div
				className="hidden peer-checked:block fixed top-0 left-0 w-full h-screen bg-background overflow-auto p-4 z-50"
				role="dialog"
			>
				<label
					className="absolute top-5 right-5 text-2xl leading-none"
					htmlFor="promotion-open"
				>
					<span className="material-icons">close</span>
				</label>
				<h1 className="text-3xl font-bold text-center mt-4 mb-4">
					친구 추천 이벤트
				</h1>

				<div>
					<ul className="grid grid-cols-2 justify-center gap-2 mb-4 px-10 mx-auto w-fit">
						{gifts.map((gift) => (
							<li className="min-w-12 max-w-40">
								<img
									className="rounded-xl"
									src={gift.imageUrl}
									alt={gift.displayName}
								/>
							</li>
						))}
					</ul>
					<div className="flex flex-col justify-center items-center">
						<ol className="list-decimal ml-10 mb-3">
							<li>친구에게 Counterspell: Seoul을 추천해요.</li>
							<li>즉석 랜덤 선물을 뽑아요.</li>
							<li>
								<strong>친구가 참석하면</strong> 뽑은 선물을 드려요!
							</li>
							<li>
								<strong>참석한 친구에게도</strong> 랜덤 선물을 드려요!
							</li>
							<li>
								<strong>4명 이상</strong> 초대하면 선물 하나 더!
							</li>
						</ol>
						<div>
							<label
								className="font-bold text-base block mb-1"
								htmlFor="promotion-phone"
							>
								자신의 휴대전화번호
							</label>
							<input
								className="rounded-lg px-3 py-2 font-light text-black block"
								type="tel"
								id="promotion-phone"
								value={phoneNumber}
								onChange={(event) => {
									setPhoneNumber(event.target.value.replaceAll(/\D/g, ''));
								}}
							/>
						</div>
						<div className="flex items-center text-sm my-2">
							<input
								className="inline-block mr-1"
								type="checkbox"
								id="promotion-privacy"
								checked={agreePrivacy}
								onChange={(event) => {
									setAgreePrivacy(event.target.checked);
								}}
							/>
							<label htmlFor="promotion-privacy">
								개인정보처리방침 및 제3자((주)카카오) 제공에 동의합니다.
							</label>
						</div>
						<button type="button" className="button" onClick={handlePromotion}>
							추천하기
						</button>
					</div>

					<p className="text-center text-xs mt-8 mb-16 px-4">
						[개인정보 제3자 제공] 제공받는 자: 주식회사 카카오, 목적: 선물 발송 및
						관리, 제공받는 정보: 휴대전화번호와 당첨된 선물, 보유기간: 1년 이내. [선물
						지급 조건] 초대 코드를 발급받고 친구가 초대 코드를 입력해 Counterspell:
						Seoul에 참가 신청한 다음 참석하면 12월 31일 이내 선물을 보내드려요. 4명
						이상 초대한 경우 선물을 하나 추첨하기 위해 연락드려요. [선물] 3종 중 동일
						확률로 추첨하여 나온 상품에 대한 GS25 교환권 [유의사항] Counterspell:
						Seoul에 참가하지 않는 사람도 추천 코드를 만들 수 있어요. 스타벅스 아이스
						카페 아메리카노 T 2잔 + 부드러운 생크림 카스텔라는 이벤트 참여 유형(운영팀
						판단)별 1명을 추후 추첨으로 지급해요. 서로를 초대해도 둘 다 하나의 경품만
						드려요. 추천 받은 사람도 추천 코드를 만들 수 있어요.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Promotion;
