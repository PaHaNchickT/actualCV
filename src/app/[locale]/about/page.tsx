/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Button, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { useEffect, type ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import AboutAddEducation from '@/components/AboutAddEducation/AboutAddEducation';
import AboutEducation from '@/components/AboutEducation/AboutEducation';
import AboutHobby from '@/components/AboutHobby/AboutHobby';
import AboutInfo from '@/components/AboutInfo/AboutInfo';
import AboutLanguages from '@/components/AboutLanguages/AboutLanguages';
import AboutStack from '@/components/AboutStack/AboutStack';
import AboutWork from '@/components/AboutWork/AboutWork';
import Loader from '@/components/Loader/Loader';
import Video from '@/components/Video/Video';
import { ASSETS_PATH } from '@/constants/global-constants';
import { toggleLoading } from '@/redux/appStateSlice';
import type { RootState } from '@/redux/store';

const About = (): ReactElement => {
  const t = useTranslations('About');

  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.appState.isLoading);

  useEffect(() => {
    dispatch(toggleLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-center w-full relative">
          <Video />
          <div className="w-full p-10 relative z-[2] flex flex-col items-center gap-10">
            <h3 className="font-black text-4xl text-center sm:text-5xl">{t('title')}</h3>
            <div className="flex flex-col gap-5 lg:w-[800px]">
              <AboutInfo t={t} />

              <div className="flex gap-5 flex-col-reverse lg:flex-row">
                <div className="flex flex-col gap-5">
                  <AboutEducation t={t} />
                  <AboutAddEducation t={t} />
                </div>
                <div className="flex flex-col gap-5">
                  <AboutWork t={t} />
                </div>
              </div>

              <div className="flex gap-5 flex-col-reverse lg:flex-row">
                <div className="flex flex-col gap-5">
                  <AboutLanguages t={t} />
                  <AboutHobby t={t} />
                </div>
                <AboutStack t={t} />
              </div>
            </div>
            <Link href={ASSETS_PATH.cv} download="Terno Pavel CV">
              <Button color="primary" size="lg" className="text-background">
                {t('downloadCV')}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
