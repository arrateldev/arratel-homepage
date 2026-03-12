import Link from 'next/link';
import {
  ArrowRight,
  FileText,
  GripVertical,
  ScissorsLineDashed,
  WandSparkles
} from 'lucide-react';
import { defaultLocale, localizePath, type Locale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';
import { PricingSection } from '@/components/pricing-section';

export default function HomePage({
  locale = defaultLocale
}: {
  locale?: Locale;
}) {
  const t = getMessages(locale);

  const files = [
    { name: 'Q1-report.pdf', meta: '12 pages · 2.4 MB' },
    { name: 'invoice-batch.pdf', meta: '8 pages · 1.1 MB' },
    { name: 'signed-contract.pdf', meta: '4 pages · 620 KB' }
  ];

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

                  <div className="mt-3 grid grid-cols-[1.1fr_0.9fr] gap-3">
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
                            <div className="h-2.5 w-20 rounded-full bg-primary/25" />
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
          <div className="surface-panel p-6 sm:p-8">
            <div className="rounded-[24px] border border-border/70 bg-background p-4 sm:p-5">
              <div className="flex flex-col gap-4 border-b border-border/70 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-medium text-primary">PDF Merge Tool</p>
                <Link
                  href="#pricing"
                  className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/12"
                >
                  Go Pro
                </Link>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_320px]">
                <div className="space-y-4">
                  <div className="rounded-[22px] border border-dashed border-primary/30 bg-primary/5 p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                          <ScissorsLineDashed className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            Drop PDF files
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Reorder files and export a merged document
                          </p>
                        </div>
                      </div>
                      <div className="rounded-xl bg-background px-3 py-2 text-xs font-medium text-foreground shadow-sm">
                        + Add files
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-border/70 bg-muted/30 p-3">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground">Merge queue</p>
                      <p className="text-xs text-muted-foreground">3 files selected</p>
                    </div>

                    <div className="space-y-3">
                      {files.map((file, index) => (
                        <div
                          key={file.name}
                          className={`flex items-center gap-3 rounded-2xl border px-3 py-3 ${
                            index === 1
                              ? 'border-primary/35 bg-primary/6'
                              : 'border-border/70 bg-background'
                          }`}
                        >
                          <div className="text-muted-foreground">
                            <GripVertical className="h-4 w-4" />
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                            <FileText className="h-4 w-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-foreground">
                              {file.name}
                            </p>
                            <p className="text-xs text-muted-foreground">{file.meta}</p>
                          </div>
                          <div className="rounded-full bg-muted px-2.5 py-1 text-[11px] text-muted-foreground">
                            {index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[22px] border border-border/70 bg-muted/25 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <WandSparkles className="h-4 w-4 text-primary" />
                      Output
                    </div>
                    <div className="mt-4 rounded-2xl border border-border/70 bg-background p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            merged-documents.pdf
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            24 pages · optimized export
                          </p>
                        </div>
                        <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                          Ready
                        </div>
                      </div>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                        <div className="h-full w-[78%] rounded-full bg-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-border/70 bg-muted/25 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground">Usage</p>
                      <span className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-1 text-[11px] font-medium text-primary">
                        Free
                      </span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Files today</span>
                        <span className="font-medium text-foreground">3 / 5</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-background">
                        <div className="h-full w-3/5 rounded-full bg-primary" />
                      </div>
                      <div className="rounded-2xl border border-primary/20 bg-primary/6 px-3 py-3">
                        <p className="text-xs font-medium text-primary">
                          Go Pro for larger batches and faster processing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing">
        <PricingSection
          className="content-visibility-auto bg-transparent py-8 sm:py-10"
          locale={locale}
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
      </section>
    </main>
  );
}
