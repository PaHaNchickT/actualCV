'use client';

import { useTranslations } from 'next-intl';
// import { useTranslations } from 'next-intl';
// import { useTheme } from 'next-themes';
import type { ReactElement } from 'react';

// import GithubOutlineIcon from './GithubOutlineIcon';

// const githubLinks = (t: ReturnType<typeof useTranslations<'Home.team'>>): { href: string; label: string }[] => [
//   {
//     href: 'https://github.com/mistert1a',
//     label: t('developer1.name'),
//   },
//   {
//     href: 'https://github.com/pahanchickt',
//     label: t('developer2.name'),
//   },
//   {
//     href: 'https://github.com/ru-ab',
//     label: t('developer3.name'),
//   },
// ];

export const Footer = (): ReactElement => {
  const t = useTranslations('Works');

  return (
    <footer className="z-50 bg-transparent border-t-1 border-t-default-300 w-full flex justify-center backdrop-blur-lg backdrop-saturate-150">
      <div className="max-w-5xl w-full p-6 flex justify-between relative text-primary font-black">
        <p>{t('footerAuthor')}</p>
        <p className="w-[39px] absolute left-[calc((100%-39px)/2)] text-center">2024</p>
        <p>GitHub</p>
      </div>
    </footer>
  );
};

export default Footer;
