import bgDesktopDark from '../images/bg-desktop-dark.jpg';
import bgDesktopLight from '../images/bg-desktop-light.jpg';
import bgMobileDark from '../images/bg-mobile-dark.jpg';
import bgMobileLight from '../images/bg-mobile-light.jpg';
import iconSun from '../images/icon-sun.svg';
import iconMoon from '../images/icon-moon.svg';

export const lightTheme = {
  bodyBg: 'white',
  todosBg: 'white',
  headings: 'black',
  inputText: 'hsl(233, 14%, 35%)',
  text: 'hsl(233, 14%, 35%)',
  textCompleted: 'hsl(0, 0%, 98%)',
  transitionTime: '.25s',
  bgDesktop: bgDesktopLight,
  bgMobile: bgMobileLight,
  icon: iconMoon,
  fill: 'hsl(233, 14%, 35%)',
  
};

export const darkTheme = {
  bodyBg: '#141a2c',
  todosBg: ' hsl(233, 14%, 35%)',
  headings: 'white',
  inputText: 'white',
  text: 'white',
  textCompleted: 'hsl(0, 0%, 98%)',
  transitionTime: '.25s',
  bgDesktop: bgDesktopDark,
  bgMobile: bgMobileDark,
  icon: iconSun,
  fill: 'white',
};
