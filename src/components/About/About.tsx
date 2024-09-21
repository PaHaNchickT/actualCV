'use client';

import { Avatar, Button, Card, CardBody, CardHeader, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { useState, type ReactElement } from 'react';

import { DIPLOMAS, EDUCATION, STACK } from '@/constants/about-constants';
import { ASSETS_PATH } from '@/constants/work-constants';

const About = (): ReactElement => {
  const [counter, setCounter] = useState(1);
  const t = useTranslations('About');
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
    <div className="w-full p-10 relative z-[2] flex flex-col items-center gap-10">
      <h3 className="font-black text-5xl text-center">{t('title')}</h3>
      <div className="flex flex-col gap-5 w-[800px]">
        <Card className="p-4 max-w-[800px]" shadow="lg">
          <CardBody className="overflow-visible py-2">
            <div className="flex gap-5 justify-between items-center">
              <div className="flex flex-col gap-5">
                <Avatar src={ASSETS_PATH.avatar} className="w-[200px] h-[200px] shadow-[0_0_20px_7px_background]" />
                <div>
                  <p>
                    <span className="text-primary mr-1">{t('info.age')}</span> 25
                  </p>
                  <p>
                    <span className="text-primary mr-1">{t('info.status')}</span>
                    {t('info.current')}
                  </p>
                </div>
              </div>
              <p className="w-8/12 text-justify">{t('info.text')}</p>
            </div>
          </CardBody>
        </Card>
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
                {t('work.0')} {linkEpam} {t('work.1')} {linkRSS} {t('work.2')}
              </p>
            </div>
          </CardBody>
        </Card>
        <div className="flex gap-5">
          <div className="flex flex-col gap-5">
            <Card className="p-4 max-w-[800px]" shadow="lg">
              <CardHeader className="text-primary">{t('education.header')}</CardHeader>
              <CardBody className="overflow-visible py-2 pl-7">
                <ul className="list-disc marker:text-primary">
                  {EDUCATION.map((item, index) => (
                    <li key={index}>
                      <p>{t(item.name)}</p>
                      <p className="font-black">{t(item.degree)}</p>
                      <p className="text-primary">{item.duration}</p>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
            <Card className="p-4 max-w-[800px]" shadow="lg">
              <CardHeader className="text-primary">{t('languages.header')}</CardHeader>
              <CardBody className="overflow-visible py-2">
                <p className="text-justify">
                  {t('languages.name')} (<span className="text-primary">B2</span> - Upper-Intermediate)
                </p>
              </CardBody>
            </Card>
            <Card className="p-4 max-w-[800px]" shadow="lg">
              <CardHeader className="text-primary">{t('hobby.header')}</CardHeader>
              <CardBody className="overflow-visible py-2">
                <p className="text-justify">{t('hobby.text')}</p>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="p-4 max-w-[800px] h-full" shadow="lg">
              <CardHeader className="text-primary">{t('stack.header')}</CardHeader>
              <CardBody className="overflow-visible py-2 pl-7 h-full">
                <ul className="list-disc marker:text-primary h-full flex flex-col justify-between">
                  {STACK.map((item, index) => (
                    <li key={index}>{t(item)}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <Link href={ASSETS_PATH.cv} download="Terno Pavel CV">
        <Button color="primary" size="lg" className="text-background">
          {t('downloadCV')}
        </Button>
      </Link>
    </div>
  );
};

export default About;
