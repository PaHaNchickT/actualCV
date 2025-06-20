'use client';

import { Avatar, Card, CardBody } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { type ReactElement } from 'react';

import { ASSETS_PATH } from '@/constants/global-constants';

const AboutInfo = (props: { t: ReturnType<typeof useTranslations<'About'>> }): ReactElement => {
  return (
    <Card className="p-4 max-w-[800px]" shadow="lg">
      <CardBody className="overflow-visible py-2">
        <div className="flex flex-col gap-5 justify-between items-center sm:flex-row">
          <div className="flex flex-col gap-5">
            <Avatar src={ASSETS_PATH.avatar} className="w-[200px] h-[200px] shadow-[0_0_20px_7px_background]" />
            <div className="text-xs sm:text-sm lg:text-base">
              <p>
                <span className="text-primary mr-1">{props.t('info.age')}</span> 26
              </p>
              <p>
                <span className="text-primary mr-1">{props.t('info.cityLabel')}</span>
                {props.t('info.cityText')}
              </p>
              {/* <p>
                <span className="text-primary mr-1">{props.t('info.status')}</span>
                {props.t('info.current')}
              </p> */}
            </div>
          </div>
          <p className="w-full text-justify text-sm sm:w-8/12 sm:text-base">{props.t('info.text')}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default AboutInfo;
