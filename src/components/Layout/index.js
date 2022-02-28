import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../Theme/Theme';
import { GlobalStyles } from '../../Theme/GlobalStyles';
import Header from '../Header';
import Footer from '../Footer.js';
import { TodosContextProvider } from '../../contexts/TodoContextProvider';
import TodoList from '../List/TodoList';
import FilterBar from '../FilterBar/FilterBar';

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
      <TodosContextProvider>
        <Header toggleTheme={toggleTheme} />
        <TodoList />
        <FilterBar />
      </TodosContextProvider>

      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
