import type { ReactElement } from 'react';

type RootLayoutProps = {
  children: ReactElement;
};

export default function RootLayout({ children }: RootLayoutProps): ReactElement {
  return (
    <html suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}
