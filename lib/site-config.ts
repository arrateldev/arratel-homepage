import type { Locale } from '@/lib/i18n/config';

export const siteConfig = {
  product: {
    name: 'Arratel',
    companyDisplayName: 'Arratel',
    metadata: {
      title: {
        de: 'Arratel',
        en: 'Arratel'
      },
      description: {
        de: 'Arratel entwickelt schlanke SaaS-Produkte für nützliche digitale Workflows.',
        en: 'Arratel builds focused SaaS products for useful digital workflows.'
      }
    }
  },
  company: {
    legalName: 'Arratel',
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
      email: 'contact@arratel.dev',
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
    defaultBaseUrl: 'https://arratel.dev'
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
