'use client';

import type { ReactNode } from 'react';
import { type ReactElement } from 'react';
import { Provider } from 'react-redux';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { store } from '@/redux/store';

const Controller = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </div>
    </Provider>
  );
};

export default Controller;
