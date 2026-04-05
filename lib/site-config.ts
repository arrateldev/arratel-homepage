import type { Locale } from '@/lib/i18n/config';

export const siteConfig = {
  product: {
    name: 'ACME',
    companyDisplayName: 'Test Produkt',
    metadata: {
      title: {
        de: 'SaaS Starter',
        en: 'SaaS Starter'
      },
      description: {
        de: 'Mehrsprachiger SaaS Starter mit Next.js, Postgres und Stripe.',
        en: 'Multilingual SaaS starter built with Next.js, Postgres, and Stripe.'
      }
    }
  },
  company: {
    legalName: 'ACME GmbH',
    representative: {
      de: 'Ricardo Valente de Matos, Geschäftsführer',
      en: 'Ricardo Valente de Matos, Managing Director'
    },
    address: {
      street: 'Musterstraße 1',
      postalCode: '10115',
      city: 'Berlin',
      country: {
        de: 'Deutschland',
        en: 'Germany'
      }
    },
    contact: {
      email: 'hello@example.com',
      phone: '+49 30 123456789'
    },
    register: {
      court: {
        de: 'Amtsgericht Berlin-Charlottenburg',
        en: 'Berlin-Charlottenburg Local Court'
      },
      number: 'HRB 123456'
    },
    vatId: 'DE123456789'
  },
  urls: {
    defaultBaseUrl: 'http://localhost:3000'
  },
  billing: {
    portalHeadline: 'Manage your subscription'
  }
} as const;

export function getSiteMetadata(locale: Locale) {
  return {
    title: siteConfig.product.metadata.title[locale],
    description: siteConfig.product.metadata.description[locale]
  };
}

export function getBaseUrl() {
  return process.env.BASE_URL || siteConfig.urls.defaultBaseUrl;
}
