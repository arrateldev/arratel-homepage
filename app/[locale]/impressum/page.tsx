import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '@/components/legal-page';
import { buildLocalizedMetadata } from '@/lib/i18n/metadata';
import { isLocale, localizePath } from '@/lib/i18n/config';
import { getLegalContent } from '@/lib/legal-content';
import { features } from '@/lib/config/feature-flags';
import { redirect } from 'next/navigation';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getLegalContent(locale).impressum;
  return {
    ...buildLocalizedMetadata(locale, '/impressum'),
    title: content.title
  };
}

export default async function ImpressumPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (!features.impressum) {
    redirect(localizePath(locale, '/'));
  }

  const content = getLegalContent(locale).impressum;

  return (
    <LegalPage eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      {content.sections.map((section) => (
        <LegalSection key={section.title} title={section.title}>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </LegalSection>
      ))}
    </LegalPage>
  );
}
