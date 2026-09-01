import { notFound, redirect } from 'next/navigation';
import { isLocale, legalRoutes, localizePath } from '@/lib/i18n/config';

export default async function LegacyImpressumRedirect({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  redirect(localizePath(locale, legalRoutes.imprint));
}
