'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { type ReactElement } from 'react';

const AboutLanguages = (props: { t: ReturnType<typeof useTranslations<'About'>> }): ReactElement => {
  return (
    <Card className="p-4 max-w-[800px]" shadow="lg">
      <CardHeader className="text-primary">{props.t('languages.header')}</CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-justify">
          {props.t('languages.name')} (<span className="text-primary">B2</span> - Upper-Intermediate)
        </p>
      </CardBody>
    </Card>
  );
};

export default AboutLanguages;
