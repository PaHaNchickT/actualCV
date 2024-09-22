'use client';

// import { Link } from '@nextui-org/react';
// import { useTranslations } from 'next-intl';
import type { MutableRefObject } from 'react';
import { useEffect, useRef, type ReactElement } from 'react';

import Stack from '@/components/Stack/Stack';
import Video from '@/components/Video/Video';
import WelcomeBanner from '@/components/WelcomeBanner/WelcomeBanner';
import Work from '@/components/Work/Work';

const Home = (): ReactElement => {
  const elementRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (window && window.location.hash === '#work') elementRef.current.scrollIntoView();
  }, []);

  return (
    <div className="flex flex-col justify-center w-full relative">
      <Video />
      <WelcomeBanner />
      <Stack elementRef={elementRef} />
      <Work />
    </div>
  );
};

export default Home;
