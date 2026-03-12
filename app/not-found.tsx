import Link from 'next/link';
import { CircleIcon } from 'lucide-react';
import { headers } from 'next/headers';
import { defaultLocale, isLocale, localizePath } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';
import { Button } from '@/components/ui/button';

export default async function NotFound() {
  const localeHeader = (await headers()).get('x-locale');
  const locale =
    localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;
  const t = getMessages(locale);

  return (
    <div className="flex items-center justify-center min-h-[100dvh]">
      <div className="max-w-md space-y-8 p-4 text-center">
        <div className="flex justify-center">
          <CircleIcon className="text-primary size-12" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          {t.notFound.title}
        </h1>
        <p className="text-base text-gray-500">
          {t.notFound.description}
        </p>
        <Button asChild variant="outline" className="mx-auto flex max-w-48">
          <Link href={localizePath(locale, '/')}>{t.common.backToHome}</Link>
        </Button>
      </div>
    </div>
  );
}
