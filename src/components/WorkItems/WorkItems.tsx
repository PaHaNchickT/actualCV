'use client';

import { Card, CardBody, useDisclosure } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { type ReactElement } from 'react';

import type { TWorkItem } from '@/types/types';

import ImageSkeleton from '../ImageSkeleton/ImageSkeleton';
import WorkModal from '../WorkModal/WorkModal';

const WorkItems = (props: { item: TWorkItem; t: ReturnType<typeof useTranslations<'Works'>> }): ReactElement => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div>
        <Card
          shadow="sm"
          isPressable
          onPress={onOpen}
          className="w-[200px] h-[200px] transition-all duration-300 flex flex-col justify-center relative bg-black group/card shadow-[0_0_20px_7px_background] hover:shadow-[0_0_10px_1px_#F6AD34] lg:w-[400px] lg:h-[400px]"
        >
          <CardBody className="overflow-visible p-0 absolute z-[2] opacity-70 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]">
            <div
              className={`z-[1] ${props.item.cover} bg-cover w-full h-full blur-[2px] transition-all duration-300 grayscale group-hover/card:grayscale-0 group-hover/card:blur-[1px]`}
            ></div>
            <ImageSkeleton />
          </CardBody>
          <div className="bg-background py-1 text-xl box-border relative z-[3] transition-all min-w-full group-hover/card:min-w-full group-hover/card:text-5xl group-hover/card:py-4 group-hover/card:px-0 lg:min-w-[10px] lg:pl-8 lg:pr-2">
            <p>{props.t(`items.${props.item.id}.title`)}</p>
          </div>
        </Card>
      </div>

      <WorkModal item={props.item} isOpen={isOpen} onOpenChange={onOpenChange} t={props.t} />
    </>
  );
};

export default WorkItems;
