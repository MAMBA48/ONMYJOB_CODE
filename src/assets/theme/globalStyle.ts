import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins';
    font-weight: 400;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  .dark-theme {
    height: 100vh;
    width: 100vw;
    background: #333;
    color: #fff;
  }
`;
export default GlobalStyle;
