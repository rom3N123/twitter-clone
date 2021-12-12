import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   a {
      text-decoration: none;
      color: inherit;
   }

   svg {
         fill: ${({ theme }) => theme.mode.svg.primary};
   }

   input, textarea {
      background-color: inherit;
      color: ${({ theme }) => theme.mode.typography.primary};
      &::placeholder {
         font-family: inherit;
      }
   }

   textarea {
      resize: none;
      border: 0;
      outline: 0;
      font-family: inherit;
   }
`;

export default GlobalStyles;
