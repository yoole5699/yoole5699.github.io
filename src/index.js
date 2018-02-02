import React from 'react';
import ReactDOM from 'react-dom';
import './resource/css/index.css';
import './resource/css/animate.css';
import 'normalize.css';
import './resource/svg/iconfont.js';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<ThemeProvider theme={{ mode: 'PC' }}>
		<HashRouter>
			<App />
		</HashRouter>
	</ThemeProvider>, 
	document.getElementById('root')
);

registerServiceWorker();
