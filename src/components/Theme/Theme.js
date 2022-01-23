import bgDesktopDark from '../../images/bg-desktop-dark.jpg';
import bgDesktopLight from '../../images/bg-desktop-light.jpg';
import bgMobileDark from '../../images/bg-mobile-dark.jpg';
import bgMobileLight from '../../images/bg-mobile-light.jpg';
import iconSun from '../../images/icon-sun.svg';
import iconMoon from '../../images/icon-moon.svg';

export const lightTheme = {
  bodyBg: 'white',
  headings: 'black',
  text: 'black',
  transitionTime: '.25s',
  bgDesktop: bgDesktopLight,
  bgMobile: bgMobileLight,
  icon: iconMoon,
};

export const darkTheme = {
  bodyBg: '#141a2c',
  headings: 'white',
  text: 'white',
  transitionTime: '.25s',
  bgDesktop: bgDesktopDark,
  bgMobile: bgMobileDark,
  icon: iconSun,
};
