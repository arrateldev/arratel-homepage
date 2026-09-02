import { defaultLocale, type Locale } from './config';
import { siteConfig } from '../site-config';

const messages = {
  de: {
    metadata: {
      title: siteConfig.product.metadata.title.de,
      description: siteConfig.product.metadata.description.de
    },
    common: {
      home: 'Start',
      pricing: 'Preise',
      faq: 'FAQ',
      links: 'Links',
      dashboard: 'Dashboard',
      features: 'Features',
      legal: 'Rechtliches',
      company: siteConfig.product.companyDisplayName,
      allRightsReserved: 'Alle Rechte vorbehalten.',
      backToHome: 'Zur Startseite'
    },
    home: {
      heroTitle: 'Precision software.',
      heroDescription:
        'Arratel ist das Zuhause für kleine, präzise Softwareprodukte: schlanke Tools, klare Workflows und Experimente, die aus echten Alltagsproblemen entstehen.',
      heroEyebrow: 'Arratel',
      primaryCta: 'Projekte ansehen',
      secondaryCta: 'Kontakt aufnehmen',
      signalCaption: 'A software lab for useful digital work.',
      radarLabel: 'Arratel Projekt-Radar',
      liveStatus: {
        checking: 'Prüfen',
        online: 'Online',
        offline: 'Offline'
      },
      radarItems: {
        core: {
          name: 'Arratel Core',
          status: 'active'
        },
        clavispass: {
          name: 'ClavisPass',
          status: 'building'
        },
        clavispassHub: {
          name: 'ClavisPass Hub',
          status: 'planned'
        },
        pdfMerge: {
          name: 'PDF Merge',
          status: 'next'
        }
      },
      projectsEyebrow: 'Projektübersicht',
      projectsTitle: 'Eine wachsende Karte aus Produkten, Prototypen und Ideen.',
      projectsDescription:
        'Die Timeline zeigt, woran Arratel arbeitet: von stabilen Bausteinen bis zu frühen Experimenten. Jedes Projekt soll klein genug bleiben, um klar zu sein, und stark genug, um regelmäßig nützlich zu werden.',
      projectLinkLabel: 'Projekt öffnen',
      projects: [
        {
          name: 'Arratel Core',
          type: 'Platform foundation',
          status: 'Active',
          description:
            'Die gemeinsame Basis für künftige Produkte: Auth, Billing, Lokalisierung, rechtliche Seiten und saubere Deployment-Pfade.'
        },
        {
          name: 'ClavisPass',
          type: 'Security utility',
          status: 'In progress',
          href: 'https://clavispass.arratel.dev',
          description:
            'Ein fokussiertes Werkzeug für Passwörter, Recovery-Daten und private Notizen mit ruhiger Oberfläche und klarer Kontrolle.'
        },
        {
          name: 'ClavisPass Hub',
          type: 'Self-hosted vault storage',
          status: 'Planned',
          description:
            'Ein selbst gehosteter Vault-Speicher für ClavisPass, gedacht für Nutzer, die ihre verschlüsselten Daten auf eigener Infrastruktur halten möchten.'
        },
        {
          name: 'PDF Merge',
          type: 'SaaS product',
          status: 'Next',
          description:
            'Das erste SaaS nach ClavisPass: ein schlankes Werkzeug zum Zusammenführen, Sortieren und Exportieren von PDF-Dateien.'
        }
      ],
      principlesEyebrow: 'Product Loop',
      principlesTitle: 'Wie aus einer Idee ein Arratel-Projekt wird.',
      principles: [
        {
          title: 'Problem',
          body: 'Ein Projekt beginnt erst, wenn ein wiederkehrender Workflow klar genug ist, dass ein kleines Tool ihn wirklich leichter machen kann.'
        },
        {
          title: 'Prototype',
          body: 'Die erste Version bleibt bewusst eng: Kernfunktion, saubere Oberfläche, technische Basis und schnelles Feedback statt Feature-Liste.'
        },
        {
          title: 'Product',
          body: 'Ein Prototyp wird erst zum Produkt, wenn er wiederholt Nutzen zeigt und zuverlässig genug ist, um eine eigene Seite oder Domain zu verdienen.'
        }
      ],
      contactEyebrow: 'Kontakt',
      contactTitle: 'Ein Projekt, eine Idee oder einfach ein guter Grund zu schreiben?',
      contactDescription:
        'Arratel wächst produktweise. Wenn ein Tool interessant ist, eine Kooperation passt oder du früh Feedback geben möchtest, ist E-Mail der beste Einstieg.',
      footerDescription:
        'Precision software. Kleine, nützliche Softwareprodukte mit Fokus auf Klarheit, Datenschutz und langlebige Workflows.',
      pricingBadge: 'Einfache Preise',
      pricingTitle: 'Kostenlos starten. Erst upgraden, wenn es Sinn ergibt.',
      pricingDescription:
        'Keine überladenen Pakete. Ein sauberer Free-Plan und ein Pro-Upgrade für regelmäßige Nutzung.',
      freeLabel: 'Free',
      freeTitle: 'Direkt loslegen',
      freeTag: 'Kein Risiko',
      freePrice: 'EUR 0',
      month: '/ Monat',
      freeDescription:
        'Ideal zum Testen, für kleine Workloads und für den ersten produktiven Eindruck ohne Zahlung.',
      freeFeatures: [
        'Basisnutzung inklusive',
        'Kernfunktionen freigeschaltet',
        'Klare und einfache UX',
        'Upgrade jederzeit möglich'
      ],
      proLabel: 'Pro',
      proTitle: 'Für regelmäßige Nutzung',
      proTag: 'Beliebteste Wahl',
      proPrice: 'EUR 9',
      proDescription:
        'Für Nutzer, die weniger Limits, schnellere Workflows und einen verlässlichen Daily-Use-Pfad wollen.',
      proFeatures: [
        'Alles aus Free',
        'Höhere Nutzungslimits',
        'Vorrang bei erweiterten Features',
        'Beste Wahl für wiederkehrende Workflows'
      ],
      proCta: 'Zu Pro wechseln',
      fullPricingCta: 'Alle Preise',
      legalLinks: {
        imprint: 'Impressum',
        privacy: 'Datenschutz',
        terms: 'AGB'
      }
    },
    links: {
      title: 'Alle Links',
      description:
        'Die offiziellen Profile, Projekte und Kontaktwege von Arratel an einem Ort.',
      website: 'Website',
      contact: 'Kontakt'
    },
    faq: {
      eyebrow: 'Häufige Fragen',
      title: 'Kurzantworten zu Arratel und den Projekten dahinter.',
      intro:
        'Arratel ist keine einzelne App, sondern ein wachsender Ort für fokussierte Softwareprodukte. Diese Seite klärt die wichtigsten Fragen, ohne die Startseite unnötig schwer zu machen.',
      badgePrimary: 'Arratel erklärt',
      badgeSecondary: 'Direkt und knapp',
      sections: [
        {
          title: 'Arratel',
          items: [
            {
              question: 'Was ist Arratel?',
              answer:
                'Arratel ist die Dachmarke für kleine, präzise Softwareprodukte. Der Fokus liegt auf nützlichen Workflows, ruhigen Oberflächen und Tools, die ein konkretes Problem sauber lösen.'
            },
            {
              question: 'Was bedeutet der Name Arratel?',
              answer:
                'Der Name geht auf arrátel zurück, eine historische portugiesische Gewichtseinheit von etwa 459 Gramm. Das passt gut zur Idee hinter der Marke: messen, abwägen und präzise bauen.'
            },
            {
              question: 'Warum heißt der Slogan Precision software.?',
              answer:
                'Weil jedes Projekt bewusst eng gedacht wird: lieber ein klares Werkzeug mit guter Ausführung als eine große Plattform voller unfertiger Versprechen.'
            },
            {
              question: 'Ist Arratel eine Agentur?',
              answer:
                'Nein. Arratel ist primär ein Produkt-Lab für eigene Softwareprojekte. Kooperationen oder Feedback sind willkommen, aber die Seite ist nicht als klassische Agentur-Website gedacht.'
            }
          ]
        },
        {
          title: 'Projekte',
          items: [
            {
              question: 'Sind alle Projekte schon öffentlich nutzbar?',
              answer:
                'Nicht zwingend. Die Übersicht zeigt auch Prototypen, technische Grundlagen und frühe Ideen. Der Status macht sichtbar, wie reif ein Projekt gerade ist.'
            },
            {
              question: 'Warum stehen unfertige Projekte auf der Website?',
              answer:
                'Weil Arratel transparent als wachsendes Produkt-Portfolio funktioniert. Manche Ideen starten klein, werden getestet und bleiben nur dann, wenn sie echten Nutzen zeigen.'
            },
            {
              question: 'Kann ich Feedback zu einem Projekt geben?',
              answer:
                'Ja. Frühes Feedback ist besonders wertvoll, solange ein Produkt noch formbar ist. Am besten schreibst du direkt per E-Mail mit dem Projektnamen im Betreff.'
            }
          ]
        },
        {
          title: 'Kontakt und Betrieb',
          items: [
            {
              question: 'Wie erreiche ich Arratel?',
              answer:
                'Der direkteste Weg ist E-Mail an contact@arratel.dev. Offizielle Social-Profile und weitere Links stehen gesammelt auf der Links-Seite.'
            },
            {
              question: 'Wo finde ich rechtliche Informationen?',
              answer:
                'Impressum, Datenschutz und AGB sind im Footer verlinkt. Diese Seiten bleiben sichtbar, auch wenn einzelne Produkte noch in Arbeit sind.'
            },
            {
              question: 'Wird es später eigene Produktseiten geben?',
              answer:
                'Ja, sobald ein Projekt genug Substanz hat, kann es eine eigene Seite oder Domain bekommen. Die Arratel-Homepage bleibt dann die zentrale Übersicht.'
            }
          ]
        }
      ],
      supportTitle: 'Noch etwas offen?',
      supportBody:
        'Wenn eine Frage zu Arratel, einem Projekt oder einer möglichen Zusammenarbeit fehlt, ist E-Mail der beste nächste Schritt.',
      supportPrimary: 'Kontakt aufnehmen',
      supportSecondary: 'Zum Start'
    },
    auth: {
      signInTitle: 'Melde dich in deinem Konto an',
      signUpTitle: 'Erstelle dein Konto',
      email: 'E-Mail',
      emailPlaceholder: 'E-Mail eingeben',
      password: 'Passwort',
      passwordPlaceholder: 'Passwort eingeben',
      loading: 'Lädt...',
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
      signOut: 'Abmelden',
      signUp: 'Registrieren',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen'
    },
    pricing: {
      mockBillingActive:
        'Mock Billing ist aktiv. Checkout und Subscription-Status laufen lokal ohne Stripe-Account.',
      withTrial: 'mit {days} Tagen kostenloser Testphase',
      perUser: 'pro Nutzer / {interval}',
      cta: 'Jetzt starten',
      currentPlan: 'Aktueller Plan',
      featuresBase: [
        'Unbegrenzte Nutzung',
        'Unbegrenzte Workspace-Mitglieder',
        'E-Mail-Support'
      ],
      featuresPlus: [
        'Alles aus Base',
        'Früher Zugriff auf neue Features',
        '24/7 Support plus Slack-Zugang'
      ]
    },
    dashboard: {
      settings: 'Einstellungen',
      nav: {
        team: 'Team',
        general: 'Allgemein',
        activity: 'Aktivität',
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
      saveChanges: 'Änderungen speichern',
      saving: 'Speichert...',
      activityLog: 'Aktivitätsprotokoll',
      recentActivity: 'Letzte Aktivität',
      noActivityYet: 'Noch keine Aktivität',
      noActivityDescription:
        'Aktionen wie Login oder Kontoänderungen erscheinen später hier.',
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
        updatePassword: 'Du hast dein Passwort geändert',
        deleteAccount: 'Du hast dein Konto gelöscht',
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
      confirmNewPassword: 'Neues Passwort bestätigen',
      updatePassword: 'Passwort aktualisieren',
      updating: 'Aktualisiert...',
      deleteAccount: 'Konto löschen',
      deleteWarning:
        'Das Löschen des Kontos kann nicht rückgängig gemacht werden. Bitte vorsichtig fortfahren.',
      confirmPassword: 'Passwort bestätigen',
      deleting: 'Löscht...',
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
        'Die gesuchte Seite wurde entfernt, umbenannt oder ist temporär nicht verfügbar.'
    }
  },
  en: {
    metadata: {
      title: siteConfig.product.metadata.title.en,
      description: siteConfig.product.metadata.description.en
    },
    common: {
      home: 'Home',
      pricing: 'Pricing',
      faq: 'FAQ',
      links: 'Links',
      dashboard: 'Dashboard',
      features: 'Features',
      legal: 'Legal',
      company: siteConfig.product.companyDisplayName,
      allRightsReserved: 'All rights reserved.',
      backToHome: 'Back to home'
    },
    home: {
      heroTitle: 'Precision software.',
      heroDescription:
        'Arratel is home to small, precise software products: lean tools, clear workflows, and experiments shaped by real everyday problems.',
      heroEyebrow: 'Arratel',
      primaryCta: 'View projects',
      secondaryCta: 'Get in touch',
      signalCaption: 'A software lab for useful digital work.',
      radarLabel: 'Arratel project radar',
      liveStatus: {
        checking: 'Checking',
        online: 'Online',
        offline: 'Offline'
      },
      radarItems: {
        core: {
          name: 'Arratel Core',
          status: 'active'
        },
        clavispass: {
          name: 'ClavisPass',
          status: 'building'
        },
        clavispassHub: {
          name: 'ClavisPass Hub',
          status: 'planned'
        },
        pdfMerge: {
          name: 'PDF Merge',
          status: 'next'
        }
      },
      projectsEyebrow: 'Project overview',
      projectsTitle: 'A growing map of products, prototypes, and ideas.',
      projectsDescription:
        'The timeline shows what Arratel is shaping: from stable foundations to early experiments. Every project should stay small enough to understand and strong enough to become useful again and again.',
      projectLinkLabel: 'Open project',
      projects: [
        {
          name: 'Arratel Core',
          type: 'Platform foundation',
          status: 'Active',
          description:
            'The shared base for future products: auth, billing, localization, legal pages, and clean deployment paths.'
        },
        {
          name: 'ClavisPass',
          type: 'Security utility',
          status: 'In progress',
          href: 'https://clavispass.arratel.dev',
          description:
            'A focused tool for passwords, recovery data, and private notes with a quiet interface and clear control.'
        },
        {
          name: 'ClavisPass Hub',
          type: 'Self-hosted vault storage',
          status: 'Planned',
          description:
            'A self-hosted vault storage layer for ClavisPass, built for users who want to keep encrypted data on their own infrastructure.'
        },
        {
          name: 'PDF Merge',
          type: 'SaaS product',
          status: 'Next',
          description:
            'The first SaaS after ClavisPass: a lean tool for merging, sorting, and exporting PDF files.'
        }
      ],
      principlesEyebrow: 'Product loop',
      principlesTitle: 'How an idea becomes an Arratel project.',
      principles: [
        {
          title: 'Problem',
          body: 'A project starts only when a recurring workflow is clear enough for a small tool to genuinely make it easier.'
        },
        {
          title: 'Prototype',
          body: 'The first version stays deliberately narrow: core function, clean interface, technical base, and fast feedback instead of a feature list.'
        },
        {
          title: 'Product',
          body: 'A prototype becomes a product only when it proves useful repeatedly and reliable enough to deserve its own page or domain.'
        }
      ],
      contactEyebrow: 'Contact',
      contactTitle: 'A project, an idea, or simply a good reason to write?',
      contactDescription:
        'Arratel grows one product at a time. If a tool is interesting, a collaboration fits, or you want to give early feedback, email is the best place to start.',
      footerDescription:
        'Precision software. Small, useful software products focused on clarity, privacy, and durable workflows.',
      pricingBadge: 'Simple pricing',
      pricingTitle: 'Start free. Upgrade when it actually makes sense.',
      pricingDescription:
        'No bloated plans. Just a clean free tier and a pro upgrade for regular usage.',
      freeLabel: 'Free',
      freeTitle: 'Get started',
      freeTag: 'No risk',
      freePrice: 'EUR 0',
      month: '/ month',
      freeDescription:
        'Perfect for testing the product, small workloads, and getting comfortable before paying anything.',
      freeFeatures: [
        'Basic usage included',
        'Core features available',
        'Clean and simple experience',
        'Upgrade anytime'
      ],
      proLabel: 'Pro',
      proTitle: 'Built for regular use',
      proTag: 'Most popular',
      proPrice: 'EUR 9',
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
      legalLinks: {
        imprint: 'Imprint',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    },
    links: {
      title: 'All links',
      description:
        'The official profiles, projects, and contact paths for Arratel in one place.',
      website: 'Website',
      contact: 'Contact'
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'Short answers about Arratel and the projects behind it.',
      intro:
        'Arratel is not a single app. It is a growing home for focused software products. This page answers the essentials without making the homepage heavier than it needs to be.',
      badgePrimary: 'Arratel explained',
      badgeSecondary: 'Direct and concise',
      sections: [
        {
          title: 'Arratel',
          items: [
            {
              question: 'What is Arratel?',
              answer:
                'Arratel is the umbrella brand for small, precise software products. The focus is useful workflows, quiet interfaces, and tools that solve one concrete problem well.'
            },
            {
              question: 'What does the name Arratel mean?',
              answer:
                'The name comes from arrátel, a historical Portuguese unit of weight of about 459 grams. It fits the idea behind the brand: measure carefully, weigh decisions, and build precisely.'
            },
            {
              question: 'Why the slogan Precision software.?',
              answer:
                'Because every project is intentionally narrow: a clear tool with careful execution beats a large platform full of unfinished promises.'
            },
            {
              question: 'Is Arratel an agency?',
              answer:
                'No. Arratel is primarily a product lab for its own software projects. Collaboration and feedback are welcome, but this is not meant to be a classic agency website.'
            }
          ]
        },
        {
          title: 'Projects',
          items: [
            {
              question: 'Are all projects publicly usable already?',
              answer:
                'Not necessarily. The overview can include prototypes, technical foundations, and early ideas. The status shows how mature each project currently is.'
            },
            {
              question: 'Why show unfinished projects on the site?',
              answer:
                'Because Arratel works as a growing product portfolio. Some ideas start small, get tested, and only stay if they prove useful.'
            },
            {
              question: 'Can I give feedback on a project?',
              answer:
                'Yes. Early feedback is especially valuable while a product is still shapeable. The best route is an email with the project name in the subject.'
            }
          ]
        },
        {
          title: 'Contact and operations',
          items: [
            {
              question: 'How can I reach Arratel?',
              answer:
                'The most direct path is email at contact@arratel.dev. Official social profiles and other links are collected on the links page.'
            },
            {
              question: 'Where can I find legal information?',
              answer:
                'The imprint, privacy policy, and terms are linked in the footer. They stay visible even while individual products are still in progress.'
            },
            {
              question: 'Will projects get their own pages later?',
              answer:
                'Yes. Once a project has enough substance, it can get its own page or domain. The Arratel homepage remains the central overview.'
            }
          ]
        }
      ],
      supportTitle: 'Still missing something?',
      supportBody:
        'If a question about Arratel, a project, or a possible collaboration is missing, email is the best next step.',
      supportPrimary: 'Get in touch',
      supportSecondary: 'Back home'
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
      signOut: 'Sign out',
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
      currentPlan: 'Current plan',
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


