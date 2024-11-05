import React from 'react';

const Collapse: React.FC<{
	children: React.ReactNode;
	title: string;
	iconName: string;
}> = ({children, title, iconName}) => {
	return (
		<section className="relative">
			<input
				className="peer absolute top-0 inset-x-0 h-[3.75rem] opacity-0"
				type="checkbox"
				aria-hidden="true"
			/>
			<h2 className="flex items-center text-xl font-medium bg-[#383838] peer-checked:[&>.chevron]:rotate-90 peer-checked:bg-white peer-checked:text-black rounded-3xl px-5 py-3.5">
				<i className="material-icons-outlined mr-1.5">{iconName}</i>
				{title}
				<span className="material-icons ml-auto chevron">chevron_right</span>
			</h2>

			<div className="hidden peer-checked:flex flex-col gap-10 mt-5 mb-10">
				{children}
			</div>
		</section>
	);
};

export default Collapse;
