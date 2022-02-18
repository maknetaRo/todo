import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../Theme/Theme';
import { GlobalStyles } from '../../Theme/GlobalStyles';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer.js';

const Layout = () => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme !== 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
