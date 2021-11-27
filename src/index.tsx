import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContext from './contexts/ThemeContext';

ReactDOM.render(
	<ThemeContext>
		<App />
	</ThemeContext>,
	document.getElementById('root'),
);
