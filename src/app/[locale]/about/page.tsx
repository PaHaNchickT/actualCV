'use client';

import { Button, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import type { ReactElement } from 'react';

import AboutEducation from '@/components/AboutEducation/AboutEducation';
import AboutHobby from '@/components/AboutHobby/AboutHobby';
import AboutInfo from '@/components/AboutInfo/AboutInfo';
import AboutLanguages from '@/components/AboutLanguages/AboutLanguages';
import AboutStack from '@/components/AboutStack/AboutStack';
import AboutWork from '@/components/AboutWork/AboutWork';
import Video from '@/components/Video/Video';
import { ASSETS_PATH } from '@/constants/work-constants';

const Home = (): ReactElement => {
  const t = useTranslations('About');

  return (
    <div className="flex flex-col justify-center w-full relative">
      <Video />
      <div className="w-full p-10 relative z-[2] flex flex-col items-center gap-10">
        <h3 className="font-black text-5xl text-center">{t('title')}</h3>
        <div className="flex flex-col gap-5 w-[800px]">
          <AboutInfo t={t} />
          <AboutWork t={t} />
          <div className="flex gap-5">
            <div className="flex flex-col gap-5">
              <AboutEducation t={t} />
              <AboutLanguages t={t} />
              <AboutHobby t={t} />
            </div>
            <div>
              <AboutStack t={t} />
            </div>
          </div>
        </div>
        <Link href={ASSETS_PATH.cv} download="Terno Pavel CV">
          <Button color="primary" size="lg" className="text-background">
            {t('downloadCV')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
