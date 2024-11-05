import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: 'src/module.ts',
			formats: ['es'],
			name: 'CounterspellSeoul',
			fileName: 'index',
		},
		rollupOptions: {
			external: ['react'],
		},
	},
});
