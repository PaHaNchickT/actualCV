'use client';

import { Avatar } from '@nextui-org/react';
// import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState, type ReactElement } from 'react';

const Stack = (): ReactElement => {
  // const t = useTranslations('Welcome');
  const avatarRef = useRef(null);
  const [avatarWidth, setAvatarWidth] = useState(250);

  useEffect(() => {
    if (avatarRef.current) {
      setAvatarWidth(((avatarRef.current as HTMLElement).childNodes[0] as HTMLImageElement).width);
    }
  }, []);

  return (
    <div className="relative w-full h-[100px] flex justify-between items-center bg-background text-2xl font-black shadow-[0_0_20px_-5px_#F6AD34]">
      <div className={`flex justify-around w-[calc((100%-${avatarWidth}px)/2)]`}>
        <p className="self-center text-[#F67E34]">HTML</p>
        <div className="flex flex-col gap-1 items-center">
          <p className="text-[#EC407A]">SASS</p>
          <p className="text-[#06B6D4]">Tailwind</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="text-[#F6AD34]">JavaScript</p>
          <p className="text-[#1C78C0]">Webpack</p>
        </div>
      </div>
      <Avatar
        src="/images/avatar.png"
        className="w-[250px] h-[250px] shadow-[0_0_20px_7px_background]"
        ref={avatarRef}
      />
      <div className={`flex justify-around w-[calc((100%-${avatarWidth}px)/2)]`}>
        <div className="flex flex-col gap-1 items-center">
          <p className="text-[#3178C6]">TypeScript</p>
          <p className="text-[#00D8FF]">React</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="text-white">NextJS</p>
          <p className="text-[#764ABC]">Redux</p>
        </div>
        <p className="self-center text-[#FF6434]">Jest</p>
      </div>
    </div>
  );
};

export default Stack;
