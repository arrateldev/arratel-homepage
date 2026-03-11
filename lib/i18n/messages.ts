import { defaultLocale, type Locale } from './config';

const messages = {
  de: {
    metadata: {
      title: 'SaaS Starter',
      description:
        'Mehrsprachiger SaaS Starter mit Next.js, Postgres und Stripe.'
    },
    common: {
      home: 'Start',
      pricing: 'Preise',
      dashboard: 'Dashboard',
      features: 'Features',
      legal: 'Rechtliches',
      builtWith: 'Built with Next.js',
      company: 'Dein Produkt',
      allRightsReserved: 'Alle Rechte vorbehalten.',
      backToHome: 'Zur Startseite'
    },
    home: {
      heroTitle: 'Baue dein SaaS',
      heroAccent: 'schneller als je zuvor',
      heroDescription:
        'Starte dein SaaS in Rekordzeit mit einer produktionsnahen Vorlage inklusive moderner Technologien und zentraler Integrationen.',
      deployCta: 'Eigenes Projekt deployen',
      featureTitle1: 'Next.js und React',
      featureBody1:
        'Moderne Webtechnologien fuer starke Performance und eine schnelle Developer Experience.',
      featureTitle2: 'Postgres und Drizzle ORM',
      featureBody2:
        'Robuste Datenhaltung mit schlankem ORM fuer klare Datenmodelle und saubere Skalierung.',
      featureTitle3: 'Stripe Integration',
      featureBody3:
        'Zahlungen und Subscriptions ohne Sonderwege, direkt mit Stripe eingebunden.',
      pricingBadge: 'Einfache Preise',
      pricingTitle: 'Kostenlos starten. Erst upgraden, wenn es Sinn ergibt.',
      pricingDescription:
        'Keine ueberladenen Pakete. Ein sauberer Free-Plan und ein Pro-Upgrade fuer regelmaessige Nutzung.',
      freeLabel: 'Free',
      freeTitle: 'Direkt loslegen',
      freeTag: 'Kein Risiko',
      month: '/ Monat',
      freeDescription:
        'Ideal zum Testen, fuer kleine Workloads und fuer den ersten produktiven Eindruck ohne Zahlung.',
      freeFeatures: [
        'Basisnutzung inklusive',
        'Kernfunktionen freigeschaltet',
        'Klare und einfache UX',
        'Upgrade jederzeit moeglich'
      ],
      freeCta: 'Kostenlos starten',
      proLabel: 'Pro',
      proTitle: 'Fuer regelmaessige Nutzung',
      proTag: 'Beliebteste Wahl',
      proDescription:
        'Fuer Nutzer, die weniger Limits, schnellere Workflows und einen verlaesslichen Daily-Use-Pfad wollen.',
      proFeatures: [
        'Alles aus Free',
        'Hoehere Nutzungslimits',
        'Vorrang bei erweiterten Features',
        'Beste Wahl fuer wiederkehrende Workflows'
      ],
      proCta: 'Zu Pro wechseln',
      fullPricingCta: 'Alle Preise',
      footerDescription:
        'Einfache Werkzeuge fuer taegliche Workflows, gebaut mit Fokus auf Privatsphaere, Performance und klarer Nutzerfuehrung.',
      legalLinks: {
        imprint: 'Impressum',
        privacy: 'Datenschutz',
        terms: 'AGB'
      }
    },
    auth: {
      signInTitle: 'Melde dich in deinem Konto an',
      signUpTitle: 'Erstelle dein Konto',
      email: 'E-Mail',
      emailPlaceholder: 'E-Mail eingeben',
      password: 'Passwort',
      passwordPlaceholder: 'Passwort eingeben',
      loading: 'Laedt...',
      signIn: 'Anmelden',
      signUp: 'Registrieren',
      newHere: 'Neu auf der Plattform?',
      existingAccount: 'Du hast bereits ein Konto?',
      createAccount: 'Konto erstellen',
      signInExisting: 'Mit bestehendem Konto anmelden'
    },
    header: {
      localeLabel: 'Sprache',
      navigation: 'Navigation',
      signIn: 'Anmelden',
      signUp: 'Registrieren',
      openMenu: 'Menue oeffnen',
      closeMenu: 'Menue schliessen'
    },
    pricing: {
      mockBillingActive:
        'Mock Billing ist aktiv. Checkout und Subscription-Status laufen lokal ohne Stripe-Account.',
      withTrial: 'mit {days} Tagen kostenloser Testphase',
      perUser: 'pro Nutzer / {interval}',
      cta: 'Jetzt starten',
      featuresBase: [
        'Unbegrenzte Nutzung',
        'Unbegrenzte Workspace-Mitglieder',
        'E-Mail-Support'
      ],
      featuresPlus: [
        'Alles aus Base',
        'Frueher Zugriff auf neue Features',
        '24/7 Support plus Slack-Zugang'
      ]
    },
    dashboard: {
      settings: 'Einstellungen',
      nav: {
        team: 'Team',
        general: 'Allgemein',
        activity: 'Aktivitaet',
        security: 'Sicherheit'
      },
      teamSettings: 'Team-Einstellungen',
      teamSubscription: 'Team Subscription',
      currentPlan: 'Aktueller Plan',
      billedMonthly: 'Monatliche Abrechnung',
      trialPeriod: 'Testphase',
      noActiveSubscription: 'Keine aktive Subscription',
      manageSubscription: 'Subscription verwalten',
      teamMembers: 'Team-Mitglieder',
      noTeamMembers: 'Noch keine Team-Mitglieder.',
      removing: 'Entferne...',
      remove: 'Entfernen',
      inviteTeamMember: 'Team-Mitglied einladen',
      role: 'Rolle',
      member: 'Mitglied',
      owner: 'Owner',
      inviting: 'Lade ein...',
      inviteMember: 'Mitglied einladen',
      ownerOnly:
        'Du musst Team-Owner sein, um neue Mitglieder einzuladen.',
      generalSettings: 'Allgemeine Einstellungen',
      accountInformation: 'Kontoinformationen',
      name: 'Name',
      namePlaceholder: 'Deinen Namen eingeben',
      saveChanges: 'Aenderungen speichern',
      saving: 'Speichert...',
      activityLog: 'Aktivitaetsprotokoll',
      recentActivity: 'Letzte Aktivitaet',
      noActivityYet: 'Noch keine Aktivitaet',
      noActivityDescription:
        'Aktionen wie Login oder Kontoaenderungen erscheinen spaeter hier.',
      relativeTime: {
        justNow: 'gerade eben',
        minutesAgo: 'vor {count} Minuten',
        hoursAgo: 'vor {count} Stunden',
        daysAgo: 'vor {count} Tagen'
      },
      actions: {
        signUp: 'Du hast dich registriert',
        signIn: 'Du hast dich angemeldet',
        signOut: 'Du hast dich abgemeldet',
        updatePassword: 'Du hast dein Passwort geaendert',
        deleteAccount: 'Du hast dein Konto geloescht',
        updateAccount: 'Du hast dein Konto aktualisiert',
        createTeam: 'Du hast ein neues Team erstellt',
        removeTeamMember: 'Du hast ein Team-Mitglied entfernt',
        inviteTeamMember: 'Du hast ein Team-Mitglied eingeladen',
        acceptInvitation: 'Du hast eine Einladung angenommen',
        unknown: 'Unbekannte Aktion'
      },
      securitySettings: 'Sicherheitseinstellungen',
      currentPassword: 'Aktuelles Passwort',
      newPassword: 'Neues Passwort',
      confirmNewPassword: 'Neues Passwort bestaetigen',
      updatePassword: 'Passwort aktualisieren',
      updating: 'Aktualisiert...',
      deleteAccount: 'Konto loeschen',
      deleteWarning:
        'Das Loeschen des Kontos kann nicht rueckgaengig gemacht werden. Bitte vorsichtig fortfahren.',
      confirmPassword: 'Passwort bestaetigen',
      deleting: 'Loescht...',
      billingMockControl: 'Billing Mock Control',
      billingMockDescription:
        'Diese Seite ersetzt im Dev-Modus das Stripe Customer Portal. Hier steuerst du Plan und Status direkt.',
      currentTeamState: 'Aktueller Team-Status',
      plan: 'Plan',
      status: 'Status',
      productId: 'Produkt-ID',
      subscriptionId: 'Subscription-ID',
      applyState: 'Status setzen'
    },
    notFound: {
      title: 'Seite nicht gefunden',
      description:
        'Die gesuchte Seite wurde entfernt, umbenannt oder ist temporaer nicht verfuegbar.'
    }
  },
  en: {
    metadata: {
      title: 'SaaS Starter',
      description:
        'Multilingual SaaS starter built with Next.js, Postgres, and Stripe.'
    },
    common: {
      home: 'Home',
      pricing: 'Pricing',
      dashboard: 'Dashboard',
      features: 'Features',
      legal: 'Legal',
      builtWith: 'Built with Next.js',
      company: 'Your Product',
      allRightsReserved: 'All rights reserved.',
      backToHome: 'Back to home'
    },
    home: {
      heroTitle: 'Build your SaaS',
      heroAccent: 'faster than ever',
      heroDescription:
        'Launch your SaaS quickly with a production-ready template that includes modern tooling and the integrations you actually need.',
      deployCta: 'Deploy your own',
      featureTitle1: 'Next.js and React',
      featureBody1:
        'Use modern web technologies for performance and a faster developer workflow.',
      featureTitle2: 'Postgres and Drizzle ORM',
      featureBody2:
        'A solid database stack with a clean ORM for maintainable data access and growth.',
      featureTitle3: 'Stripe Integration',
      featureBody3:
        'Payments and subscriptions handled cleanly through Stripe without extra plumbing.',
      pricingBadge: 'Simple pricing',
      pricingTitle: 'Start free. Upgrade when it actually makes sense.',
      pricingDescription:
        'No bloated plans. Just a clean free tier and a pro upgrade for regular usage.',
      freeLabel: 'Free',
      freeTitle: 'Get started',
      freeTag: 'No risk',
      month: '/ month',
      freeDescription:
        'Perfect for testing the product, small workloads, and getting comfortable before paying anything.',
      freeFeatures: [
        'Basic usage included',
        'Core features available',
        'Clean and simple experience',
        'Upgrade anytime'
      ],
      freeCta: 'Start for free',
      proLabel: 'Pro',
      proTitle: 'Built for regular use',
      proTag: 'Most popular',
      proDescription:
        'For users who want fewer limits, faster workflows, and a smoother path for daily use.',
      proFeatures: [
        'Everything in Free',
        'Higher usage limits',
        'Priority access to advanced features',
        'Best choice for regular workflows'
      ],
      proCta: 'Go Pro',
      fullPricingCta: 'Full pricing',
      footerDescription:
        'Simple tools for everyday workflows, built with a focus on privacy, performance, and a clean user experience.',
      legalLinks: {
        imprint: 'Imprint',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    },
    auth: {
      signInTitle: 'Sign in to your account',
      signUpTitle: 'Create your account',
      email: 'Email',
      emailPlaceholder: 'Enter your email',
      password: 'Password',
      passwordPlaceholder: 'Enter your password',
      loading: 'Loading...',
      signIn: 'Sign in',
      signUp: 'Sign up',
      newHere: 'New to our platform?',
      existingAccount: 'Already have an account?',
      createAccount: 'Create an account',
      signInExisting: 'Sign in to existing account'
    },
    header: {
      localeLabel: 'Language',
      navigation: 'Navigation',
      signIn: 'Sign in',
      signUp: 'Sign up',
      openMenu: 'Open menu',
      closeMenu: 'Close menu'
    },
    pricing: {
      mockBillingActive:
        'Mock billing is active. Checkout and subscription state run locally without a Stripe account.',
      withTrial: 'with {days} day free trial',
      perUser: 'per user / {interval}',
      cta: 'Get started',
      featuresBase: [
        'Unlimited usage',
        'Unlimited workspace members',
        'Email support'
      ],
      featuresPlus: [
        'Everything in Base',
        'Early access to new features',
        '24/7 support plus Slack access'
      ]
    },
    dashboard: {
      settings: 'Settings',
      nav: {
        team: 'Team',
        general: 'General',
        activity: 'Activity',
        security: 'Security'
      },
      teamSettings: 'Team Settings',
      teamSubscription: 'Team Subscription',
      currentPlan: 'Current plan',
      billedMonthly: 'Billed monthly',
      trialPeriod: 'Trial period',
      noActiveSubscription: 'No active subscription',
      manageSubscription: 'Manage subscription',
      teamMembers: 'Team Members',
      noTeamMembers: 'No team members yet.',
      removing: 'Removing...',
      remove: 'Remove',
      inviteTeamMember: 'Invite Team Member',
      role: 'Role',
      member: 'Member',
      owner: 'Owner',
      inviting: 'Inviting...',
      inviteMember: 'Invite Member',
      ownerOnly: 'You must be a team owner to invite new members.',
      generalSettings: 'General Settings',
      accountInformation: 'Account Information',
      name: 'Name',
      namePlaceholder: 'Enter your name',
      saveChanges: 'Save Changes',
      saving: 'Saving...',
      activityLog: 'Activity Log',
      recentActivity: 'Recent Activity',
      noActivityYet: 'No activity yet',
      noActivityDescription:
        "When you perform actions like signing in or updating your account, they'll appear here.",
      relativeTime: {
        justNow: 'just now',
        minutesAgo: '{count} minutes ago',
        hoursAgo: '{count} hours ago',
        daysAgo: '{count} days ago'
      },
      actions: {
        signUp: 'You signed up',
        signIn: 'You signed in',
        signOut: 'You signed out',
        updatePassword: 'You changed your password',
        deleteAccount: 'You deleted your account',
        updateAccount: 'You updated your account',
        createTeam: 'You created a new team',
        removeTeamMember: 'You removed a team member',
        inviteTeamMember: 'You invited a team member',
        acceptInvitation: 'You accepted an invitation',
        unknown: 'Unknown action occurred'
      },
      securitySettings: 'Security Settings',
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      confirmNewPassword: 'Confirm New Password',
      updatePassword: 'Update Password',
      updating: 'Updating...',
      deleteAccount: 'Delete Account',
      deleteWarning:
        'Account deletion is not reversible. Please proceed with caution.',
      confirmPassword: 'Confirm Password',
      deleting: 'Deleting...',
      billingMockControl: 'Billing Mock Control',
      billingMockDescription:
        'This page replaces the Stripe Customer Portal in development mode. Control the visible plan and status directly here.',
      currentTeamState: 'Current Team State',
      plan: 'Plan',
      status: 'Status',
      productId: 'Product ID',
      subscriptionId: 'Subscription ID',
      applyState: 'Apply State'
    },
    notFound: {
      title: 'Page Not Found',
      description:
        'The page you are looking for might have been removed, renamed, or is temporarily unavailable.'
    }
  }
} as const;

export function getMessages(locale: Locale = defaultLocale) {
  return messages[locale] ?? messages[defaultLocale];
}
