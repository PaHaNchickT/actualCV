'use client';

// import { Link } from '@nextui-org/react';
// import { useTranslations } from 'next-intl';
import type { ReactElement } from 'react';

import Stack from '@/components/Stack/Stack';
import WelcomeBanner from '@/components/WelcomeBanner/WelcomeBanner';
import Work from '@/components/Work/Work';
import { ASSETS_PATH } from '@/constants/constants';

const Home = (): ReactElement => {
  return (
    <div className="flex flex-col justify-center w-full relative">
      <video
        src={ASSETS_PATH.video}
        poster={ASSETS_PATH.videoPoster}
        width="100%"
        autoPlay
        muted
        loop
        className="fixed top-0 z-[0] blur-[2px] opacity-90"
      ></video>
      <WelcomeBanner />
      <Stack />
      <Work />
      {/* <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-center">{t('welcome')}</h1>
        <div className="flex gap-5 justify-center">
          <Link href="/GET">{t('buttons.restFullClient')}</Link>
          <Link href="/GRAPHQL">{t('buttons.graphiQlClient')}</Link>
          <Link href="/history">{t('buttons.history')}</Link>
        </div>
        <Avatar
          isBordered
          radius="full"
          src="/images/avatar1.jpg"
          className="w-20 h-20 min-[440px]:w-28 min-[440px]:h-28 md:w-40 md:h-40"
        />
      </div> */}
    </div>
  );
};

export default Home;
