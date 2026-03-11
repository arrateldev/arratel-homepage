"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Database } from "lucide-react";
import { Terminal } from "./terminal";
import { defaultLocale, localizePath, type Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export default function HomePage({
  locale = defaultLocale,
}: {
  locale?: Locale;
}) {
  const t = getMessages(locale);

  return (
    <main className="bg-background text-foreground">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="items-center lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {t.home.heroTitle}
                <span className="block text-primary">{t.home.heroAccent}</span>
              </h1>

              <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                {t.home.heroDescription}
              </p>

              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <a
                  href="https://vercel.com/templates/next.js/next-js-saas-starter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full text-lg"
                  >
                    {t.home.deployCta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:max-w-none">
              <div className="relative overflow-hidden rounded-[28px] border border-border/70 bg-gradient-to-br from-card via-card to-muted/40 p-3 shadow-2xl shadow-black/5">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_70%)]" />
                <div className="relative rounded-[22px] border border-border/60 bg-background/80 p-2 backdrop-blur">
                  <Terminal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <FeatureCard
              title={t.home.featureTitle1}
              body={t.home.featureBody1}
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    fill="currentColor"
                    d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                  />
                </svg>
              }
            />
            <FeatureCard
              title={t.home.featureTitle2}
              body={t.home.featureBody2}
              icon={<Database className="h-6 w-6" />}
              className="mt-10 lg:mt-0"
            />
            <FeatureCard
              title={t.home.featureTitle3}
              body={t.home.featureBody3}
              icon={<CreditCard className="h-6 w-6" />}
              className="mt-10 lg:mt-0"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/70 bg-background px-3 py-1 text-sm font-medium text-muted-foreground">
              {t.home.pricingBadge}
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.home.pricingTitle}
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              {t.home.pricingDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <PlanCard
              label={t.home.freeLabel}
              title={t.home.freeTitle}
              tag={t.home.freeTag}
              price="EUR 0"
              month={t.home.month}
              description={t.home.freeDescription}
              features={t.home.freeFeatures}
              cta={t.home.freeCta}
              variant="outline"
            />

            <div className="group relative overflow-hidden rounded-[28px] border border-primary/20 bg-card p-8 shadow-sm ring-1 ring-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/10 to-transparent" />
              <div className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                {t.home.proTag}
              </div>

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {t.home.proLabel}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-foreground">
                      {t.home.proTitle}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-5xl font-bold tracking-tight text-foreground">
                    EUR 9
                  </span>
                  <span className="pb-1 text-sm text-muted-foreground">
                    {t.home.month}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {t.home.proDescription}
                </p>

                <FeatureList items={t.home.proFeatures} />

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="flex-1 rounded-full text-base transition-transform duration-300 group-hover:scale-[1.01]"
                  >
                    {t.home.proCta}
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full text-base"
                  >
                    <Link href={localizePath(locale, "/pricing")}>
                      {t.home.fullPricingCta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function FeatureCard({
  title,
  body,
  icon,
  className = "",
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>

        <div className="mt-5">
          <h2 className="text-lg font-medium text-foreground">{title}</h2>
          <p className="mt-2 text-base text-muted-foreground">{body}</p>
        </div>
      </div>
    </div>
  );
}

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-8 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm text-foreground">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PlanCard({
  label,
  title,
  tag,
  price,
  month,
  description,
  features,
  cta,
  variant,
}: {
  label: string;
  title: string;
  tag: string;
  price: string;
  month: string;
  description: string;
  features: readonly string[];
  cta: string;
  variant: "outline" | "default";
}) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-border/70 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <h3 className="mt-2 text-2xl font-semibold text-foreground">{title}</h3>
        </div>

        <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {tag}
        </div>
      </div>

      <div className="mt-6 flex items-end gap-2">
        <span className="text-5xl font-bold tracking-tight text-foreground">
          {price}
        </span>
        <span className="pb-1 text-sm text-muted-foreground">{month}</span>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>

      <FeatureList items={features} />

      <div className="mt-8">
        <Button
          variant={variant}
          size="lg"
          className="w-full rounded-full text-base transition-transform duration-300 group-hover:scale-[1.01]"
        >
          {cta}
        </Button>
      </div>
    </div>
  );
}
