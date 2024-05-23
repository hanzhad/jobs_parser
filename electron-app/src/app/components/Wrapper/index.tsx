import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../theme';
import { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode
}
const PageWrapper: FC<PropsType> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default PageWrapper;