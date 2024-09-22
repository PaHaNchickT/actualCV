'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import type { ReactElement } from 'react';

import ContactForm from '@/components/ContactForm/ContactForm';
import Video from '@/components/Video/Video';

const Contact = (): ReactElement => {
  const t = useTranslations('Contact');

  return (
    <div className="flex flex-col justify-center w-full relative">
      <Video />
      <div className="w-full p-10 relative z-[2] flex flex-col items-center gap-10">
        <h3 className="font-black text-5xl text-center">{t('title')}</h3>
        <div className="flex flex-col gap-10">
          <ContactForm t={t} />
          <Card className="p-4" shadow="lg">
            <CardHeader>{t('alt.title')}</CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex justify-between gap-5">
                <p>{t('alt.tg')}</p>
                <p>{t('alt.vk')}</p>
                <p>pt1999@mail.ru</p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
