import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './src/module.js';

createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
