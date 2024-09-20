'use client';

import type { ReactElement } from 'react';

import { STACK, STACK_COLORS } from '@/constants/constants';

const StackItems = (props: { index: number; avatarWidth: number }): ReactElement => {
  return (
    <div className={`flex justify-around w-[calc((100%-${props.avatarWidth}px)/2)]`}>
      {STACK[props.index].map((value, index) => {
        return (
          <div key={index} className="flex flex-col gap-1 items-center">
            {value.map((subValue) => (
              <p key={subValue.id} className={`self-center text-[${STACK_COLORS[subValue.key]}]`}>
                {subValue.name}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default StackItems;
