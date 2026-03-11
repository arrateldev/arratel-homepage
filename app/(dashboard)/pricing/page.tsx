import { Check } from 'lucide-react';
import {
  getStripePrices,
  getStripeProducts,
  isMockStripeEnabled
} from '@/lib/payments/stripe';
import { SubmitButton } from './submit-button';
import { defaultLocale, type Locale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';

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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {mockStripeEnabled ? (
        <div className="max-w-xl mx-auto mb-8 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-900">
          {t.mockBillingActive}
        </div>
      ) : null}
      <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
        <PricingCard
          name={basePlan?.name || 'Base'}
          price={basePrice?.unitAmount || 800}
          interval={basePrice?.interval || 'month'}
          trialDays={basePrice?.trialPeriodDays || 7}
          features={t.featuresBase}
          priceId={basePrice?.id}
          locale={locale}
        />
        <PricingCard
          name={plusPlan?.name || 'Plus'}
          price={plusPrice?.unitAmount || 1200}
          interval={plusPrice?.interval || 'month'}
          trialDays={plusPrice?.trialPeriodDays || 7}
          features={t.featuresPlus}
          priceId={plusPrice?.id}
          locale={locale}
        />
      </div>
    </main>
  );
}

function PricingCard({
  name,
  price,
  interval,
  trialDays,
  features,
  priceId,
  locale
}: {
  name: string;
  price: number;
  interval: string;
  trialDays: number;
  features: readonly string[];
  priceId?: string;
  locale: Locale;
}) {
  const t = getMessages(locale).pricing;

  return (
    <div className="pt-6">
      <h2 className="text-2xl font-medium text-gray-900 mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-4">
        {t.withTrial.replace('{days}', String(trialDays))}
      </p>
      <p className="text-4xl font-medium text-gray-900 mb-6">
        ${price / 100}{' '}
        <span className="text-xl font-normal text-gray-600">
          {t.perUser.replace('{interval}', interval)}
        </span>
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <form action="/api/stripe/start-checkout" method="POST">
        <input type="hidden" name="priceId" value={priceId} />
        <input type="hidden" name="locale" value={locale} />
        <SubmitButton locale={locale} />
      </form>
    </div>
  );
}
