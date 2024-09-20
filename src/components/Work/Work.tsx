'use client';

import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import type { ReactElement } from 'react';

import { WORKS } from '@/constants/constants';

import WorkItems from '../WorkItems/WorkItems';

const Work = (): ReactElement => {
  const t = useTranslations('Works');

  return (
    <div className="flex justify-center flex-wrap gap-5 w-full pt-[120px] px-20 relative z-1 bg-gradient-to-t from-transparent to-background shadow-[0_0_40px_20px_background]">
      {WORKS.map((item, index) => (
        <WorkItems item={item} key={index} />
      ))}
      <div className="p-10">
        <Button size="lg" color="primary" className="text-black">
          {t('btnAbout')}
        </Button>
      </div>
    </div>
  );
};

export default Work;
