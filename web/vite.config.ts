import {env} from 'node:process';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import imagePresets, {widthPreset} from 'vite-plugin-image-presets';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		imagePresets({
			default: widthPreset({
				widths: [320, 640, 960, 1280, 1920, 2560],
				formats: {
					webp: {
						quality: 90,
					},
					jpeg: {
						quality: 90,
					},
				},
			}),
		}),
	],
	build: {
		...(!env.VERCEL && {
			lib: {
				entry: 'src/module.ts',
				formats: ['es'],
				name: 'CounterspellSeoul',
				fileName: 'index',
			},
			rollupOptions: {
				external: ['react'],
			},
		}),
	},
});
