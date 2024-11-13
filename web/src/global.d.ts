import type Crate from '@widgetbot/crate';

declare global {
	declare module '*.png' {
		const value: string;
		export default value;
	}

	declare module '*.svg' {
		const value: string;
		export default value;
	}

	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Window {
		Crate: typeof Crate;
	}
}
