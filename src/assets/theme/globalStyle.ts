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
  .container {
    border: 1px solid #fff;
    border-radius: 20px;
    margin: 10px;
    padding: 20px;
    background: navy;
    color: #fff;
  }
  .container-red {
    border: 1px solid #000;
    border-radius: 20px;
    margin: 10px;
    padding: 20px;
    background: red;
    color: #000;
  }
  button, a {
    text-decoration: none;
    font-weight: bold;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 6px;
    cursor:pointer;
  }
`;
export default GlobalStyle;
