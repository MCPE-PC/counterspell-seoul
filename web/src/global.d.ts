declare module '*.png' {
	const value: string;
	export default value;
}

declare module '@hackclub/banner' {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const Banner: React.FC<any>;
	export default Banner;
}
