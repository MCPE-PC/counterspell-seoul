import '@fontsource/bebas-neue/index.css';
import '@infolektuell/noto-color-emoji/index.css';
import 'material-icons/iconfont/material-icons.css';
import 'pretendard/dist/web/variable/pretendardvariable.css';
import React from 'react';
import earthGlobeGraphic from '../assets/adobe-firefly/earth-globe-graphic.png';
import guildsGraphic from '../assets/adobe-firefly/guilds-graphic.png';
import person from '../assets/adobe-firefly/person.png';
import wandItem from '../assets/adobe-firefly/wand-item.png';
import busan from '../assets/busan.png';
import hackathon1 from '../assets/hackclub/hackathon1.png';
import hackathon2 from '../assets/hackclub/hackathon2.png';
import hackclubIconRounded from '../assets/hackclub/icon-rounded.svg';
import './app.css';
import AccentBox from './components/accent-box.js';
import CollapseSection from './components/collapse-section.js';
import Collapse from './components/collapse.js';
import Faqs from './components/faqs.js';
import ImpactIntroduce from './components/impact-introduce.js';
import InformativeBox from './components/informative-box.js';

const App = () => {
	const registrationHref =
		'https://event-us.kr/0/event/92133/applicant?GroupId=Group0&GroupNum=1&utm_source=website&utm_medium=websitebutton&utm_campaign=hsnhvuiihn';

	React.useEffect(() => {
		document.title = 'Counterspell 서울';
	}, []);

	return (
		<main className="font-sans text-white lg:text-xl bg-background selection:bg-primary selection:text-white">
			<div id="start" className="relative max-lg:h-screen max-lg:mb-20">
				<header className="fixed top-0 w-full pt-5 pb-3 lg:py-4 lg:bg-black z-50">
					<input
						id="menu-open"
						className="peer hidden"
						type="checkbox"
						aria-hidden="true"
					/>

					<label
						className="lg:hidden text-2xl leading-none ml-6"
						htmlFor="menu-open"
					>
						<span className="material-icons">menu</span>
					</label>

					<div className="hidden max-lg:peer-checked:flex max-lg:peer-checked:flex-col max-lg:peer-checked:justify-center items-center max-lg:peer-checked:fixed top-0 left-0 max-lg:peer-checked:w-full max-lg:peer-checked:h-screen z-50 lg:flex lg:justify-between lg-width">
						<div className="lg:hidden absolute inset-0 bg-background opacity-80 -z-10"></div>

						<label
							className="absolute top-5 right-5 text-2xl leading-none lg:hidden"
							htmlFor="menu-open"
						>
							<span className="material-icons">close</span>
						</label>

						<span className="font-bebasneue text-xl max-lg:hidden">
							COUNTERSPELL: SEOUL
						</span>

						<ul className="text-3xl max-lg:font-bold flex max-lg:flex-col max-lg:items-center max-lg:gap-8 lg:text-sm lg:gap-12 max-lg:mb-20">
							<li>
								<a href="#start">메인</a>
							</li>
							<li>
								<a href="#impact-intro">빠른 소개</a>
							</li>
							<li>
								<a href="#details">디테일</a>
							</li>
						</ul>

						<a
							className="max-lg:button lg:font-bold lg:text-sm"
							href={registrationHref}
							role="button"
						>
							참가 신청하기
							<i className="fa-sharp fa-regular fa-arrow-up-right"></i>
						</a>
					</div>
				</header>
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 pt-32 mb-10 lg:mb-24 lg-width">
					<div className="relative h-fit">
						<div className="aspect-[75/34] lg:aspect-[unset] lg:h-[14.25rem] xl:h-[18.5rem] border-y border-[#575757] overflow-hidden">
							<img
								className="-translate-x-6 -translate-y-[4.25rem] lg:-translate-y-[4.75rem] xl:-translate-y-20 rotate-[26deg] scale-95 object-cover"
								src={wandItem}
								alt=""
							/>
						</div>

						<div className="size-5 lg:size-8 top-0 right-12 absolute border-r-4 border-t-4 border-white -translate-y-1" />
						<div className="size-5 lg:size-8 bottom-0 left-12 absolute border-l-4 border-b-4 border-white translate-y-1" />
					</div>

					<div className="max-lg:ml-10">
						<div className="mb-1 text-2xl lg:text-3xl xl:text-4xl font-light leading-normal">
							글로벌 청소년 게임 해커톤
						</div>
						<h1 className="text-6xl lg:text-8xl xl:text-9xl font-normal font-bebasneue leading-none">
							<p>COUNTERSPELL</p>
							<span>SEOUL</span>
							<div className="inline-block ml-2.5 text-[#4d4d4d] font-sans text-xs lg:text-base xl:text-lg font-light leading-[14px] align-top">
								A Beginner
								<br />
								Friendly
								<br />
								Game Jam
							</div>
						</h1>
					</div>
				</div>
				<div className="flex lg:justify-center gap-7 max-lg:ml-10">
					<a className="button" href={registrationHref} role="button">
						참가 신청하기
						<i className="fa-sharp fa-regular fa-arrow-up-right"></i>
					</a>

					<a
						className="button text-[#999999] bg-[#2c2c2c] max-lg:hidden"
						href="#impact-intro"
						role="button"
					>
						자세히 알아보기
					</a>
				</div>
				<div className="flex justify-center w-full max-lg:absolute max-lg:bottom-8 text-center text-[#767676] text-3xl lg:my-32">
					<i className="fa-sharp fa-regular fa-chevrons-down scale-x-150"></i>
				</div>
			</div>
			<div
				id="impact-intro"
				className="grid grid-cols-1 lg:grid-cols-3 items-center lg:gap-[calc(10rem+1px)] max-lg:mx-5 lg-width"
			>
				<ImpactIntroduce heading={'초심자를 위한\n게임 해커톤'} iconImage={person}>
					<p>중학생과 고등학생.</p>
					<p className="text-base-content">
						<a href="#">(자주 묻는 질문)</a>
					</p>
					<p>경험이 없어도 됩니다.</p>
				</ImpactIntroduce>

				<ImpactIntroduce heading={'코더.\n화가. 뮤지션.'} iconImage={guildsGraphic}>
					<p>
						하고 싶은 역할을 맡고 한정 굿즈까지. 언제든지 다른 역할로 바꿀 수
						있답니다.
					</p>
				</ImpactIntroduce>

				<ImpactIntroduce
					heading={'전 세계\n200+ 도시에서'}
					iconImage={earthGlobeGraphic}
				>
					<p>글로벌 비영리법인 Hack Club이 개최하고 지원합니다.</p>
				</ImpactIntroduce>
			</div>
			<div className="flex justify-center w-full text-center text-[#767676] text-3xl mt-16 mb-20 lg:my-32">
				<i className="fa-sharp fa-regular fa-chevrons-down scale-x-150"></i>
			</div>
			<div
				id="details"
				className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2.5 lg:gap-20 px-5 lg-width"
			>
				<Collapse title="행사 소개" iconName="info">
					<CollapseSection title="Counterspell: Seoul">
						<p className="mb-5">
							Counterspell: Seoul은 청소년만을 위한 게임 해커톤입니다. 코딩뿐만 아니라
							그림, 음악과 같은 것도 중요하게 생각합니다. 게임의 모든 요소를 직접
							제작하며, 다른 참가자들과 협력하여 하나의 게임을 완성하는 특별한 시간을
							제공합니다. 전 세계 142개국에서 동시 개최되는 Hack Club 글로벌 해커톤의
							일부로, 한국의 청소년들이 글로벌 무대에 설 수 있는 기회를 제공합니다.
						</p>
						<InformativeBox>
							<strong className="font-bold">해커톤(hackathon)</strong>은 깊게
							파고든다는 의미의 ‘해킹’(hacking)과 마라톤(marathon)의 합성어로, 즉석에서
							팀을 구성하여 정해진 시간 안에 무언가를 만드는 대회입니다.
						</InformativeBox>
					</CollapseSection>

					<CollapseSection title="Hack Club">
						Hack Club은 고등학생들이 주도하는 코딩 클럽을 통해 학생들이 창의적인
						기술을 개발하고 협업할 수 있도록 지원하는 비영리 조직입니다. 2014년 Zach
						Latta에 의해 설립된 Hack Club은 전 세계에 400개 이상의 클럽을 보유하고
						있으며, 학생들이 실제 프로젝트를 통해 학습하고, 주말 동안 프로젝트를
						만들어 발표하는 해커톤에 참여할 수 있도록 돕습니다.
						<div className="flex gap-2.5 h-16 sm:h-20 mt-2.5">
							<img src={hackclubIconRounded} alt="Hack Club" />
							<img
								className="rounded-3xl border border-[#ff6c6c]"
								src={hackathon1}
								alt="해커톤 1"
							/>
							<img
								className="rounded-3xl border border-[#ff6c6c]"
								src={hackathon2}
								alt="해커톤 2"
							/>
						</div>
					</CollapseSection>
				</Collapse>

				<Collapse title="프로그램 및 일정" iconName="calendar_today">
					<CollapseSection title="일정">일정표 이미지 업로드</CollapseSection>
					<CollapseSection title="프로그램">
						[예정안]
						<div className="flex max-md:flex-col max-md:gap-4 max-w-6xl mx-auto">
							{[
								// TODO: add key
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
					</CollapseSection>
				</Collapse>

				<Collapse title="오시는 길" iconName="location_on">
					<CollapseSection title="위치">
						<div className="aspect-[5/3] mb-2.5">
							<iframe
								className="size-full"
								referrerPolicy="no-referrer-when-downgrade"
								allowFullScreen
								title="지도"
								src="https://www.google.com/maps/embed/v1/view?zoom=18&center=37.5063534%2C127.0227873&key=AIzaSyBYS-R0mqWTDIxNFn9j3OuZlETg-MVTRS4"
							></iframe>
						</div>
						<div className="text-lg font-light mb-5">
							<p>서울특별시 서초구 사평대로57길 44</p>
							<p className="text-xl font-medium">올댓마인드 신논현점 3층</p>
							<p>주차: 서초 언구비 공영주차장</p>
						</div>
						<a href="https://counterspellbusan.com/">
							<div className="flex text-black text-sm bg-white leading-snug rounded-3xl">
								<img
									className="w-1/3 rounded-3xl aspect-[17/13] object-cover border-4 border-white mr-1"
									src={busan}
									alt="Counterspell Busan"
								/>
								<div className="flex flex-col justify-center self-stretch grow">
									<span className="font-light text-sm leading-snug mb-1">
										부산과 가깝다면
									</span>
									<div className="flex items-center gap-1 font-bold text-base leading-tight">
										Counterspell Busan
										<i className="fa-sharp fa-regular fa-arrow-up-right"></i>
									</div>
								</div>
							</div>
						</a>
					</CollapseSection>
				</Collapse>

				<Collapse title="참가자 필독 핵심 내용" iconName="checklist">
					To Be Announced
				</Collapse>

				<Collapse title="자주 묻는 질문 (FAQ)" iconName="quiz">
					<Faqs />
				</Collapse>

				<Collapse title="문의" iconName="call">
					<CollapseSection>
						<p className="text-lg font-bold mb-5">
							<a href="mailto:seoul@counterspell.hackclub.com">
								seoul@counterspell.hackclub.com
							</a>
						</p>
						<InformativeBox>
							Counterspell: Seoul은 자원봉사로 운영되는 비영리 해커톤이므로, 전화
							문의가 필요하다면 전화번호와 전화 가능한 시간을 남겨주시면 확인 후
							전화드리겠습니다.
						</InformativeBox>
					</CollapseSection>
				</Collapse>
			</div>
			<footer className="relative font-extralight bg-[#1f1f1f] p-5 mt-20">
				<div className="absolute right-5 text-right text-[#3a3a3a] text-xl font-black leading-7 lg:hidden">
					“With major
					<br />
					support, I am
					<br />
					confident Hack
					<br />
					Club will change
					<br />
					the world.”
				</div>

				<div className="flex max-lg:flex-col lg:justify-evenly gap-2.5">
					<div>
						<div className="text-base font-normal leading-snug">
							Counterspell: Seoul
						</div>
						<p className="text-xs leading-none">
							전 세계 청소년이 함께하는 게임 해커톤
						</p>
					</div>

					<p className="text-xs">
						<a href="mailto:seoul@counterspell.hackclub.com">
							seoul@counterspell.hackclub.com
						</a>
					</p>

					<a
						className="text-xs leading-none"
						href="https://hcb.hackclub.com/donations/start/counterspell-seoul"
					>
						Counterspell: Seoul에 기부하기
					</a>
				</div>

				<div className="self-stretch text-center text-xs leading-normal mt-14">
					<p>
						<b>Design</b> &copy; 2024 Juhyung Park. All Rights Reserved.
					</p>
					<p>
						<b>Code</b> on&nbsp;
						<a href="https://github.com/MCPE-PC/counterspell-seoul/tree/main/web">
							GitHub
						</a>
						&nbsp;under&nbsp;
						<a href="https://creativecommons.org/public-domain/cc0/">CC0</a>. No
						Rights Reserved.
					</p>
					<p>
						우리는 만들때 가장 멋집니다.&nbsp;
						<a href="https://hackclub.com/">여기서 Hack Club</a>에 대해 더 알아보세요.
					</p>
					<p>
						Hack Club 등은&nbsp;
						<a href="https://hackclub.com/">Hack Club(EIN: 81-2908499)</a>의 미국 등록
						상표입니다.
					</p>
				</div>
			</footer>

			<div className="hidden">
				<p className="font-bold mb-1">후원</p>
				<div className="grid place-items-center grid-cols-3 md:grid-cols-6 gap-2 px-2">
					<a href="https://hackclub.com/">
						<img
							src="https://assets.hackclub.com/flag-standalone.svg"
							title="Hack Club"
						/>
					</a>
				</div>
				\{' '}
				<div className="bg-dark">
					<h2>시간표</h2>
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
			</div>
		</main>
	);
};

export default App;
