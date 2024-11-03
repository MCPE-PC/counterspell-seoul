import React from 'react';

const CollapseSection: React.FC<{
	children: React.ReactNode;
	title?: string;
}> = ({children, title}) => {
	return (
		<div>
			{title !== undefined && (
				<h3 className="text-2xl font-bold leading-[33.60px] mb-2">{title}</h3>
			)}

			<div className="text-sm font-normal leading-tight">{children}</div>
		</div>
	);
};

export default CollapseSection;
