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
    </div>
  );
};

export default Home;
