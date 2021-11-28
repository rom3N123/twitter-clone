import { IModes } from './../interfaces/styled';
import accentColors from './accentColors';

const modes: IModes = {
	light: {
		backgroundColor: '#fff',
		svgColor: accentColors.blue,
		buttonHover: '',
		typography: '#0f1419',
		popover: {
			shadow: 'rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px',
		},
		divider: '#eff3f4',
		palette: {
			gray: '#536471',
		},
	},
	dim: {
		backgroundColor: '#15202b',
		svgColor: '#fff',
		buttonHover: 'rgba(255,255,255, 0.1)',
		typography: '#fff',
		popover: {
			shadow: 'rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px',
		},
		divider: '#38444d',
		palette: {
			gray: '#536471',
		},
	},
	dark: {
		backgroundColor: '#000',
		svgColor: '#fff',
		buttonHover: '',
		typography: '#fff',
		divider: '#2f3336',
		popover: {
			shadow: 'rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px',
		},
		palette: {
			gray: '#536471',
		},
	},
};

export default modes;
