'use client';

import { useTranslations } from 'next-intl';
import type { ReactElement } from 'react';

const WelcomeBanner = (): ReactElement => {
  const t = useTranslations('Welcome');

  return (
    <div className="relative w-full h-[710px] flex flex-col justify-center items-center relative z-[1]">
      <h1 className="font-black text-8xl">{t('h1')}</h1>
      <h2 className="text-xl text-center">{t('h2')}</h2>
    </div>
  );
};

export default WelcomeBanner;
