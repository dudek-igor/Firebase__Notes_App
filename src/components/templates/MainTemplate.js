import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'theme';

// Components is responsible for added global styles and theme for app
const MainTemplate = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <>{children}</>
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
