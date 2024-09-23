import { useTranslations } from 'next-intl';
import type { ReactElement } from 'react';

import Video from '@/components/Video/Video';

export default function NotFound(): ReactElement {
  const t = useTranslations('NotFound');

  return (
    <div className="flex justify-center items-center h-screen">
      <Video />
      <div className="flex flex-col z-[2]">
        <p className="text-4xl text-center">404</p>
        <p className="text-xl">{t('message')}</p>
      </div>
    </div>
  );
}
