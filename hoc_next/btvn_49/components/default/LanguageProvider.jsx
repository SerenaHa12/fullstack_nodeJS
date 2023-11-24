"use client";

import { LanguageProvider as NextIntlClientProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return <NextIntlClientProvider {...props}>{children}</NextIntlClientProvider>;
}