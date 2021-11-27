import '@mui/material/styles';

interface IThemePalette {}

declare module '@mui/material/styles' {
	interface Theme extends IThemePalette {}
}
