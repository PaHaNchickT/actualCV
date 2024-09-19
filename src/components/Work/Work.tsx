'use client';

import type { ReactElement } from 'react';

import { WORKS } from '@/constants/constants';

import WorkItems from '../WorkItems/WorkItems';

const Work = (): ReactElement => {
  return (
    <div className="flex justify-center flex-wrap gap-5 w-full py-[120px] px-20 relative z-1 bg-gradient-to-t from-transparent to-background shadow-[0_0_20px_20px_background]">
      {WORKS.map((item, index) => (
        <WorkItems item={item} key={index} />
      ))}
    </div>
  );
};

export default Work;
