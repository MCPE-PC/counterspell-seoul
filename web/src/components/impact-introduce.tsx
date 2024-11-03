import React from 'react';

const ImpactIntroduce: React.FC<{
	children: React.ReactNode;
	heading: string;
	iconImage: string;
}> = ({children, heading, iconImage}) => {
	return (
		<div className="group relative flex justify-between lg:justify-end max-lg:items-center max-lg:even:flex-row-reverse lg:flex-col-reverse max-lg:py-12 max-lg:border-b border-[#9b9b9b] lg:h-full lg:after:h-12 lg:last:after:hidden after:absolute after:top-1/2 after:right-0 after:translate-x-20 after:-translate-y-1/2 after:border-r after:border-[#9b9b9b] first:pt-0 last:pb-0 last:border-0">
			<div className="flex flex-col max-lg:group-even:text-right">
				<h2 className="text-3xl font-black leading-normal whitespace-pre-line break-keep">
					{heading}
				</h2>

				<div className="font-light leading-snug">{children}</div>
			</div>

			<img
				className="w-5/12 h-auto max-h-48 object-contain"
				src={iconImage}
				alt=""
			/>
		</div>
	);
};

export default ImpactIntroduce;
