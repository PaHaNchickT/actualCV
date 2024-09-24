'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { type ReactElement } from 'react';

const AboutHobby = (props: { t: ReturnType<typeof useTranslations<'About'>> }): ReactElement => {
  return (
    <Card className="p-4 max-w-[800px] text-sm sm:text-base" shadow="lg">
      <CardHeader className="text-primary">{props.t('hobby.header')}</CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-justify">{props.t('hobby.text')}</p>
      </CardBody>
    </Card>
  );
};

export default AboutHobby;
