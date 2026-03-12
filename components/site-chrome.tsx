'use client';

import Link from 'next/link';
import { Suspense, useState, type ReactNode } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { CircleIcon, Home, LogOut, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { signOut } from '@/app/(login)/actions';
import {
  localizePath,
  replaceLocaleInPathname,
  type Locale
} from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';

export function SiteChrome({
  children,
  locale,
  user
}: {
  children: ReactNode;
  locale: Locale;
  user: {
    name: string | null;
    email: string;
  } | null;
}) {
  const t = getMessages(locale);

  return (
    <section className="flex min-h-screen flex-col">
      <Header locale={locale} user={user} />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <div className="flex items-center">
              <CircleIcon className="text-primary h-5 w-5" />
              <span className="ml-2 text-base font-semibold text-white">
                ACME
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-neutral-400">
              {t.home.footerDescription}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {t.header.navigation}
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-400">
              <Link
                href={localizePath(locale, '/')}
                className="transition-colors hover:text-white"
              >
                {t.common.home}
              </Link>
              <Link
                href={localizePath(locale, '/pricing')}
                className="transition-colors hover:text-white"
              >
                {t.common.pricing}
              </Link>
              <Link
                href={localizePath(locale, '/dashboard')}
                className="transition-colors hover:text-white"
              >
                {t.common.dashboard}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {t.common.legal}
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-400">
              <Link
                href={localizePath(locale, '/impressum')}
                className="transition-colors hover:text-white"
              >
                {t.home.legalLinks.imprint}
              </Link>
              <Link
                href={localizePath(locale, '/datenschutz')}
                className="transition-colors hover:text-white"
              >
                {t.home.legalLinks.privacy}
              </Link>
              <Link
                href={localizePath(locale, '/terms')}
                className="transition-colors hover:text-white"
              >
                {t.home.legalLinks.terms}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm text-neutral-500 sm:px-6 md:flex-row md:justify-between lg:px-8">
            <span>
              (c) {new Date().getFullYear()} {t.common.company}.{' '}
              {t.common.allRightsReserved}
            </span>
            <span>{t.common.builtWith}</span>
          </div>
        </div>
      </footer>
    </section>
  );
}

function Header({
  locale,
  user
}: {
  locale: Locale;
  user: {
    name: string | null;
    email: string;
  } | null;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = getMessages(locale);
  const alternateLocale = locale === 'de' ? 'en' : 'de';
  const query = searchParams.toString();
  const alternateHref = `${replaceLocaleInPathname(
    pathname,
    alternateLocale
  )}${query ? `?${query}` : ''}`;

  const navItems = [
    { href: localizePath(locale, '/'), label: t.common.home },
    { href: localizePath(locale, '/pricing'), label: t.common.pricing },
    ...(user
      ? [{ href: localizePath(locale, '/dashboard'), label: t.common.dashboard }]
      : [])
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href={localizePath(locale, '/')}
          className="flex items-center text-gray-900"
        >
          <CircleIcon className="text-primary h-6 w-6" />
          <span className="ml-2 text-xl font-semibold">ACME</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? 'text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline" size="sm">
            <Link
              href={alternateHref}
              aria-label={`Switch language to ${alternateLocale.toUpperCase()}`}
            >
              {alternateLocale.toUpperCase()}
            </Link>
          </Button>
          {user ? (
            <Suspense
              fallback={<div className="h-9 w-9 rounded-full border border-gray-200" />}
            >
              <UserMenu locale={locale} user={user} />
            </Suspense>
          ) : (
            <Button asChild variant="ghost" size="sm">
              <Link href={localizePath(locale, '/sign-in')}>{t.header.signIn}</Link>
            </Button>
          )}
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? t.header.closeMenu : t.header.openMenu}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={alternateHref} onClick={() => setMobileOpen(false)}>
                  {alternateLocale.toUpperCase()}
                </Link>
              </Button>
              {user ? (
                <form action={signOut}>
                  <input type="hidden" name="locale" value={locale} />
                  <Button
                    type="submit"
                    variant="outline"
                    size="sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    <LogOut className="h-4 w-4" />
                    {t.header.signOut}
                  </Button>
                </form>
              ) : (
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={localizePath(locale, '/sign-in')}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t.header.signIn}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function UserMenu({
  locale,
  user
}: {
  locale: Locale;
  user: {
    name: string | null;
    email: string;
  };
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = getMessages(locale);
  const label = user.name || user.email;

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="max-w-44 justify-between">
          <span className="truncate">{label}</span>
          <Home className="h-4 w-4 text-gray-600" />
        </Button>
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
        <DropdownMenuItem className="p-0">
          <form action={signOut}>
            <input type="hidden" name="locale" value={locale} />
            <Button
              type="submit"
              variant="ghost"
              size="sm"
              className="h-auto w-full justify-start px-2 py-1.5"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>{t.header.signOut}</span>
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
