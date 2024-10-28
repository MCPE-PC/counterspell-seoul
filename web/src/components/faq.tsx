import React from 'react';
import AccentBox from './accent-box.js';

const Faq: React.FC<{children: React.ReactNode; title: string}> = ({
	children,
	title,
}) => {
	return (
		<AccentBox>
			<h3 className="text-2xl font-bold mb-2">{title}</h3>
			<span className="text-sm">{children}</span>
		</AccentBox>
	);
};

export default Faq;
