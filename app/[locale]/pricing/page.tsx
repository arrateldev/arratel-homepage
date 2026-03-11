import PricingPage from '@/app/(dashboard)/pricing/page';
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

  return buildLocalizedMetadata(locale, '/pricing');
}

export default async function LocalizedPricingPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PricingPage locale={locale} />;
}
