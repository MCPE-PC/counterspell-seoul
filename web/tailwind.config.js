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
				background: '#111111',
			},
			fontFamily: {
				sans: [
					'"Pretendard Variable"',
					'Pretendard',
					'Noto Color Emoji',
					'sans-serif',
				],
				bebasneue: ['"Bebas Neue"'],
				monospace: ['"Noto Color Emoji"', 'monospace'],
			},
		},
	},
};

export default config;
