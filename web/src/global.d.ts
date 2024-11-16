import type Crate from '@widgetbot/crate';

declare global {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Window {
		Crate: typeof Crate;
	}
}
