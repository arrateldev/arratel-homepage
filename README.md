# Next.js SaaS Starter

This is a starter template for building a SaaS application using **Next.js** with support for authentication, Stripe integration for payments, and a dashboard for logged-in users.

**Demo: [https://next-saas-start.vercel.app/](https://next-saas-start.vercel.app/)**

## Features

- Marketing landing page (`/`) with animated Terminal element
- Pricing page (`/pricing`) which connects to Stripe Checkout
- Dashboard pages with CRUD operations on users/teams
- Basic RBAC with Owner and Member roles
- Subscription management with Stripe Customer Portal
- Email/password authentication with JWTs stored to cookies
- Global middleware to protect logged-in routes
- Local middleware to protect Server Actions or validate Zod schemas
- Activity logging system for any user events

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://www.postgresql.org/)
- **ORM**: [Drizzle](https://orm.drizzle.team/)
- **Payments**: [Stripe](https://stripe.com/)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/)

## Recommended Deployment Stack

For a low-cost SaaS setup, this starter is designed to work well with:

- **Frontend / App Hosting**: Vercel
- **Database Hosting**: external Postgres provider such as Neon, Supabase, Railway, or a Postgres database from the Vercel Marketplace
- **Payments**: Stripe

Important:

- Vercel hosts the app, but not your Postgres database
- You must provide a real `POSTGRES_URL` in every environment
- For local development, you can use a local Postgres instance (for example via Docker) or a hosted Postgres database
- For billing flows without a live Stripe setup, use `MOCK_STRIPE=true`

If your goal is to keep fixed costs near zero for new products, a practical default is:

- Vercel Hobby
- Neon Free or another Postgres free tier
- Stripe with mock mode locally and live mode only when needed

## Getting Started

```bash
git clone https://github.com/nextjs/saas-starter
cd saas-starter
pnpm install
```

## Deployment Modes

This template supports two deployment modes configured via the `DEPLOYMENT_MODE` environment variable:

### Full Mode (Default)
Complete SaaS application with authentication, database, and billing.

```bash
DEPLOYMENT_MODE=full  # or omit this variable
```

Includes:
- User authentication & teams management
- Stripe billing integration
- Dashboard with user/team settings
- Database (PostgreSQL)

### Minimal Mode
Landing page only, perfect for testing ideas quickly without external services.

```bash
DEPLOYMENT_MODE=minimal
```

Includes:
- Landing page, pricing page, and legal pages (fully static)
- No authentication required
- No database required
- No Stripe integration needed
- Perfect for quick MVP deployments

To deploy in minimal mode:

```bash
# .env
DEPLOYMENT_MODE=minimal
BASE_URL=https://yourdomain.com
```

Then deploy to Vercel or any static hosting. All auth/dashboard routes will redirect to home.

## Running Locally

**Starting in Minimal Mode (landing page only)?**

```bash
# .env
DEPLOYMENT_MODE=minimal
BASE_URL=http://localhost:3000
```

Then just:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. No database or Stripe setup needed!

**Starting in Full Mode (complete SaaS)?**

This project needs a running Postgres database before `pnpm db:migrate` or
`pnpm db:seed` can work.

Start the included Docker Postgres service (creates the DB container on first run):

```bash
pnpm db:create
```

You have two options:

- use a local Postgres instance, for example with Docker
- use a hosted Postgres database and set `POSTGRES_URL` manually

The included `pnpm db:setup` script can help generate a `.env`, but you can also
create `.env` yourself if you want to skip Stripe setup during local development.

[Install](https://docs.stripe.com/stripe-cli) and log in to your Stripe account:

```bash
stripe login
```

Use the included setup script to create your `.env` file:

```bash
pnpm db:setup
```

Run the database migrations and seed the database with a default user and team:

```bash
pnpm db:migrate
pnpm db:seed
```

This will create the following user and team:

- User: `test@test.com`
- Password: `admin123`

You can also create new users through the `/sign-up` route.

Finally, run the Next.js development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

### Developing without a Stripe account

If you only want to build the pricing and billing UI locally, set this in your
`.env`:

```bash
MOCK_STRIPE=true
```

In mock mode:

- `/pricing` uses local mock products instead of Stripe API data
- checkout redirects back into the app and marks the team as `trialing`
- `Manage Subscription` opens `/dashboard/billing`, where you can switch plans
  and statuses manually

This lets you work on gated pages and billing states without creating a Stripe
account first.

Minimal local `.env` example:

```bash
POSTGRES_URL=postgres://postgres:postgres@localhost:54322/postgres
MOCK_STRIPE=true
BASE_URL=http://localhost:3000
AUTH_SECRET=replace-with-a-random-secret
STRIPE_SECRET_KEY=dummy
STRIPE_WEBHOOK_SECRET=dummy
```

As long as `MOCK_STRIPE=true`, dummy Stripe values are fine for local
development.

You can listen for Stripe webhooks locally through their CLI to handle subscription change events:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Testing Payments

To test Stripe payments, use the following test card details:

- Card Number: `4242 4242 4242 4242`
- Expiration: Any future date
- CVC: Any 3-digit number

## Going to Production

When you're ready to deploy your SaaS application to production, follow these steps:

### Set up a production Stripe webhook

1. Go to the Stripe Dashboard and create a new webhook for your production environment.
2. Set the endpoint URL to your production API route (e.g., `https://yourdomain.com/api/stripe/webhook`).
3. Select the events you want to listen for (e.g., `checkout.session.completed`, `customer.subscription.updated`).

### Deploy to Vercel

1. Push your code to a GitHub repository.
2. Connect your repository to [Vercel](https://vercel.com/) and deploy it.
3. Follow the Vercel deployment process, which will guide you through setting up your project.
4. Connect an external Postgres database and add its connection string as `POSTGRES_URL`.

### Add environment variables

In your Vercel project settings (or during deployment), add all the necessary environment variables. Make sure to update the values for the production environment, including:

1. `BASE_URL`: Set this to your production domain.
2. `STRIPE_SECRET_KEY`: Use your Stripe secret key for the production environment.
3. `STRIPE_WEBHOOK_SECRET`: Use the webhook secret from the production webhook you created in step 1.
4. `POSTGRES_URL`: Set this to your production database URL.
5. `AUTH_SECRET`: Set this to a random string. `openssl rand -base64 32` will generate one.

## Other Templates

While this template is intentionally minimal and to be used as a learning resource, there are other paid versions in the community which are more full-featured:

- https://achromatic.dev
- https://shipfa.st
- https://makerkit.dev
- https://zerotoshipped.com
- https://turbostarter.dev
