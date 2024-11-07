import {env} from 'node:process';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
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
