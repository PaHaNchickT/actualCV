'use client';

import { NextUIProvider } from '@nextui-org/react';
import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect, useState, type ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import Loader from '@/components/Loader/Loader';
import type { Locale } from '@/i18n';
import { useRouterIntl } from '@/navigation';

type ProviderProps = {
  children: React.ReactNode;
  locale: Locale;
  messages: AbstractIntlMessages;
};

const Providers = ({ children, locale, messages }: ProviderProps): ReactNode => {
  const router = useRouterIntl();
  const [mounted, setMounted] = useState(false);
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const [screenWidth, setScreenWidth] = useState(1024);

  useEffect(() => {
    setMounted(true);
    if (window) setScreenWidth(window.screen.width);
  }, []);

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <NextUIProvider navigate={router.push}>
        {mounted ? (
          <NextThemesProvider attribute="class" defaultTheme="dark">
            {children}
          </NextThemesProvider>
        ) : (
          <Loader />
        )}
        <Toaster position={screenWidth <= 640 ? 'bottom-center' : 'bottom-right'} />
      </NextUIProvider>
    </NextIntlClientProvider>
  );
};

export default Providers;
