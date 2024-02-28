import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { useAppSelector } from '../hooks/useRTK';

export default function StateThemeProvider({ children }: PropsWithChildren) {
  const currentTheme = useAppSelector((state) => state.themeSlice.themeMode);
  return (
    <ThemeProvider theme={theme[currentTheme ? 'dark' : 'light']}>
      {children}
    </ThemeProvider>
  );
}
