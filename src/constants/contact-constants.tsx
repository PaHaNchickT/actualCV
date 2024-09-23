import type { ReactElement } from 'react';

import { EmailIcon } from '@/ui/Icons/EmailIcon';
import { LetterIcon } from '@/ui/Icons/LetterIcon';
import { PhoneIcon } from '@/ui/Icons/PhoneIcon';

export const CONTACT_ICONS: {
  href: string;
  text?: 'alt.vk' | 'alt.tg';
  altText?: string;
  icon: ReactElement;
  isTranslated: boolean;
}[] = [
  { href: 'https://vk.com/ternopavel', text: 'alt.vk', icon: <LetterIcon />, isTranslated: true },
  { href: 'https://t.me/pahanchickt', text: 'alt.tg', icon: <PhoneIcon />, isTranslated: true },
  { href: 'mailto: pt1999@mail.ru', altText: 'pt1999@mail.ru', icon: <EmailIcon />, isTranslated: false },
];
