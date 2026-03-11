import { Suspense } from 'react';
import { Login } from '@/app/(login)/login';
import { buildLocalizedMetadata } from '@/lib/i18n/metadata';
import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  return buildLocalizedMetadata(locale, '/sign-in');
}

export default async function LocalizedSignInPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <Suspense>
      <Login mode="signin" locale={locale} />
    </Suspense>
  );
}
