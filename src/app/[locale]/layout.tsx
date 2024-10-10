import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { type ReactElement } from 'react';

import { locales, type Locale } from '@/i18n';

import Providers from '../providers';
import Controller from './controller';

export function generateStaticParams(): {
  locale: Locale;
}[] {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Pavel's Terno Portfolio",
  description: 'Portfolio of Junior Frontend Developer Pavel Terno made using TypeScript, React and Next.js',
};

const comfortaa = Comfortaa({ subsets: ['latin'] });

const RootLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>): Promise<ReactElement> => {
  unstable_setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={comfortaa.className}>
        <Providers locale={locale} messages={messages}>
          <Controller>{children}</Controller>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
