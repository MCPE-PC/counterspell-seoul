import React from 'react';
import Banner from '@hackclub/banner';
import title from '@assets/hackclub/title.png';
import '@infolektuell/noto-color-emoji/index.css';
import 'galmuri/dist/galmuri.css';
import './app.css';
import AccentBox from './components/accent-box.js';
import Faq from './components/faq.js';

const App = () => {
	const calculateCountdown = () => {
		const seconds = (1_732_330_800_000 - Date.now()) / 1000;

		return [
			seconds / 86_400,
			'일',
			(seconds % 86_400) / 3600,
			'시간',
			(seconds % 3600) / 60,
			'분',
			seconds % 60,
			'초',
		];
	};

	const [countdown, setCountdown] =
		React.useState<ReturnType<typeof calculateCountdown>>(calculateCountdown());

	React.useEffect(() => {
		document.title = 'Counterspell 서울';

		const timer = setInterval(() => {
			setCountdown(calculateCountdown());
		}, 500);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<main className="font-sans text-white text-center md:text-lg bg-background selection:bg-primary selection:text-white">
			<header>
				<div className="absolute top-0 left-0 w-[20%] md:w-40 2xl:w-64">
					<Banner style={{width: '100%'}} />
				</div>
				<div className="relative flex justify-center items-end gap-1">
					<a
						className="button absolute top-1/2 right-12 -translate-y-1/2 hidden md:block"
						href="https://event-us.kr/0/event/92133/applicant?GroupId=Group0&GroupNum=1&utm_source=website&utm_medium=websitebutton&utm_campaign=hsnhvuiihn"
					>
						참가 등록
					</a>
					<img className="w-1/2 md:w-1/3" src={title} alt="Counterspell" />
					<span className="text-primary text-xl md:text-3xl -translate-y-3 md:-translate-y-6">
						서울
					</span>
				</div>
			</header>

			<div className="bg-dark">
				<p className="text-3xl font-bold mb-4">
					👾 초보자도 즐기는 청소년 게임 해커톤 🎮
				</p>

				<div className="bg-background w-fit p-3 mx-auto mb-3">
					<p>
						<span className="countdown text-2xl md:text-3xl">
							{countdown.map((part, index) =>
								typeof part === 'number' ? (
									<span
										className="font-bold font-monospace"
										/* @ts-expect-error --value */
										style={{'--value': Math.floor(part)}}
									/>
								) : index === countdown.length - 1 ? (
									part
								) : (
									<>
										{part}
										&nbsp;
									</>
								),
							)}
						</span>
					</p>
					<p className="text-sm md:text-base">
						2024년 11월 23일 (토) 오후 12시
						<span className="max-md:hidden">&nbsp;</span>
						<br className="md:hidden" />~ 24일 (일) 오후 12시
					</p>
				</div>

				<p className="text-sm md:text-base mb-3">
					<span className="font-bold">장소</span>: (지도)
				</p>

				<AccentBox>
					<p className="text-primary font-bold mb-1">Counterspell은</p>
					<p className="text-sm md:text-base">
						미국 <a href="https://hackclub.com/">Hack Club</a>에 의해 전 세계&nbsp;
						<span className="text-primary">200개 이상</span> 도시에서 동시 진행되는
						청소년 해커톤이에요.
						<span className="md:hidden">&nbsp;</span>
						<br className="max-md:hidden" />
						<span className="text-primary">아티스트, 뮤지션, 그리고 코더</span>가 모여
						프로그램과 게임을 만들어요!
					</p>
				</AccentBox>

				<a
					className="button button-2xl my-4"
					href="https://event-us.kr/0/event/92133/applicant?GroupId=Group0&GroupNum=1&utm_source=website&utm_medium=websitebutton&utm_campaign=hsnhvuiihn"
				>
					참가 등록
				</a>

				<p className="font-bold mb-1">후원</p>
				<div className="grid place-items-center grid-cols-3 md:grid-cols-6 gap-2 px-2">
					<a href="https://hackclub.com/">
						<img
							src="https://assets.hackclub.com/flag-standalone.svg"
							title="Hack Club"
						/>
					</a>
				</div>
			</div>

			<div className="bg-darker">
				<h2>참가 대상</h2>
				<AccentBox>
					<span className="text-base-content text-sm">
						전일제 대학생이 아니며 만 10세 이상인
					</span>
					<span className="text-primary">
						중&middot;고등학교(동등 학력 인정 기관 포함) 재학생
					</span>
				</AccentBox>
				<span className="text-sm">
					<p className="text-base-content mt-2">&mdash; 또는 &mdash;</p>
					<p className="text-base-content mb-2">
						누구든지 2006년 11월 23일 ~ 2011년 12월 31일에 태어난 사람
					</p>

					<p className="md:text-base">
						프로그래밍 실력에 상관없이 참가할 수 있어요!
					</p>
					<p className="text-base-content">
						만 14세 미만인 사람이 참가 등록하려면 그 법정대리인의 동의를 받아야 해요.
					</p>
				</span>
			</div>

			<div className="bg-dark">
				<h2>시간표</h2>

				<div className="flex max-md:flex-col max-md:gap-4 max-w-6xl mx-auto">
					{[
						{
							day: '11월 23일 토요일',
							activities: [
								['오전 11시', '참석 등록 시작'],
								['오후 12시', '오프닝 행사'],
								['오후 12시 30분', '점심 식사'],
								['오후 1시', '게임 만들기 시작!'],
								['오후 2시', '게임 개발 워크샵 1'],
								['오후 4시', '활동 1'],
								['오후 4시', '게임 개발 워크샵 2'],
								['오후 6시', '저녁 식사'],
								['오후 8시', '자유 즉석 발표'],
							],
						},
						{
							day: '11월 24일 일요일',
							activities: [
								['오전 12시', '서프라이즈!'],
								['오전 8시', '아침 식사'],
								['오전 10시 30분', '만든 게임 보여주기!'],
								['오후 12시', '지역 시상 및 클로징 행사'],
								['오후 12시 30분', '애프터 파티 & 점심 식사 (희망 참석자)'],
							],
						},
					].map(({day, activities}) => (
						<div className="flex-1">
							<h3 className="font-bold">{day}</h3>
							<ul className="timeline timeline-vertical">
								{activities.map(([time, activity]) => (
									<li className="group">
										<hr className="bg-darker group-first:hidden" />
										<div className="timeline-start">{time} ~</div>
										<div className="timeline-end timeline-box bg-darker rounded-none px-2 py-1">
											{activity}
										</div>
										<hr className="bg-darker group-last:hidden" />
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="bg-darker">
				<h2>기념품 &middot; 상</h2>

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-fit px-2 mx-auto mb-4">
					<div className="showcase">
						<div>👕</div>
						<p>티셔츠</p>
					</div>
					<div className="showcase">
						<div>🤘</div>
						<p>스티커</p>
					</div>
					<div className="showcase">
						<div>🏘️</div>
						<p>길드 굿즈와 배지</p>
					</div>
					<div className="showcase">
						<div>🍽️</div>
						<p>식사</p>
					</div>
					<div className="showcase">
						<div>🍿</div>
						<p>다과와 음료</p>
					</div>
					<div className="showcase">
						<div>📚</div>
						<p>지식</p>
					</div>
					<div className="showcase">
						<div>🎁</div>
						<p>다양한 경품</p>
					</div>
					<div className="showcase">
						<div>🤯</div>
						<p>서프라이즈!</p>
					</div>
				</div>

				<AccentBox>
					<h3>지역 상</h3>

					<p>지역 상은 클로징 전에 참석자가 투표로 결정해요.</p>
				</AccentBox>

				<AccentBox>
					<h3>글로벌 상</h3>
					<p>
						글로벌 상은 전 세계 Counterspell 작품을 모아 Hack Club 온라인 투표로
						결정해요.
					</p>
				</AccentBox>
			</div>

			<div className="bg-dark">
				<h2>자주 묻는 질문</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mx-auto">
					<Faq title="무엇을 만들어야 하나요?">
						<p>
							<span className="text-primary">모든 종류의 비디오 게임</span>을 만들 수
							있어요. 모든 게임은 똑같이 중요하니까요! 해커톤 주제는 오프닝 때
							공개돼요.
						</p>
					</Faq>
					<Faq title="참가 비용이 있나요?">
						<p>
							<span className="text-primary">아니요!</span> 참가에는 어떠한 비용도 들지
							않아요. 하지만, 교통비와 같이 Counterspell 서울에 포함되지 않은 비용은
							스스로 내야 해요.
						</p>
					</Faq>
					<Faq title="길드가 뭐예요?">
						<p>
							참가 등록할 때 길드를 선택해 굿즈와 배지를 받고 여러 활동에서 다른 길드와
							대결할 수 있어요. 그림을 다루는&nbsp;
							<span className="text-primary">아티스트</span> 길드, 음악을 다루는&nbsp;
							<span className="text-primary">뮤지션</span> 길드, 그리고 코드를
							다루는&nbsp;
							<span className="text-primary">코더</span> 길드가 있어요.
						</p>
					</Faq>
					<Faq title="코딩을 잘 못 해도 되나요?">
						<p>
							물론이죠! 실력은 상관없어요. 함께 배우는 워크샵과 여러 행사가 준비되어
							있어요. 코딩이 아닌 다른 역할
						</p>
					</Faq>
					<Faq title="Hack Club은 무엇을 해왔나요?">
						Hack Club은 세계 최대 청소년 오픈 소스 커뮤니티예요. 지금까지 전 세계에서
						여러 이벤트를 해왔어요.
					</Faq>
					<Faq title="팀은 어떻게 짜나요?">
						<p>
							팀은 <span className="text-primary">현장에서</span> 게임 만들기 시작 시간
							전까지 참석자가 정해요. (그럴 필요 없지만, 미리 준비해도 좋아요!)
						</p>
						<p>
							한 팀은 기본적으로 아티스트, 뮤지션, 그리고 코더 각 1명으로 구성해야
							해요. 팀 구성에 문제가 있다면 운영진이 도와드릴게요!
						</p>
					</Faq>
					<Faq title="무엇을 가져가야 하나요?">
						<p>
							<span className="text-primary">노트북(랩탑)</span>,&nbsp;
							<span className="text-primary">충전기</span>, 그리고&nbsp;
							<span className="text-primary">열린 마음</span>만 있으면 문제 없어요!
							필요한 약품, 화장실 용품, 수면 용품 등이 있다면 함께 가져와 주세요.
						</p>
					</Faq>
					<Faq title="부모님이 걱정하세요!">
						<p className="mb-1">
							Counterspell 서울은 <span className="text-primary">청소년보호법</span>을
							준수하고 <span className="text-primary">다양성</span>을 존중해요.
							사람마다 필요한 식사와 수면을 보장하고, 다과와 음료,&nbsp;
							<span className="text-primary">행사배상책임보험</span>까지 모두 무료로
							제공해요.
						</p>
						<p>설명이나 도움이 필요하면 언제든지 문의해주세요!</p>
					</Faq>
					<Faq title="숙박 객실을 제공하나요?">
						<p>
							아니요! 분리된 객실은 제공하지 않으며,&nbsp;
							<span className="text-primary">수면 공간</span>을 준비해요. 외부 숙박
							객실이 꼭 필요하다면,&nbsp;
							<span className="text-primary">비용을 내고 예약</span>을 도와드릴 수
							있으니 문의해주세요! 외부에서 숙박하면 팀원과 함께 있지 못하게 되니, 미리
							팀원과 협의해주세요.
						</p>
					</Faq>
					<Faq title="후원하는 돈이나 물건 등은 어디에 사용되나요?">
						<p>
							모든 거래 내역은 이 Hack Club Bank 링크에 투명하게 공개돼요. 작은
							후원이든 예상보다 많은 후원이든, 모두 Counterspell 서울에 참가하는 사람을
							위해 사용해요.
						</p>
					</Faq>
					<Faq title="질문이 더 있어요!">
						<p className="mb-1">
							<a href="mailto:me@mcpepc.com">me@mcpepc.com</a>
							&nbsp;또는&nbsp;
							<a href="https://pf.kakao.com/_dxfjVu/chat">카카오톡 채널</a>로
							문의해주세요. 전화 문의가 필요하면, 전화번호와 전화 가능한 시간을
							남겨주세요.
						</p>
						<p className="text-base-content">
							Hack Club 본사에 문의하고 싶다면, 영어를 사용해&nbsp;
							<a href="mailto:counterspell@hackclub.com">counterspell@hackclub.com</a>
							으로 문의해주세요.
						</p>
					</Faq>
				</div>
			</div>

			<div className="bg-darker">
				<h2>운영진</h2>

				<div className="flex justify-center items-center gap-2 max-h-20">
					<a href="https://github.com/MCPE-PC">
						<img
							className="inline rounded-full h-full"
							src="https://avatars.githubusercontent.com/u/20432839?v=4"
							alt="Jaehyeon Park"
						/>
					</a>
					<a href="https://github.com/ysw421">
						<img
							className="inline rounded-full h-full"
							src="https://avatars.githubusercontent.com/u/63529804?v=4"
							alt="Siwon Yun"
						/>
					</a>
				</div>

				<p>운영진도 행사에 참가 등록 및 참석해야 해요.</p>
			</div>

			<div className="bg-dark">
				<h2>후원 (Sponsorship)</h2>

				<p>Counterspell 서울은 전적으로 후원으로 운영돼요.</p>

				<p className="my-3">이 양식에서 미국 달러로 후원할 수 있어요.</p>

				<p>
					<span className="font-bold">기업</span> 후원(
					<span className="text-primary">물품, 금전, 특별 상 등</span>
					)은&nbsp;
					<a href="mailto:me@mcpepc.com">me@mcpepc.com</a>으로 문의해주시면 정성을
					다해 안내드릴게요.
				</p>
				<p>
					후원 방법과 금액에 상관없이,&nbsp;
					<span className="text-primary">맞춤 혜택</span>
					&nbsp;조율과&nbsp;
					<span className="text-primary">전자세금계산서</span> 발행이 가능해요!
				</p>
			</div>

			<footer className="bg-primary">
				<p>Counterspell 서울 (Counterspell Seoul)</p>
				<a href="https://github.com/MCPE-PC/counterspell-seoul">GitHub</a>
				<p>
					Art by&nbsp;
					<a href="https://www.instagram.com/aeralixe/">
						Elena Baskakova (18, Boston)
					</a>
				</p>
			</footer>
		</main>
	);
};

export default App;
