import { useContext } from 'react';
import { ThemeContext } from './themeProvider';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const MyHeader = styled.header`
  display: flex;
  border-radius: 0px 0px 50px 50px;
  justify-content: space-between;
  background: rgba(0,0,0, 0.5);
  padding: 20px;
  align-item: center;
  & ul {
    display: flex;
    list-style: none;
    gap: 10px
  }
  & button, a {
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

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <MyHeader>
      <span
        style={{
          display: 'flex',
          padding: '10px',
          gap: '10px',
        }}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </span>
      <span>
        <button onClick={toggleTheme}>Theme: {theme}</button>
      </span>
    </MyHeader>
  );
};
export default Header;
