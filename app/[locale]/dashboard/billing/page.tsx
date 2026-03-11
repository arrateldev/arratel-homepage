import BillingMockPage from '@/app/(dashboard)/dashboard/billing/page';
import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';

export default async function LocalizedBillingMockPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <BillingMockPage locale={locale} />;
}
