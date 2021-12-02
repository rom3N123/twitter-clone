import { ITheme } from '../interfaces/styled';
import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
