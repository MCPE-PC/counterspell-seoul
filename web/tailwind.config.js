import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#ff4186',
				secondary: '#41ddff',
				dark: '#202f53',
				darker: '#0a081e',
				background: '#1d1d1d',
			},
			fontFamily: {
				sans: ['Galmuri14', 'Galmuri11', 'Noto Color Emoji', 'sans-serif'],
				monospace: ['GalmuriMono11', 'Galmuri11', 'Noto Color Emoji', 'sans-serif'],
				galmuri11: ['Galmuri11', 'Noto Color Emoji', 'sans-serif'],
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				counterspell: {
					primary: '#ff4186',
					secondary: '#41ddff',
					accent: '#ff4186',
					neutral: '#ff00ff',
					'base-100': '#1d1d1d',
					info: '#0000ff',
					success: '#00ff00',
					warning: '#00ff00',
					error: '#ff0000',
				},
			},
		],
	},
};

export default config;
