import '@fontsource-variable/noto-sans-kr/index.css';
import '@fontsource/bebas-neue/index.css';
import '@infolektuell/noto-color-emoji/index.css';
import React from 'react';
import {createRoot} from 'react-dom/client';
import './src/app.css';
import App from './src/module.js';

createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
