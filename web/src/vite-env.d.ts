// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />

import type {ImageAttrs} from 'vite-plugin-image-presets';

declare global {
	declare module '*?preset=default' {
		const source: ImageAttrs[];
		export default source;
	}
}
