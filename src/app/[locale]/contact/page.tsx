/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Button, Card, CardBody, CardHeader, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { useEffect, type ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import ContactForm from '@/components/ContactForm/ContactForm';
import Loader from '@/components/Loader/Loader';
import Video from '@/components/Video/Video';
import { CONTACT_ICONS } from '@/constants/contact-constants';
import { toggleLoading } from '@/redux/appStateSlice';
import type { RootState } from '@/redux/store';

const Contact = (): ReactElement => {
  const t = useTranslations('Contact');

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
            <div className="flex flex-col gap-10">
              <ContactForm t={t} />
              <Card className="p-4" shadow="lg">
                <CardHeader>{t('alt.title')}</CardHeader>
                <CardBody className="overflow-visible py-2">
                  <div className="flex flex-col justify-between gap-5">
                    {CONTACT_ICONS.map((item, index) => (
                      <div className="flex justify-between" key={index}>
                        <li>
                          <Link href={item.href} target="_blank">
                            {item.isTranslated ? t(item.text!) : item.altText}
                          </Link>
                        </li>
                        <Link href={item.href} target="_blank">
                          <Button
                            isIconOnly
                            color="primary"
                            aria-label="Like"
                            className="w-[24px] min-w-[24px] h-[24px]"
                          >
                            {item.icon}
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
