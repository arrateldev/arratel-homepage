import type { Locale } from './i18n/config';

type LegalSectionContent = {
  title: string;
  paragraphs: string[];
};

type LegalPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSectionContent[];
};

type LegalContent = {
  impressum: LegalPageContent;
  privacy: LegalPageContent;
  terms: LegalPageContent;
};

const legalContent: Record<Locale, LegalContent> = {
  de: {
    impressum: {
      eyebrow: 'Rechtliches',
      title: 'Impressum',
      intro:
        'Diese Vorlage enthaelt Platzhalter, die du vor der produktiven Nutzung mit deinen echten Unternehmensdaten ersetzen solltest.',
      sections: [
        {
          title: 'Angaben gemaess § 5 TMG',
          paragraphs: [
            'ACME GmbH',
            'Musterstrasse 1',
            '10115 Berlin',
            'Deutschland'
          ]
        },
        {
          title: 'Vertreten durch',
          paragraphs: ['Max Mustermann, Geschaeftsfuehrer']
        },
        {
          title: 'Kontakt',
          paragraphs: [
            'E-Mail: hello@example.com',
            'Telefon: +49 30 123456789'
          ]
        },
        {
          title: 'Registereintrag',
          paragraphs: [
            'Handelsregister: Amtsgericht Berlin-Charlottenburg',
            'Registernummer: HRB 123456'
          ]
        },
        {
          title: 'Umsatzsteuer-ID',
          paragraphs: ['Umsatzsteuer-Identifikationsnummer: DE123456789']
        }
      ]
    },
    privacy: {
      eyebrow: 'Rechtliches',
      title: 'Datenschutzerklaerung',
      intro:
        'Diese Kurzfassung ist eine saubere Ausgangsbasis, ersetzt aber keine rechtliche Pruefung fuer dein konkretes Produkt.',
      sections: [
        {
          title: '1. Verantwortlicher',
          paragraphs: [
            'Verantwortlich fuer die Datenverarbeitung ist die ACME GmbH, Musterstrasse 1, 10115 Berlin, Deutschland.',
            'Bei Datenschutzfragen erreichst du uns unter hello@example.com.'
          ]
        },
        {
          title: '2. Welche Daten wir verarbeiten',
          paragraphs: [
            'Wir verarbeiten Bestandsdaten wie Name, E-Mail-Adresse und Account-Informationen.',
            'Zusaetzlich koennen Nutzungsdaten, Logdaten und abrechnungsbezogene Daten verarbeitet werden, soweit dies fuer den Betrieb des Dienstes erforderlich ist.'
          ]
        },
        {
          title: '3. Zwecke der Verarbeitung',
          paragraphs: [
            'Die Verarbeitung erfolgt zur Bereitstellung der Anwendung, zur Sicherheit des Systems, zur Kommunikation mit Nutzern und zur Abwicklung von Abonnements oder Zahlungen.'
          ]
        },
        {
          title: '4. Speicherdauer',
          paragraphs: [
            'Wir speichern personenbezogene Daten nur so lange, wie dies fuer die genannten Zwecke oder gesetzliche Aufbewahrungspflichten notwendig ist.'
          ]
        },
        {
          title: '5. Deine Rechte',
          paragraphs: [
            'Du hast das Recht auf Auskunft, Berichtigung, Loeschung, Einschraenkung der Verarbeitung, Datenuebertragbarkeit und Widerspruch.',
            'Ausserdem besteht ein Beschwerderecht bei einer zustaendigen Datenschutzaufsichtsbehoerde.'
          ]
        }
      ]
    },
    terms: {
      eyebrow: 'Rechtliches',
      title: 'Allgemeine Geschaeftsbedingungen',
      intro:
        'Auch diese AGB sind eine Vorlage. Fuer den Live-Betrieb solltest du sie mit echten Produktdetails und juristischer Pruefung finalisieren.',
      sections: [
        {
          title: '1. Geltungsbereich',
          paragraphs: [
            'Diese Bedingungen regeln die Nutzung des von ACME bereitgestellten SaaS-Dienstes durch registrierte Nutzer und Kunden.'
          ]
        },
        {
          title: '2. Vertragsschluss',
          paragraphs: [
            'Der Vertrag kommt mit Abschluss des Registrierungs- oder Bestellprozesses zustande.'
          ]
        },
        {
          title: '3. Leistungen',
          paragraphs: [
            'ACME stellt die Software als Online-Dienst bereit. Der konkrete Leistungsumfang ergibt sich aus der jeweils gebuchten Produktvariante.'
          ]
        },
        {
          title: '4. Preise und Zahlung',
          paragraphs: [
            'Kostenpflichtige Plaene werden nach den zum Zeitpunkt der Buchung angegebenen Preisen abgerechnet. Zahlungen koennen ueber externe Zahlungsdienstleister abgewickelt werden.'
          ]
        },
        {
          title: '5. Kuendigung',
          paragraphs: [
            'Nutzer koennen ihr Abonnement zum Ende der laufenden Abrechnungsperiode kuendigen, sofern keine abweichenden Vereinbarungen bestehen.'
          ]
        }
      ]
    }
  },
  en: {
    impressum: {
      eyebrow: 'Legal',
      title: 'Imprint',
      intro:
        'This template includes placeholder company information and should be updated with your actual legal details before going live.',
      sections: [
        {
          title: 'Provider Information',
          paragraphs: [
            'ACME GmbH',
            'Musterstrasse 1',
            '10115 Berlin',
            'Germany'
          ]
        },
        {
          title: 'Represented by',
          paragraphs: ['Max Mustermann, Managing Director']
        },
        {
          title: 'Contact',
          paragraphs: [
            'Email: hello@example.com',
            'Phone: +49 30 123456789'
          ]
        },
        {
          title: 'Commercial Register',
          paragraphs: [
            'Register Court: Berlin-Charlottenburg Local Court',
            'Registration Number: HRB 123456'
          ]
        },
        {
          title: 'VAT ID',
          paragraphs: ['VAT identification number: DE123456789']
        }
      ]
    },
    privacy: {
      eyebrow: 'Legal',
      title: 'Privacy Policy',
      intro:
        'This is a practical baseline for the starter, but it does not replace legal review for your specific product and jurisdiction.',
      sections: [
        {
          title: '1. Controller',
          paragraphs: [
            'The controller responsible for data processing is ACME GmbH, Musterstrasse 1, 10115 Berlin, Germany.',
            'For privacy-related questions, contact hello@example.com.'
          ]
        },
        {
          title: '2. Data We Process',
          paragraphs: [
            'We process account data such as name, email address, and profile details.',
            'We may also process usage data, log data, and billing-related data where required to operate the service.'
          ]
        },
        {
          title: '3. Purposes of Processing',
          paragraphs: [
            'We process personal data to provide the application, secure the service, communicate with users, and handle subscriptions or payments.'
          ]
        },
        {
          title: '4. Retention',
          paragraphs: [
            'We retain personal data only as long as necessary for the stated purposes or to comply with legal retention obligations.'
          ]
        },
        {
          title: '5. Your Rights',
          paragraphs: [
            'You may have rights of access, correction, deletion, restriction, portability, and objection depending on applicable law.',
            'You may also have the right to lodge a complaint with a competent supervisory authority.'
          ]
        }
      ]
    },
    terms: {
      eyebrow: 'Legal',
      title: 'Terms of Service',
      intro:
        'These terms are starter content and should be adapted to your actual commercial model and reviewed before production use.',
      sections: [
        {
          title: '1. Scope',
          paragraphs: [
            'These terms govern the use of the SaaS service provided by ACME for registered users and customers.'
          ]
        },
        {
          title: '2. Contract Formation',
          paragraphs: [
            'The agreement is formed when the user completes the registration or checkout flow.'
          ]
        },
        {
          title: '3. Services',
          paragraphs: [
            'ACME provides the software as an online service. The specific feature set depends on the selected plan.'
          ]
        },
        {
          title: '4. Pricing and Payment',
          paragraphs: [
            'Paid plans are billed according to the pricing displayed at the time of purchase. Payments may be handled through third-party payment providers.'
          ]
        },
        {
          title: '5. Termination',
          paragraphs: [
            'Users may cancel subscriptions effective at the end of the current billing period unless otherwise agreed.'
          ]
        }
      ]
    }
  }
};

export function getLegalContent(locale: Locale) {
  return legalContent[locale];
}
