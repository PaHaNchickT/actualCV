'use client';

import { type ReactElement } from 'react';

import { ASSETS_PATH } from '@/constants/constants';

const Video = (): ReactElement => {
  return (
    <video
      src={ASSETS_PATH.video}
      poster={ASSETS_PATH.videoPoster}
      width="100%"
      autoPlay
      muted
      loop
      className="fixed top-0 z-[0] blur-[2px] opacity-90"
    ></video>
  );
};

export default Video;