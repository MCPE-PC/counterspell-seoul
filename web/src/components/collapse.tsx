import React from 'react';

const Collapse: React.FC<{
	children: React.ReactNode;
	title: string;
	iconClassName: string;
}> = ({children, title, iconClassName}) => {
	return (
		<section className="relative">
			<input
				className="peer absolute top-0 inset-x-0 h-[3.75rem] opacity-0"
				type="checkbox"
				aria-hidden="true"
			/>
			<h2 className="flex items-center text-xl font-medium bg-[#383838] peer-checked:bg-white peer-checked:text-black rounded-3xl px-5 py-3.5">
				<i className={`${iconClassName} mr-1.5`}></i>
				{title}
				<i className="fa-sharp fa-regular fa-chevron-down ml-auto"></i>
			</h2>

			<div className="hidden peer-checked:flex flex-col gap-10 mt-5 mb-10">
				{children}
			</div>
		</section>
	);
};

export default Collapse;
