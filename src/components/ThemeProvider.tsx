/**
 * ThemeProvider
 * This is a pass-through Server Component. It has no client-side hooks or state,
 * so there is no reason for it to be a client component. Keeping it as a Server
 * Component allows all children (Header, Footer, page content) to benefit from
 * RSC optimization — reducing the hydration boundary surface area.
 *
 * If you add theme-switching (e.g., next-themes), add 'use client' back at that time.
 */
import React from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
