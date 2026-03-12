import Link from 'next/link';
import { ArrowRight, Check, CreditCard, Database, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { defaultLocale, localizePath, type Locale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';
import { PricingSection } from '@/components/pricing-section';

export default function HomePage({
  locale = defaultLocale
}: {
  locale?: Locale;
}) {
  const t = getMessages(locale);

  return (
    <main className="bg-background text-foreground">
      <section className="page-aura-surface overflow-hidden border-b border-border/60">
        <div className="section-shell py-6 sm:py-8">
          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="animate-in-soft max-w-3xl">
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
                {t.home.heroTitle}
                <span className="mt-2 block text-primary">{t.home.heroAccent}</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {t.home.heroDescription}
              </p>
            </div>

            <aside className="animate-in-soft animate-delay-1 mx-auto w-[380px] max-w-full lg:self-center lg:justify-self-center">
              <div className="surface-card w-full overflow-hidden p-4">
                <div className="rounded-[20px] border border-border/70 bg-background p-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="h-2.5 w-20 rounded-full bg-muted-foreground/18" />
                    <div className="h-5 w-12 rounded-full bg-emerald-100" />
                  </div>

                  <div className="mt-3 grid gap-3 grid-cols-[1.1fr_0.9fr]">
                    <div className="relative h-[106px]">
                      <div className="animate-mock-file-top absolute inset-x-0 top-0 z-10 rounded-xl border border-border/70 bg-muted/40 px-3 py-2 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.35)]">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-lg bg-background/80" />
                          <div className="min-w-0 flex-1 space-y-1.5">
                            <div className="h-2.5 w-16 rounded-full bg-foreground/12" />
                            <div className="h-2 w-24 rounded-full bg-foreground/8" />
                          </div>
                        </div>
                      </div>
                      <div className="animate-mock-file-bottom absolute inset-x-0 top-[42px] rounded-xl border border-border/70 bg-muted/40 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-lg bg-background/80" />
                          <div className="min-w-0 flex-1 space-y-1.5">
                            <div className="h-2.5 w-14 rounded-full bg-foreground/12" />
                            <div className="h-2 w-20 rounded-full bg-foreground/8" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-x-0 top-[84px] rounded-xl border border-dashed border-primary/35 bg-primary/5 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-lg bg-primary/12" />
                          <div className="min-w-0 flex-1 space-y-1.5">
                            <div className="h-2.5 w-18 rounded-full bg-primary/25" />
                            <div className="h-2 w-24 rounded-full bg-primary/15" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-border/70 bg-muted/30 p-3">
                      <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                        <div className="h-2 w-10 rounded-full bg-muted-foreground/18" />
                        <div className="h-2 w-8 rounded-full bg-muted-foreground/14" />
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="h-2 rounded-full bg-background">
                          <div className="animate-mock-progress h-full w-2/3 rounded-full bg-primary" />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded-lg bg-background px-2 py-2">
                            <div className="h-2 w-8 rounded-full bg-foreground/12" />
                          </div>
                          <div className="rounded-lg bg-background px-2 py-2">
                            <div className="h-2 w-9 rounded-full bg-foreground/12" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="product" className="content-visibility-auto py-8 sm:py-10">
        <div className="section-shell">
          <div className="surface-panel grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[24px] border border-dashed border-border bg-muted/40 p-6 sm:p-8">
              <div className="flex h-full min-h-72 flex-col justify-between">
                <div>
                  <p className="text-sm font-medium text-primary">
                    {t.home.productPreviewTitle}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {t.home.productPreviewBody}
                  </p>
                </div>

                <div className="mt-8 rounded-[20px] border border-border/70 bg-background p-5">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {t.home.productPreviewList.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border/70 bg-muted/35 px-4 py-4 text-sm text-foreground"
                      >
                        <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-4 w-4" />
                        </span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-[24px] border border-border/70 bg-background p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Free first
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  {t.home.freeTitle}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {t.home.freeDescription}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Button asChild size="lg" className="justify-between">
                  <Link href={localizePath(locale, '/sign-up')}>
                    {t.home.freeCta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={localizePath(locale, '/pricing')}>
                    {t.home.productSecondaryCta}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingSection
        locale={locale}
        className="content-visibility-auto bg-transparent py-8 sm:py-10"
        cards={[
          {
            label: t.home.freeLabel,
            title: t.home.freeTitle,
            tag: t.home.freeTag,
            price: t.home.freePrice,
            monthLabel: t.home.month,
            description: t.home.freeDescription,
            features: t.home.freeFeatures,
            cta: {
              type: 'current',
              label: t.pricing.currentPlan
            }
          },
          {
            label: t.home.proLabel,
            title: t.home.proTitle,
            tag: t.home.proTag,
            price: t.home.proPrice,
            monthLabel: t.home.month,
            description: t.home.proDescription,
            features: t.home.proFeatures,
            emphasized: true,
            cta: {
              type: 'split',
              primaryLabel: t.home.proCta,
              secondaryLabel: t.home.fullPricingCta,
              secondaryHref: localizePath(locale, '/pricing')
            }
          }
        ]}
      />

      <section className="content-visibility-auto pb-12 pt-2 sm:pb-16">
        <div className="section-shell">
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            <FeatureCard
              title={t.home.featureTitle1}
              body={t.home.featureBody1}
              icon={<Sparkles className="h-5 w-5" />}
            />
            <FeatureCard
              title={t.home.featureTitle2}
              body={t.home.featureBody2}
              icon={<Database className="h-5 w-5" />}
            />
            <FeatureCard
              title={t.home.featureTitle3}
              body={t.home.featureBody3}
              icon={<CreditCard className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  title,
  body,
  icon
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <article>
      <div className="surface-card h-full p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>
        <h2 className="mt-4 text-base font-semibold text-foreground">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
      </div>
    </article>
  );
}
