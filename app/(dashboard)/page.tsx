import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Compass,
  ExternalLink,
  Layers3,
  Radio,
  ShieldCheck
} from 'lucide-react';
import { defaultLocale, type Locale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';
import { siteConfig } from '@/lib/site-config';

const projectIcons = [Compass, Layers3, ShieldCheck, Radio] as const;
const projectAnchors = [
  'arratel-core',
  'clavispass',
  'clavispass-hub',
  'pdf-merge'
] as const;

export default function HomePage({
  locale = defaultLocale
}: {
  locale?: Locale;
}) {
  const t = getMessages(locale);
  const mailHref = `mailto:${siteConfig.company.contact.email}`;

  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border/60 bg-[radial-gradient(circle_at_top_right,hsl(var(--brand-secondary)/0.22),transparent_34%),radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_30%),hsl(var(--background))]">
        <div className="section-shell grid min-h-[calc(100svh-73px)] items-start gap-10 pb-12 pt-16 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_420px] lg:pb-14 lg:pt-24">
          <div className="animate-enter max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {t.home.heroEyebrow}
            </p>
            <h1 className="brand-gradient-text mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {t.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {t.home.heroDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                {t.home.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href={mailHref}
                className="inline-flex items-center justify-center rounded-md border border-border bg-background/70 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-background"
              >
                {t.home.secondaryCta}
              </Link>
            </div>
          </div>

          <aside className="animate-enter-delay-1">
            <div
              className="relative mx-auto aspect-square w-full max-w-[420px]"
              aria-label={t.home.radarLabel}
            >
              <div className="absolute inset-8 rounded-full border border-primary/20" />
              <div className="absolute inset-16 rounded-full border border-brand-secondary/25" />
              <div className="absolute inset-0 animate-signal-spin rounded-full border border-dashed border-primary/25" />

              <Link
                href="#project-arratel-core"
                aria-label={t.home.radarItems.core.name}
                className="group absolute inset-[34%] flex items-center justify-center rounded-full brand-gradient text-white shadow-[0_0_70px_hsl(var(--brand-secondary)/0.4)] outline-none ring-offset-4 ring-offset-background transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Image
                  src="/arratel-logo-white.svg"
                  alt=""
                  width={88}
                  height={88}
                  className="h-14 w-14 object-contain sm:h-18 sm:w-18"
                  aria-hidden="true"
                />
                <div className="pointer-events-none absolute left-1/2 top-full mt-4 w-[156px] -translate-x-1/2 rounded-md border border-border/70 bg-background/90 p-3 text-left opacity-0 shadow-[0_18px_38px_-28px_rgba(15,23,42,0.32)] backdrop-blur transition-all group-hover:translate-y-1 group-hover:opacity-100 group-focus-visible:translate-y-1 group-focus-visible:opacity-100">
                  <p className="text-sm font-semibold text-foreground">
                    {t.home.radarItems.core.name}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {t.home.radarItems.core.status}
                  </p>
                </div>
              </Link>

              <Link
                href="#project-clavispass"
                aria-label={t.home.radarItems.clavispass.name}
                className="group absolute right-[20%] top-[40%] h-4 w-4 rounded-full bg-brand-secondary shadow-[0_0_24px_hsl(var(--brand-secondary)/0.75)] outline-none ring-offset-4 ring-offset-background transition-transform hover:scale-125 focus-visible:ring-2 focus-visible:ring-brand-secondary"
              >
                <div className="pointer-events-none absolute right-6 top-1/2 w-[166px] -translate-y-1/2 rounded-md border border-primary/25 bg-background/90 p-3 opacity-0 shadow-[0_18px_38px_-28px_rgba(15,23,42,0.32)] backdrop-blur transition-all group-hover:-translate-x-1 group-hover:opacity-100 group-focus-visible:-translate-x-1 group-focus-visible:opacity-100">
                  <p className="text-sm font-semibold text-foreground">
                    {t.home.radarItems.clavispass.name}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {t.home.radarItems.clavispass.status}
                  </p>
                </div>
              </Link>

              <Link
                href="#project-pdf-merge"
                aria-label={t.home.radarItems.pdfMerge.name}
                className="group absolute bottom-[22%] left-[24%] h-4 w-4 rounded-full bg-foreground/70 shadow-[0_0_20px_rgba(15,23,42,0.32)] outline-none ring-offset-4 ring-offset-background transition-transform hover:scale-125 focus-visible:ring-2 focus-visible:ring-foreground"
              >
                <div className="pointer-events-none absolute left-6 top-1/2 w-[158px] -translate-y-1/2 rounded-md border border-border/70 bg-background/90 p-3 opacity-0 shadow-[0_18px_38px_-28px_rgba(15,23,42,0.32)] backdrop-blur transition-all group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100">
                  <p className="text-sm font-semibold text-foreground">
                    {t.home.radarItems.pdfMerge.name}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {t.home.radarItems.pdfMerge.status}
                  </p>
                </div>
              </Link>

              <Link
                href="#project-clavispass-hub"
                aria-label={t.home.radarItems.clavispassHub.name}
                className="group absolute bottom-[18%] right-[24%] h-4 w-4 rounded-full bg-primary/75 shadow-[0_0_22px_hsl(var(--primary)/0.48)] outline-none ring-offset-4 ring-offset-background transition-transform hover:scale-125 focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="pointer-events-none absolute right-6 top-1/2 w-[176px] -translate-y-1/2 rounded-md border border-border/70 bg-background/90 p-3 opacity-0 shadow-[0_18px_38px_-28px_rgba(15,23,42,0.32)] backdrop-blur transition-all group-hover:-translate-x-1 group-hover:opacity-100 group-focus-visible:-translate-x-1 group-focus-visible:opacity-100">
                  <p className="text-sm font-semibold text-foreground">
                    {t.home.radarItems.clavispassHub.name}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {t.home.radarItems.clavispassHub.status}
                  </p>
                </div>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="projects"
        className="section-shell scroll-mt-18 py-14 sm:py-18"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {t.home.projectsEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.home.projectsTitle}
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {t.home.projectsDescription}
          </p>
        </div>

        <div className="relative mt-10">
          <div className="absolute bottom-8 left-4 top-8 w-px bg-gradient-to-b from-primary via-brand-secondary to-transparent md:left-1/2" />
          <div className="space-y-7">
            {t.home.projects.map((project, index) => {
              const ProjectIcon = projectIcons[index % projectIcons.length];
              const isEven = index % 2 === 0;
              const isArratelCore = projectAnchors[index] === 'arratel-core';
              const isClavisPass =
                projectAnchors[index] === 'clavispass' ||
                projectAnchors[index] === 'clavispass-hub';
              const cardContent = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/12 text-primary">
                        {isArratelCore ? (
                          <Image
                            src="/arratel-logo.svg"
                            alt=""
                            width={28}
                            height={28}
                            className="h-7 w-7 object-contain"
                            aria-hidden="true"
                          />
                        ) : isClavisPass ? (
                          <Image
                            src="/clavispass-logo.svg"
                            alt=""
                            width={28}
                            height={28}
                            className="h-7 w-7 object-contain"
                            aria-hidden="true"
                          />
                        ) : (
                          <ProjectIcon className="h-5 w-5" />
                        )}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {project.type}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-md border border-primary/20 bg-primary/8 px-2.5 py-1 text-xs font-semibold text-primary">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                  {'href' in project ? (
                    <div className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
                      {t.home.projectLinkLabel}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </div>
                  ) : null}
                </>
              );

              return (
                <article
                  key={project.name}
                  id={`project-${projectAnchors[index]}`}
                  className={`relative grid scroll-mt-18 gap-4 pl-10 md:grid-cols-2 md:gap-10 md:pl-0 ${
                    isEven ? '' : 'md:[&>*:first-child]:col-start-2'
                  }`}
                >
                  {'href' in project ? (
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`surface-card animate-enter block p-5 transition-transform hover:-translate-y-0.5 hover:border-primary/30 sm:p-6 ${
                        isEven ? 'md:mr-8' : 'md:ml-8'
                      }`}
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <div
                      className={`surface-card animate-enter p-5 sm:p-6 ${
                        isEven ? 'md:mr-8' : 'md:ml-8'
                      }`}
                    >
                      {cardContent}
                    </div>
                  )}

                  <div className="pointer-events-none absolute left-4 top-8 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary shadow-[0_0_0_6px_hsl(var(--primary)/0.12)] md:left-1/2" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-white">
        <div className="section-shell grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {t.home.principlesEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
              {t.home.principlesTitle}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {t.home.principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-md border border-border/70 bg-background p-5"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-18">
        <div className="grid gap-6 rounded-md border border-border/70 bg-foreground p-6 text-background sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
              {t.home.contactEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              {t.home.contactTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-background/70">
              {t.home.contactDescription}
            </p>
          </div>
          <Link
            href={mailHref}
            className="inline-flex items-center justify-center rounded-md bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
          >
            {siteConfig.company.contact.email}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
