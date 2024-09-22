import createMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  matcher: [
    {
      source: '/((?!_next|images|video|pdf|icon.ico).*)',
      missing: [{ type: 'header', key: 'next-action' }],
    },
  ],
};
