'use client';

import { Avatar } from '@nextui-org/react';
import { useEffect, useRef, useState, type ReactElement } from 'react';

import { TEXT_CONTENT } from '@/constants/constants';

import StackItems from '../StackItems/StackItems';

const Stack = (): ReactElement => {
  const avatarRef = useRef(null);
  const [avatarWidth, setAvatarWidth] = useState(250);

  useEffect(() => {
    if (avatarRef.current) {
      setAvatarWidth(((avatarRef.current as HTMLElement).childNodes[0] as HTMLImageElement).width);
    }
  }, []);

  return (
    <div className="relative w-full h-[100px] flex justify-between items-center bg-background text-2xl font-black shadow-[0_0_20px_-5px_#F6AD34]">
      <StackItems index={0} avatarWidth={avatarWidth} />
      <Avatar
        src={TEXT_CONTENT.path.avatar}
        className="w-[250px] h-[250px] shadow-[0_0_20px_7px_background]"
        ref={avatarRef}
      />
      <StackItems index={1} avatarWidth={avatarWidth} />
    </div>
  );
};

export default Stack;
