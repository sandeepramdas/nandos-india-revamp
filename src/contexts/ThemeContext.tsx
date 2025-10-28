'use client';

import { useEffect } from 'react';

/**
 * Fixed Dark Theme Provider for Nandos
 * Applies dark mode permanently for professional restaurant branding
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Always apply dark mode
    document.documentElement.classList.add('dark');
    // Set color scheme for better browser integration
    document.documentElement.style.colorScheme = 'dark';
  }, []);

  return <>{children}</>;
}
