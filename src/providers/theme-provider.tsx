'use client';

import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from 'next-themes';

//Provider untuk tema dark mode
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
