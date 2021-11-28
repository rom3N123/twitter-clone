import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   a {
      text-decoration: none;
      color: inherit;
   }

   svg {
         fill: ${({ theme }) => theme.mode.svgColor};
      }
`;

export default GlobalStyles;
