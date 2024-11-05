/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
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
