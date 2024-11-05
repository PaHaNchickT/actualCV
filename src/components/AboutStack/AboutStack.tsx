'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { type ReactElement } from 'react';

import { STACK } from '@/constants/about-constants';

const AboutStack = (props: { t: ReturnType<typeof useTranslations<'About'>> }): ReactElement => {
  return (
    <Card className="p-4 max-w-[800px] text-sm sm:text-base" shadow="lg">
      <CardHeader className="text-primary">{props.t('stack.header')}</CardHeader>
      <CardBody className="overflow-visible py-2 pl-7 h-full">
        <ul className="list-disc marker:text-primary h-full flex flex-col justify-between gap-2 text-justify lg:gap-0">
          {STACK.map((item, index) => (
            <li key={index}>{props.t(item)}</li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default AboutStack;
