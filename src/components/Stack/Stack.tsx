'use client';

import { Avatar } from '@nextui-org/react';
import type { MutableRefObject } from 'react';
import { useEffect, useRef, useState, type ReactElement } from 'react';

import { ASSETS_PATH } from '@/constants/work-constants';

import StackItems from '../StackItems/StackItems';

const Stack = (props: { elementRef: MutableRefObject<HTMLDivElement> }): ReactElement => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const [avatarWidth, setAvatarWidth] = useState(250);

  useEffect(() => {
    if (avatarRef.current) {
      setAvatarWidth(((avatarRef.current as HTMLElement).childNodes[0] as HTMLImageElement).width);
    }
  }, []);

  return (
    <div
      id="work"
      className="relative w-full h-[80px] flex justify-center items-center bg-background text-2xl font-black shadow-[0_0_20px_-5px_#F6AD34] z-[2] lg:h-[100px] lg:justify-between"
      ref={props.elementRef}
    >
      <StackItems index={0} avatarWidth={avatarWidth} />
      <Avatar
        src={ASSETS_PATH.avatar}
        className="w-[150px] h-[150px] shadow-[0_0_20px_7px_background] lg:w-[250px] lg:h-[250px]"
        ref={avatarRef}
      />
      <StackItems index={1} avatarWidth={avatarWidth} />
    </div>
  );
};

export default Stack;
