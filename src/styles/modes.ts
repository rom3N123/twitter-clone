import { IModes } from './../interfaces/styled';
import accentColors from './accentColors';

const modes: IModes = {
	light: {
		background: {
			primary: '#fff',
			secondary: 'rgb(247, 249, 249)',
		},
		actions: {
			hover: 'rgba(0, 0, 0, 0.05)',
			active: 'rgba(0, 0, 0, 0.1)',
		},
		svgColor: accentColors.blue,
		typography: '#0f1419',
		popover: {
			shadow: 'rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px',
		},
		divider: '#eff3f4',
		backdrop: 'rgba(0, 0, 0, 0.4)',
		palette: {
			gray: '#536471',
			danger: '#f4212e',
		},
	},
	dim: {
		background: {
			primary: '#15202b',
			secondary: 'rgb(25, 39, 52)',
		},
		actions: {
			hover: 'rgba(255, 255, 255, 0.05)',
			active: 'rgba(255, 255, 255, 0.1)',
		},
		svgColor: '#fff',
		typography: '#fff',
		popover: {
			shadow: 'rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px',
		},
		divider: '#38444d',
		backdrop: 'rgba(91, 112, 131, 0.4)',
		palette: {
			gray: '#8899a6',
			danger: '#f4212e',
		},
	},
	dark: {
		background: {
			primary: '#000',
			secondary: 'rgb(21, 24, 28)',
		},
		actions: {
			hover: 'rgba(255, 255, 255, 0.1)',
			active: 'rgba(255, 255, 255, 0.15)',
		},
		svgColor: '#fff',
		typography: '#d9d9d9',
		divider: '#2f3336',
		backdrop: 'rgba(91, 112, 131, 0.4)',
		popover: {
			shadow: 'rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px',
		},
		palette: {
			gray: '#536471',
			danger: '#f4212e',
		},
	},
};

export default modes;
