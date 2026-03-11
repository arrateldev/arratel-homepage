import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTeamForUser } from '@/lib/db/queries';
import { isMockStripeEnabled } from '@/lib/payments/stripe';
import { updateMockSubscriptionAction } from '@/lib/payments/actions';
import { defaultLocale, localizePath, type Locale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';

const mockStates = [
  {
    title: 'Base Trial',
    description: 'Setzt das Team auf Base mit Trial-Status.',
    planName: 'Base',
    productId: 'mock_prod_base',
    subscriptionStatus: 'trialing'
  },
  {
    title: 'Base Active',
    description: 'Simuliert ein aktives Base-Abo.',
    planName: 'Base',
    productId: 'mock_prod_base',
    subscriptionStatus: 'active'
  },
  {
    title: 'Plus Active',
    description: 'Simuliert ein aktives Plus-Abo.',
    planName: 'Plus',
    productId: 'mock_prod_plus',
    subscriptionStatus: 'active'
  },
  {
    title: 'Unpaid',
    description: 'Laesst das Abo als offen oder fehlgeschlagen erscheinen.',
    planName: 'Plus',
    productId: 'mock_prod_plus',
    subscriptionStatus: 'unpaid'
  },
  {
    title: 'Canceled',
    description: 'Simuliert ein gekuendigtes Abo.',
    planName: null,
    productId: null,
    subscriptionStatus: 'canceled'
  },
  {
    title: 'Free',
    description: 'Entfernt alle Subscription-Daten.',
    planName: null,
    productId: null,
    subscriptionStatus: 'inactive'
  }
] as const;

export default async function BillingMockPage({
  locale = defaultLocale
}: {
  locale?: Locale;
}) {
  const t = getMessages(locale).dashboard;

  if (!isMockStripeEnabled()) {
    redirect(localizePath(locale, '/dashboard'));
  }

  const team = await getTeamForUser();

  if (!team) {
    redirect(localizePath(locale, '/sign-in'));
  }

  return (
    <section className="flex-1 p-4 lg:p-8 space-y-6">
      <div>
        <h1 className="text-lg lg:text-2xl font-medium">{t.billingMockControl}</h1>
        <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
          {t.billingMockDescription}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t.currentTeamState}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>
            <span className="font-medium">{t.plan}:</span> {team.planName || 'Free'}
          </p>
          <p>
            <span className="font-medium">{t.status}:</span>{' '}
            {team.subscriptionStatus || 'inactive'}
          </p>
          <p>
            <span className="font-medium">{t.productId}:</span>{' '}
            {team.stripeProductId || '-'}
          </p>
          <p>
            <span className="font-medium">{t.subscriptionId}:</span>{' '}
            {team.stripeSubscriptionId || '-'}
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mockStates.map((state) => (
          <Card key={state.title}>
            <CardHeader>
              <CardTitle className="text-base">{state.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {state.description}
              </p>
              <form action={updateMockSubscriptionAction}>
                <input type="hidden" name="locale" value={locale} />
                <input
                  type="hidden"
                  name="planName"
                  value={state.planName || ''}
                />
                <input
                  type="hidden"
                  name="productId"
                  value={state.productId || ''}
                />
                <input
                  type="hidden"
                  name="subscriptionStatus"
                  value={state.subscriptionStatus}
                />
                <Button type="submit" className="w-full">
                  {t.applyState}
                </Button>
              </form>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
