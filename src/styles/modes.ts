import { IModes } from './../interfaces/styled';
import accentColors from './accentColors';

const modes: IModes = {
	light: { backgroundColor: '#fff', svgColor: accentColors.blue, typography: '#0f1419' },
	dim: { backgroundColor: '#192734', svgColor: '#fff', typography: '#fff' },
	dark: { backgroundColor: '#000', svgColor: '#fff', typography: '#fff' },
};

export default modes;
