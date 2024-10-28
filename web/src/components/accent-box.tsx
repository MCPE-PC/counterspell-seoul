import React from 'react';

const AccentBox: React.FC<{children: React.ReactNode}> = ({children}) => {
	return (
		<div className="flex flex-col justify-center border-4 border-primary border-dashed w-full max-w-5xl p-6 mx-auto">
			{children}
		</div>
	);
};

export default AccentBox;
