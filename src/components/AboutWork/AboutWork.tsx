'use client';

import { Button, Card, CardBody, Link } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { useState, type ReactElement } from 'react';

import { DIPLOMAS } from '@/constants/about-constants';

const AboutWork = (props: { t: ReturnType<typeof useTranslations<'About'>> }): ReactElement => {
  const [counter, setCounter] = useState(1);
  console.log(counter);

  const linkEpam = (
    <Link href="https://learn.epam.com/start" target="_blank">
      EPAM
    </Link>
  );
  const linkRSS = (
    <Link href="https://rs.school/courses" target="_blank">
      The Rolling Scopes School
    </Link>
  );

  return (
    <Card className="p-4 max-w-[800px]" shadow="lg">
      <CardBody className="overflow-visible py-2">
        <div className="flex gap-5 justify-between items-center">
          <div>
            <div></div>
            <div>
              <Button
                color="primary"
                onPress={() => {
                  if (counter > 1) setCounter((prevCount) => prevCount - 1);
                }}
                isDisabled={counter > 1 ? false : true}
                className="text-background font-black"
              >
                {'<'}
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  if (counter < DIPLOMAS.length) setCounter((prevCount) => prevCount + 1);
                }}
                isDisabled={counter < DIPLOMAS.length ? false : true}
                className="text-background font-black"
              >
                {'>'}
              </Button>
            </div>
          </div>
          <p className="w-8/12 text-justify">
            {props.t('work.0')} {linkEpam} {props.t('work.1')} {linkRSS} {props.t('work.2')}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default AboutWork;
