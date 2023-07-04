export const themeColors = {
  main: ({ theme: { theme } }) => (theme === 'dark' ? '#FFF' : '#111'),
  label: ({ theme: { theme } }) =>
    theme === 'dark' ? 'rgba(250, 250, 250, 0.30)' : '#111',
  color404: ({ theme: { theme } }) =>
    theme === 'dark' ? '#FFFFFF' : 'rgba(17, 17, 17, 0.7)',

  mainBackground: ({ theme: { theme } }) =>
    theme === 'dark' ? '#171820' : '#F7F6F9',
  secondBackground: ({ theme: { theme } }) =>
    theme === 'dark' ? '#21222C' : '#fff',
  sidebarBackground: ({ theme: { theme } }) =>
    theme === 'dark' ? '#13151A' : '#fff',
  
  modalBackground: ({ theme: { theme } }) =>
    theme === 'dark' ? '#171820' : '#fff',
  modalBoxShadow: ({ theme: { theme } }) =>
    theme === 'dark' ? '0px 4px 57px 0px rgba(17, 17, 17, 0.05)' : '0px 4px 16px 0px #1111111a',

  borderColor: ({ theme: { theme } }) =>
    theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(17, 17, 17, 0.15)',

  closeIconColor: ({ theme: { theme } }) =>
    theme === 'dark' ? '#ffffff' : '#343434',
  sidebarTitle: ({ theme: { theme } }) =>
    theme === 'dark' ? '#e3f3ff' : '#3e85f3',
  sidebarLabel: ({ theme: { theme } }) =>
    theme === 'dark' ? '#fff' : 'rgba(52, 52, 52, 0.5)',
  sidebarSvg: ({ theme: { theme } }) => (theme === 'dark' ? '#fff' : '#3e85f3'),
  sidebarSubTitle: ({ theme: { theme } }) =>
    theme === 'dark' ? 'rgba(250, 250, 250, 0.30)' : 'rgba(52, 52, 52, 0.5)',
  sidebarActiveBackground: ({ theme: { theme } }) =>
    theme === 'dark' ? '#3e85f3' : '#e3f3ff',
  statisticsBorder: ({ theme: { theme } }) =>
    theme === 'dark' ? 'rgba(227, 243, 255, 0.15)' : '#e3f3ff',
  paginatorBtnBorder: ({ theme: { theme } }) =>
    theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(220, 227, 229, 0.5)',
  
  feedbackText: ({ theme: { theme } }) =>
    theme === 'dark' ? 'rgba(250, 250, 250, 0.30)' : 'rgba(52, 52, 52, 0.80)',
  feedbackTextareaBg: ({ theme: { theme } }) =>
    theme === 'dark' ? '#171820' : 'rgba(246, 246, 246, 1)',
  feedbackTextareaColor: ({ theme: { theme } }) =>
    theme === 'dark' ? '#fff' : '#343434',
  feedbackBtnCancelBg: ({ theme: { theme } }) =>
    theme === 'dark' ? '#21222C' : '#E5EDFA',
  feedbackBtnCancelColor: ({ theme: { theme } }) =>
    theme === 'dark' ? '#fff' : '#343434',
  // feedbackBtnPencilBg: ({ theme: { theme } }) =>
  //   theme === 'dark' ? '#353647' : '#DCEBF7',
  feedbackBtnTrashBg: ({ theme: { theme } }) =>
    theme === 'dark' ? 'rgba(234, 61, 101, 0.20)' : '#FFD2DD',
  
};

export const buttonColors = {
  blue: '#3e85f3',
  lightBlue: '#E5EDFA',
  red: 'rgba(234, 61, 101, 0.2)',
  white: '#ffffff',
};

export const backgroundColors = {
  blue: '#3e85f3',
  white: '#ffffff',
  grey: 'rgba(220, 227, 229, 0.8)',
  lightBlue: '#e3f3ff',
  black: '#13151a',
  darkGrey: '#21222c',
  lightBlueButton: '#dcebf7',
};

export const fontColors = {
  white: '#ffffff',
  blue: '#3e85f3',
  black: '#13151a',
  transparentBlack: 'rgba(17, 17, 17, 0.7)',
  grey: 'rgba(220, 227, 229, 0.8)',
};

export const iconColors = {
  red: '#EA3D65',
  blue: '#3e85f3',
  orange: '#FFAC33',
  greyDisableStar: ' #cec9c1',
};

export const taskColors = {
  priorityLow: '#72c2f8',
  priorityMedium: '#f3b249',
  priorityHigh: '#ea3d65',
};

export const fonts = {
  primary: "'Inter', sans-serif",
  hero: "'Coolvetica', sans-serif",
};

export const animation = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const darkTheme = {
  theme: 'dark',
};

export const lightTheme = {
  theme: 'light',
};
