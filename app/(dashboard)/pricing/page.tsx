import {
  getStripePrices,
  getStripeProducts,
  isMockStripeEnabled
} from '@/lib/payments/stripe';
import { defaultLocale, type Locale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';
import { PricingSection } from '@/components/pricing-section';

// Prices are fresh for one hour max
export const revalidate = 3600;

export default async function PricingPage({
  locale = defaultLocale
}: {
  locale?: Locale;
}) {
  const mockStripeEnabled = isMockStripeEnabled();
  const t = getMessages(locale).pricing;
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  const basePlan = products.find((product) => product.name === 'Base');
  const plusPlan = products.find((product) => product.name === 'Plus');

  const basePrice = prices.find((price) => price.productId === basePlan?.id);
  const plusPrice = prices.find((price) => price.productId === plusPlan?.id);

  return (
    <main>
      {mockStripeEnabled ? (
        <div className="bg-primary/5 border-primary/20 text-foreground mx-auto mt-12 max-w-xl rounded-2xl border px-4 py-3 text-sm">
          {t.mockBillingActive}
        </div>
      ) : null}
      <PricingSection
        locale={locale}
        className="bg-muted/40 py-20"
        cards={[
          {
            label: basePlan?.name || 'Base',
            title: t.featuresBase[0] ? getMessages(locale).home.freeTitle : 'Base',
            tag: getMessages(locale).home.freeTag,
            price: `$${
              (basePrice?.unitAmount || 800) / 100
            }`,
            monthLabel: getMessages(locale).home.month,
            description: t.withTrial.replace(
              '{days}',
              String(basePrice?.trialPeriodDays || 7)
            ),
            features: t.featuresBase,
            cta: {
              type: 'checkout',
              priceId: basePrice?.id
            }
          },
          {
            label: plusPlan?.name || 'Plus',
            title: getMessages(locale).home.proTitle,
            tag: getMessages(locale).home.proTag,
            price: `$${
              (plusPrice?.unitAmount || 1200) / 100
            }`,
            monthLabel: getMessages(locale).home.month,
            description: t.withTrial.replace(
              '{days}',
              String(plusPrice?.trialPeriodDays || 7)
            ),
            features: t.featuresPlus,
            emphasized: true,
            cta: {
              type: 'checkout',
              priceId: plusPrice?.id
            }
          }
        ]}
      />
    </main>
  );
}
