'use server';

import { redirect } from 'next/navigation';
import {
  createCheckoutSession,
  createCustomerPortalSession,
  isMockStripeEnabled
} from './stripe';
import { withTeam } from '@/lib/auth/middleware';
import { updateTeamSubscription } from '@/lib/db/queries';

export const checkoutAction = withTeam(async (formData, team) => {
  const priceId = formData.get('priceId') as string;
  await createCheckoutSession({ team: team, priceId });
});

export const customerPortalAction = withTeam(async (_, team) => {
  const portalSession = await createCustomerPortalSession(team);
  redirect(portalSession.url);
});

export const updateMockSubscriptionAction = withTeam(async (formData, team) => {
  if (!isMockStripeEnabled()) {
    redirect('/dashboard');
  }

  const planName = formData.get('planName');
  const productId = formData.get('productId');
  const subscriptionStatus = formData.get('subscriptionStatus');

  const nextPlanName = typeof planName === 'string' ? planName : null;
  const nextProductId = typeof productId === 'string' ? productId : null;
  const nextStatus =
    typeof subscriptionStatus === 'string' ? subscriptionStatus : 'inactive';

  await updateTeamSubscription(team.id, {
    stripeSubscriptionId:
      nextStatus === 'active' || nextStatus === 'trialing'
        ? `mock_sub_${nextProductId ?? 'free'}`
        : null,
    stripeProductId: nextProductId,
    planName: nextPlanName,
    subscriptionStatus: nextStatus
  });

  redirect('/dashboard/billing');
});
