import React from 'react';

const InformativeBox: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	return (
		<div className="flex items-start bg-[#535353] leading-snug rounded-3xl px-3 py-2.5">
			<span className="material-icons text-xl mr-1.5">info</span>
			<p>{children}</p>
		</div>
	);
};

export default InformativeBox;
