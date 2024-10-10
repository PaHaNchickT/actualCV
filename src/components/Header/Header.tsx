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
        <NavbarItem>
          <Link
            key="work"
            href="/#work"
            onPress={() => {
              dispatch(swapPage('work'));
              if (selectedPage === 'about' || selectedPage === 'contact') dispatch(toggleLoading(true));
            }}
            underline={selectedPage === 'work' ? 'always' : 'none'}
            color={selectedPage === 'work' ? 'foreground' : 'primary'}
          >
            {t('work')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            key="about"
            href="/about"
            onPress={() => {
              dispatch(swapPage('about'));
              if (selectedPage !== 'about') dispatch(toggleLoading(true));
            }}
            underline={selectedPage === 'about' ? 'always' : 'none'}
            color={selectedPage === 'about' ? 'foreground' : 'primary'}
          >
            {t('about')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            key="contact"
            href="/contact"
            onPress={() => {
              dispatch(swapPage('contact'));
              if (selectedPage !== 'contact') dispatch(toggleLoading(true));
            }}
            underline={selectedPage === 'contact' ? 'always' : 'none'}
            color={selectedPage === 'contact' ? 'foreground' : 'primary'}
          >
            {t('contact')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <LangDropdown />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem className="flex flex-col justify-center items-center h-full gap-10">
          <Link
            key="work"
            href="/#work"
            className="text-3xl"
            onPress={() => {
              if (isMenuOpen) setIsMenuOpen(false);
              dispatch(swapPage('work'));
              if (selectedPage === 'about' || selectedPage === 'contact') dispatch(toggleLoading(true));
            }}
            underline={selectedPage === 'work' ? 'always' : 'none'}
            color={selectedPage === 'work' ? 'foreground' : 'primary'}
          >
            {t('work')}
          </Link>
          <Link
            key="about"
            href="/about"
            className="text-3xl"
            onPress={() => {
              if (isMenuOpen) setIsMenuOpen(false);
              dispatch(swapPage('about'));
              if (selectedPage !== 'about') dispatch(toggleLoading(true));
            }}
            underline={selectedPage === 'about' ? 'always' : 'none'}
            color={selectedPage === 'about' ? 'foreground' : 'primary'}
          >
            {t('about')}
          </Link>
          <Link
            key="contact"
            href="/contact"
            className="text-3xl"
            onPress={() => {
              if (isMenuOpen) setIsMenuOpen(false);
              dispatch(swapPage('contact'));
              if (selectedPage !== 'contact') dispatch(toggleLoading(true));
            }}
            underline={selectedPage === 'contact' ? 'always' : 'none'}
            color={selectedPage === 'contact' ? 'foreground' : 'primary'}
          >
            {t('contact')}
          </Link>
          <LangDropdown />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
