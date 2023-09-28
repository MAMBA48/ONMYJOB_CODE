import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home.tsx';
import App from './App.tsx';
import Products from './routes/products.tsx';
import { ThemeProvider } from './components/themeProvider';
import GlobalStyle from './assets/theme/globalStyle.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'products', element: <Products /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
