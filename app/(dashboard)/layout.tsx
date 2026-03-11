'use client';

import Link from 'next/link';
import { useState, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import { CircleIcon, Home } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  defaultLocale,
  localizePath,
  replaceLocaleInPathname,
  type Locale
} from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';

function UserMenu({ locale }: { locale: Locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = getMessages(locale);

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger>
        <div className="size-9 rounded-full border border-gray-200 bg-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col gap-1">
        <DropdownMenuItem className="cursor-pointer">
          <Link
            href={localizePath(locale, '/dashboard')}
            className="flex w-full items-center"
          >
            <Home className="mr-2 h-4 w-4" />
            <span>{t.common.dashboard}</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const alternateLocale = locale === 'de' ? 'en' : 'de';

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href={localizePath(locale, '/')} className="flex items-center">
          <CircleIcon className="h-6 w-6 text-orange-500" />
          <span className="ml-2 text-xl font-semibold text-gray-900">ACME</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href={replaceLocaleInPathname(pathname, alternateLocale)}
            className="rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-700"
          >
            {alternateLocale.toUpperCase()}
          </Link>
          <Suspense fallback={<div className="h-9" />}>
            <UserMenu locale={locale} />
          </Suspense>
        </div>
      </div>
    </header>
  );
}

export default function Layout({
  children,
  locale = defaultLocale
}: {
  children: React.ReactNode;
  locale?: Locale;
}) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header locale={locale} />
      {children}
    </section>
  );
}
