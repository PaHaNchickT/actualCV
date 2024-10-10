/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Button, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { useEffect, type ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { LINKS_ARRAY } from '@/constants/global-constants';
import { swapPage, toggleLoading } from '@/redux/appStateSlice';
import type { RootState } from '@/redux/store';
import { GithubOutlineIcon } from '@/ui/Icons/GithubOutlineIcon';

export const Footer = (): ReactElement => {
  const dispatch = useDispatch();
  const selectedPage = useSelector((state: RootState) => state.appState.selectedPage);

  const t = useTranslations('Footer');

  useEffect(() => {
    dispatch(
      swapPage(
        (location.hash && location.hash.slice(1, location.hash.length)) ||
          location.pathname.split('/')[location.pathname.split('/').length - 1],
      ),
    );
  }, []);

  return (
    <footer className="z-5 bg-black/30 border-t-1 border-t-default-300 w-full flex justify-center backdrop-blur-lg backdrop-saturate-150">
      <div className="px-6 py-10 gap-10 w-full flex flex-col max-w-[1024px]">
        <div className="flex justify-between">
          <div className="flex gap-10 flex-wrap sm:gap-28">
            <div className="flex flex-col gap-5">
              <p>{t('headers.contact')}</p>
              <Link href="https://vk.com/ternopavel" target="_blank">
                {t('links.vk')}
              </Link>
              <Link href="https://t.me/pahanchickt" target="_blank">
                {t('links.tg')}
              </Link>
              <Link href="mailto: pt1999@mail.ru" target="_blank">
                pt1999@mail.ru
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              <p>{t('headers.navigation')}</p>
              {LINKS_ARRAY.map((link, index) => (
                <Link
                  key={link}
                  href={!index ? `/#${link}` : `/${link}`}
                  onPress={() => {
                    if (window) window.scrollTo(0, 0);
                    dispatch(swapPage(link));
                    if (
                      (!index && selectedPage === 'about') ||
                      (!index && selectedPage === 'contact') ||
                      (index !== 0 && selectedPage !== link)
                    )
                      dispatch(toggleLoading(true));
                  }}
                  underline={selectedPage === link ? 'always' : 'none'}
                  color={selectedPage === link ? 'foreground' : 'primary'}
                >
                  {t(`links.${link}`)}
                </Link>
              ))}
            </div>
          </div>
          <Button
            color="primary"
            className="text-background rounded-full min-w-0 font-black"
            onPress={() => {
              if (window) window.scrollTo(0, 0);
            }}
          >
            ↑
          </Button>
        </div>
        <div className="flex justify-between items-end flex-wrap gap-5">
          <Link href="https://github.com/PaHaNchickT" target="_blank" className="flex gap-2">
            <p>GitHub</p>
            <GithubOutlineIcon />
          </Link>
          <p className="text-sm">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
