'use client';

// import { Image } from '@nextui-org/react';
import { type ReactElement } from 'react';

import { ASSETS_PATH } from '@/constants/work-constants';

const Video = (): ReactElement => {
  return (
    // <Image
    //   src={ASSETS_PATH.video}
    //   alt="background"
    //   width="1440px"
    //   className="fixed top-0 left-0 z-[0] blur-[2px] opacity-90 w-[1440px] max-w-[1440px]"
    // />
    <video
      src={ASSETS_PATH.video}
      poster={ASSETS_PATH.videoPoster}
      width="100%"
      autoPlay
      muted
      loop
      className="fixed top-0 z-[0] blur-[2px] opacity-90 w-[1440px] max-w-[1440px]"
    ></video>
  );
};

export default Video;
