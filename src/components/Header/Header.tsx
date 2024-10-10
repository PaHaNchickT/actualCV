/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState, type ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { LINKS_ARRAY } from '@/constants/global-constants';
import { usePathnameIntl } from '@/navigation';
import { swapPage, toggleLoading } from '@/redux/appStateSlice';
import type { RootState } from '@/redux/store';
import LangDropdown from '@/ui/LangDropdown/LangDropdown';

const Header = (): ReactElement => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const selectedPage = useSelector((state: RootState) => state.appState.selectedPage);

  const pathname = usePathnameIntl();
  const t = useTranslations('Header');

  const handleScroll = (): void => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    dispatch(
      swapPage(
        (location.hash && location.hash.slice(1, location.hash.length)) ||
          location.pathname.split('/')[location.pathname.split('/').length - 1],
      ),
    );

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      position="sticky"
      className={`z-50 transition-all duration-300 ${isScrolled ? 'bg-black/30 shadow-lg' : 'bg-transparent'}`}
    >
      <NavbarContent>
        <Link
          href="/"
          onPress={() => {
            if (isMenuOpen) setIsMenuOpen(false);
            dispatch(swapPage(''));
            if (selectedPage === 'about' || selectedPage === 'contact') dispatch(toggleLoading(true));
          }}
        >
          <Image src="/images/logo.png" width={48} height={48} alt="logo" />
        </Link>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center"></NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        {LINKS_ARRAY.map((link, index) => (
          <NavbarItem key={index}>
            <Link
              key={link}
              href={!index ? `/#${link}` : `/${link}`}
              onPress={() => {
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
              {t(link)}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <LangDropdown />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem className="flex flex-col justify-center items-center h-full gap-10">
          {LINKS_ARRAY.map((link, index) => (
            <Link
              key={link}
              href={!index ? `/#${link}` : `/${link}`}
              className="text-3xl"
              onPress={() => {
                if (isMenuOpen) setIsMenuOpen(false);
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
              {t(link)}
            </Link>
          ))}
          <LangDropdown />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
