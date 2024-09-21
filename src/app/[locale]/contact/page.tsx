'use client';

import type { ReactElement } from 'react';

import Video from '@/components/Video/Video';

const Home = (): ReactElement => {
  return (
    <div className="flex flex-col justify-center w-full relative">
      <Video />
      <p className="relative z-[2]">Contact</p>
    </div>
  );
};

export default Home;
