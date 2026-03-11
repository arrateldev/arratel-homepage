import type { Metadata } from 'next';
import { defaultLocale, locales, localizePath, type Locale } from './config';
import { getMessages } from './messages';

const metadataBase = process.env.BASE_URL || 'http://localhost:3000';

export function buildLocalizedMetadata(
  locale: Locale = defaultLocale,
  pathname = '/'
): Metadata {
  const t = getMessages(locale);
  const canonicalPath = localizePath(locale, pathname);

  return {
    metadataBase: new URL(metadataBase),
    title: t.metadata.title,
    description: t.metadata.description,
    alternates: {
      canonical: canonicalPath,
      languages: Object.fromEntries(
        locales.map((entry) => [entry, localizePath(entry, pathname)])
      )
    }
  };
}
