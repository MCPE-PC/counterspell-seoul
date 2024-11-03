import React from 'react';
import Faq from './faq.js';

const InformativeBox: React.FC = () => {
	return (
		<div className="flex flex-col gap-10">
			<Faq title="저도 참가할 수 있나요?">
				<p>
					<ul className="list-disc ml-4">
						<li>만 10세 이상 만 19세 이하여야 해요.</li>
						<li>
							중학교, 고등학교, 또는 동등 학력 인정 기관에 재학하고 있어야 해요.
							(2006년 1월 1일부터 2011년 12월 31일까지 태어난 사람은 학교에 다니지
							않아도 참가할 수 있어요!)
						</li>
						<li>전일제 대학생이 아니어야 해요.</li>
						<li>만 14세 미만인 경우 법정대리인 동의가 필요해요.</li>
						<li>미리 참가 신청해야 해요.</li>
						<li>초상권 이용에 동의해야 해요.</li>
					</ul>
				</p>
			</Faq>
			<Faq title="무엇을 만들어야 하나요?">
				<p>
					<span className="text-primary">모든 종류의 비디오 게임</span>을 만들 수
					있어요. 모든 게임은 똑같이 중요하니까요! 해커톤 주제는 오프닝 때 공개돼요.
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
					있어요. 그리고, 화가와 뮤지션도 코더만큼이나 중요하니 걱정하지 마세요!
				</p>
			</Faq>
			<Faq title="Hack Club은 무엇을 해왔나요?">
				<p>
					Hack Club은 세계 최대 청소년 오픈 소스 커뮤니티예요. 지금까지 전 세계에서
					여러 이벤트를 해왔어요.
				</p>
			</Faq>
			<Faq title="팀은 어떻게 짜나요?">
				<p>
					팀은 <span className="text-primary">현장에서</span> 게임 만들기 시작 시간
					전까지 참석자가 정해요. (그럴 필요 없지만, 미리 준비해도 좋아요!)
				</p>
				<p>
					한 팀은 기본적으로 아티스트, 뮤지션, 그리고 코더 각 1명으로 구성해야 해요.
					팀 구성에 문제가 있다면 운영진이 도와드릴게요!
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
					준수하고 <span className="text-primary">다양성</span>을 존중해요. 사람마다
					필요한 식사와 수면을 보장하고, 다과와 음료,&nbsp;
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
					<span className="text-primary">비용을 내고 예약</span>을 도와드릴 수 있으니
					문의해주세요! 외부에서 숙박하면 팀원과 함께 있지 못하게 되니, 미리 팀원과
					협의해주세요.
				</p>
			</Faq>
			<Faq title="후원하는 돈이나 물건 등은 어디에 사용되나요?">
				<p>
					모든 거래 내역은 이 Hack Club Bank 링크에 투명하게 공개돼요. 작은 후원이든
					예상보다 많은 후원이든, 모두 Counterspell 서울에 참가하는 사람을 위해
					사용해요.
				</p>
			</Faq>
			<Faq title="질문이 더 있어요!">
				<p className="mb-1">
					<a href="mailto:seoul@counterspell.hackclub.com">
						seoul@counterspell.hackclub.com
					</a>
					으로 이메일을 보내 문의해주세요. 전화 문의가 필요하면, 전화번호와 전화
					남겨주세요.
				</p>
				<p className="text-base-content">
					Hack Club 본사에 문의하고 싶다면, 영어를 사용해&nbsp;
					<a href="mailto:counterspell@hackclub.com">counterspell@hackclub.com</a>
					으로 문의해주세요.
				</p>
			</Faq>
		</div>
	);
};

export default InformativeBox;
