import React from 'react';

const Image: React.FC<
	{
		src: string | Array<{srcset?: string}>;
	} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>
> = ({src, ...rest}) => {
	const allSources = Array.isArray(src) ? src : [{srcset: src}];
	const sources = allSources.slice(0, -1);
	const lastSource = allSources.at(-1);

	return (
		<picture>
			{sources.map((attributes, index) => (
				<source key={index} {...attributes} />
			))}
			<img {...lastSource} {...rest} />
		</picture>
	);
};

export default Image;
