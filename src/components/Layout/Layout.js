import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../Theme/GlobalStyles';
import { lightTheme, darkTheme } from '../Theme/Theme';
import { ToggleButton } from './atoms/ToggleButton';
import { FiSun, FiMoon } from 'react-icons/fi';

import Header from './sections/Header';
import Main from './sections/Main';
import Footer from './sections/Footer';

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

  const icon = theme !== 'light' ? <FiSun size={26} /> : <FiMoon size={26} />;
  console.log(icon);

  return (
    <ThemeProvider theme={theme !== 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ToggleButton onClick={toggleTheme}>{icon}</ToggleButton>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
