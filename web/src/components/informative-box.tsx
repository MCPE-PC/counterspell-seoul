import React from 'react';

const InformativeBox: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	return (
		<div className="flex items-start bg-[#535353] leading-snug rounded-3xl px-3 py-2.5">
			<i className="fa-sharp fa-regular fa-circle-info text-xl mr-1.5"></i>
			<p>{children}</p>
		</div>
	);
};

export default InformativeBox;
