import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { SWRConfig } from 'swr';
import { headers } from 'next/headers';
import { defaultLocale, isLocale } from '@/lib/i18n/config';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: siteConfig.product.metadata.title.en,
  description: siteConfig.product.metadata.description.en
};

export const viewport: Viewport = {
  maximumScale: 1
};

const manrope = Manrope({ subsets: ['latin'] });

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get('x-locale');
  const locale =
    requestedLocale && isLocale(requestedLocale)
      ? requestedLocale
      : defaultLocale;

  return (
    <html
      lang={locale}
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        <SWRConfig
          //value={{
            //fallback: {
              // We do NOT await here
              // Only components that read this data will suspend
              //'/api/user': getUser(),
              //'/api/team': getTeamForUser()
            //}
          //}}
        >
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
