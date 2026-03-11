import DashboardLayout from '@/app/(dashboard)/dashboard/layout';
import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

export default async function LocalizedDashboardLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <DashboardLayout locale={locale}>{children}</DashboardLayout>;
}
