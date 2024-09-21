'use client';

// import { Link } from '@nextui-org/react';
// import { useTranslations } from 'next-intl';
import type { ReactElement } from 'react';

import Stack from '@/components/Stack/Stack';
import Video from '@/components/Video/Video';
import WelcomeBanner from '@/components/WelcomeBanner/WelcomeBanner';
import Work from '@/components/Work/Work';

const Home = (): ReactElement => {
  return (
    <div className="flex flex-col justify-center w-full relative">
      <Video />
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
