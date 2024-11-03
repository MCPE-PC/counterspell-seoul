import React from 'react';

const Register: React.FC<{close: () => void}> = ({close}) => {
	const [phone, setPhone] = React.useState('010');

	return (
		<div className="absolute inset-0 text-black bg-white p-4">
			<button className="button font-bold block mb-2 ml-auto" onClick={close}>
				나가기
			</button>

			<p className="text-sm mb-2">아직 참가 등록 기간이 아니에요. ㅠㅠ</p>
			<p className="mb-2">
				👇 지금 전화번호를 알려주시면, 등록 기간이 시작되기 전에 가장 먼저 문자로
				알려드릴게요!
			</p>

			<form>
				<input
					className="input input-bordered input-primary rounded-none bg-white w-full"
					value={phone}
				/>
				<div className="form-control">
					<label className="label cursor-pointer justify-start gap-2">
						<input type="checkbox" className="checkbox checkbox-primary" />
						<span className="label-text text-black">
							<a href="https://app.catchsecu.com/document/C/a3075bc6813769a">
								개인정보 제3자 제공
							</a>
							,&nbsp;
							<a href="https://event-us.kr/Legal/Service">이벤터스 서비스이용약관</a>,
							그리고&nbsp;
							<a href="https://app.catchsecu.com/document/P/9d16f83d3524756">
								이벤터스 개인정보처리방침
							</a>
							에 동의해요.
						</span>
					</label>
				</div>
			</form>
		</div>
	);
};

export default Register;
