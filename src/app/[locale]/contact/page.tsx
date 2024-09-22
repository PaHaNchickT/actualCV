'use client';

import { Card, CardBody, CardHeader, Link } from '@nextui-org/react';
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
            <CardHeader className="justify-center">{t('alt.title')}</CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex justify-between gap-5">
                <Link href="https://t.me/pahanchickt" target="_blank">
                  {t('alt.tg')}
                </Link>
                <Link href="https://vk.com/ternopavel" target="_blank">
                  {t('alt.vk')}
                </Link>
                <Link href="mailto: pt1999@mail.ru" target="_blank">
                  pt1999@mail.ru
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
