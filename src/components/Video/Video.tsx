'use client';

import { Image } from '@nextui-org/react';
import { type ReactElement } from 'react';

import { ASSETS_PATH } from '@/constants/work-constants';

const Video = (): ReactElement => {
  return (
    <Image
      src={ASSETS_PATH.video}
      alt="background"
      width="1440px"
      className="fixed top-0 left-0 z-[0] blur-[2px] opacity-90 w-[1440px] max-w-[1440px]"
    />
  );
};

export default Video;
