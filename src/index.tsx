import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContext from './contexts/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
	<ThemeContext>
		<CssBaseline />
		<GlobalStyles />
		<App />
	</ThemeContext>,
	document.getElementById('root'),
);
