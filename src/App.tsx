import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './components/themeProvider';
import Header from './components/header';

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`App ${theme === 'dark' ? 'light' : 'dark-theme'}`}>
      <Header />
      <Outlet />
    </main>
  );
};

export default App;
