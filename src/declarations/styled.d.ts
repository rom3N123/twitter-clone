import { ITheme } from "_types/styled";
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
}
