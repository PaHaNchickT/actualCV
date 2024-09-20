'use client';

import { Button, useDisclosure } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import type { ReactElement } from 'react';

import { WORKS } from '@/constants/constants';

import WorkAboutModal from '../WorkAboutModal/WorkAboutModal';
import WorkItems from '../WorkItems/WorkItems';

const Work = (): ReactElement => {
  const t = useTranslations('Works');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex justify-center flex-wrap gap-5 w-full pt-[120px] px-20 relative z-1 bg-gradient-to-t from-transparent to-background">
      {WORKS.map((item, index) => (
        <WorkItems item={item} t={t} key={index} />
      ))}
      <div className="p-10">
        <Button size="lg" color="primary" className="text-black" onPress={onOpen}>
          {t('items.6.title')}
        </Button>
        <WorkAboutModal isOpen={isOpen} onOpenChange={onOpenChange} t={t} />
      </div>
    </div>
  );
};

export default Work;
