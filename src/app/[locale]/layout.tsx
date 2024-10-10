import '@/styles/globals.css';
import type { Metadata } from 'next';
import { getMessages } from 'next-intl/server';
import { type ReactElement } from 'react';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { type Locale } from '@/i18n';

import Providers from '../providers';

export const metadata: Metadata = {
  title: "Pavel's Terno Portfolio",
  description: 'Portfolio of Junior Frontend Developer Pavel Terno made using TypeScript, React and Next.js',
};

const RootLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>): Promise<ReactElement> => {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body>
        <Providers locale={locale} messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="w-full flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
