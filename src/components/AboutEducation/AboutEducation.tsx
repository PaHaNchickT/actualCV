'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { type ReactElement } from 'react';

import { EDUCATION } from '@/constants/about-constants';

const AboutEducation = (props: { t: ReturnType<typeof useTranslations<'About'>> }): ReactElement => {
  return (
    <Card className="p-4 max-w-[800px] text-sm sm:text-base" shadow="lg">
      <CardHeader className="text-primary">{props.t('education.header')}</CardHeader>
      <CardBody className="overflow-visible py-2 pl-7">
        <ul className="list-disc marker:text-primary flex flex-col gap-3">
          {EDUCATION.map((item, index) => (
            <li key={index}>
              <p>{props.t(item.name)}</p>
              <p className="font-black">{props.t(item.degree)}</p>
              <p className="text-primary">{item.duration}</p>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default AboutEducation;
