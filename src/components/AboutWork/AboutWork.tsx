'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { type ReactElement } from 'react';

import { WORK } from '@/constants/about-constants';

const AboutWork = (props: { t: ReturnType<typeof useTranslations<'About'>> }): ReactElement => {
  return (
    <>
      <Card className="p-4 max-w-[800px] text-sm sm:text-base h-full" shadow="lg">
        <CardHeader className="text-primary">{props.t('work.header')}</CardHeader>
        <CardBody className="overflow-visible pt-2 pb-0 pl-7">
          <ul className="list-disc marker:text-primary">
            {WORK.map((item, index) => (
              <li key={index} className="mb-10">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2 w-[115px]">
                    <div className="font-black">
                      <p>{props.t(item.durationFrom)}</p>
                      <p>{props.t(item.durationTo)}</p>
                    </div>
                    <p className="text-primary">{props.t(item.durationSummary)}</p>
                  </div>
                  <div className="flex flex-col gap-2 w-[65%]">
                    <div>
                      <p className="font-black">{props.t(item.name)}</p>
                      <p className="text-primary">{props.t(item.city)}</p>
                    </div>
                    <div className="text-justify">
                      <p className="font-black">{props.t(item.position)}</p>
                      <div>
                        {props
                          .t(item.description)
                          .split('—')
                          .map((paragraph, index) => (
                            <p key={index}>{`${index ? '— ' : ''}${paragraph}`}</p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </>
  );
};

export default AboutWork;
