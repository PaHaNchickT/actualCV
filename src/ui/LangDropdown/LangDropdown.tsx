'use client';

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import type { Key, ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { locales, type Locale } from '@/i18n';
import { usePathnameIntl, useRouterIntl } from '@/navigation';
import { toggleLoading } from '@/redux/appStateSlice';

const LangDropdown = (): ReactElement => {
  const dispatch = useDispatch();

  const router = useRouterIntl();
  const pathname = usePathnameIntl();
  const locale = useLocale();
  const search = useSearchParams();

  const changeLocale = (locale: Key): void => {
    router.replace(`${pathname}?${search}`, { locale: locale as Locale });
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light">{locale.toUpperCase()}</Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={new Set([locale])}
        onAction={changeLocale}
      >
        {locales.map((locale) => (
          <DropdownItem key={locale} onPress={() => dispatch(toggleLoading(true))}>
            {locale.toUpperCase()}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LangDropdown;
