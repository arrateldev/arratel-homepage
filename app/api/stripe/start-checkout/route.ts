import { NextRequest } from 'next/server';
import { createCheckoutSession } from '@/lib/payments/stripe';
import { getTeamForUser } from '@/lib/db/queries';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const priceId = formData.get('priceId');

  if (typeof priceId !== 'string' || !priceId) {
    return Response.json({ error: 'Missing priceId' }, { status: 400 });
  }

  const team = await getTeamForUser();
  return createCheckoutSession({ team, priceId });
}
