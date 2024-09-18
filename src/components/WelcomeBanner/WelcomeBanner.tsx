'use client';

// import {
//   Navbar,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   Link,
// } from '@nextui-org/react';
// import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { ReactElement } from 'react';
// import { useEffect, useState, type ReactElement } from 'react';

// import { usePathnameIntl } from '@/navigation';
// import LangDropdown from '@/ui/LangDropdown/LangDropdown';
// import ThemTogler from '@/ui/ThemTogler/ThemTogler';

const WelcomeBanner = (): ReactElement => {
  const t = useTranslations('Welcome');
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  // const pathname = usePathnameIntl();

  // const handleScroll = (): void => {
  //   if (window.scrollY > 0) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener('scroll', handleScroll);
  //   return (): void => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // useEffect(() => {
  //   setIsMenuOpen(false);
  // }, [pathname]);

  return (
    <div className="relative w-full h-[710px] flex flex-col justify-center items-center relative z-[1]">
      <h1 className="font-black text-8xl">{t('h1')}</h1>
      <h2 className="text-xl text-center">{t('h2')}</h2>
    </div>
  );
};

export default WelcomeBanner;
