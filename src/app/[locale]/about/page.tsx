'use client';

import type { ReactElement } from 'react';

import About from '@/components/About/About';
import Video from '@/components/Video/Video';

const Home = (): ReactElement => {
  return (
    <div className="flex flex-col justify-center w-full relative">
      <Video />
      <About />
    </div>
  );
};

export default Home;
