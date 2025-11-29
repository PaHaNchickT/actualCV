'use client';

import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState, type ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { LINKS_ARRAY } from '@/constants/global-constants';
import { usePathnameIntl } from '@/navigation';
import type { RootState } from '@/redux/store';
import LangDropdown from '@/ui/LangDropdown/LangDropdown';

import ProgressLink from '../ProgressBar/ProgressLink';

const Header = (): ReactElement => {
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
      classNames={{
        wrapper: 'max-w-[1298px]',
      }}
    >
      <NavbarContent>
        <ProgressLink href="/" isSelected={selectedPage === ''}>
          <Image src="/images/logo.png" width={48} height={48} alt="logo" />
        </ProgressLink>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center"></NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        {LINKS_ARRAY.map((link, index) => (
          <NavbarItem key={index}>
            <ProgressLink key={index} href={`/${link}`} isSelected={selectedPage === link}>
              {t(link)}
            </ProgressLink>
          </NavbarItem>
        ))}
        <NavbarItem>
          <LangDropdown />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem className="flex flex-col justify-center items-center h-full gap-10">
          {LINKS_ARRAY.map((link, index) => (
            <ProgressLink key={index} href={`/${link}`} isSelected={selectedPage === link}>
              {t(link)}
            </ProgressLink>
          ))}
          <LangDropdown />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
