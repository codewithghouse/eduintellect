import LegalPageLayout from '../../components/LegalPageLayout';

const TermsOfUse = () => (
  <LegalPageLayout
    title="Terms of Use"
    effectiveDate="01 May 2026"
    intro="By using Edullent, you agree to these terms. They cover what we provide, what you are responsible for, billing, and the limits of our liability. Plain language, no fine print."
    sections={[
      {
        heading: '1. The service',
        paragraphs: [
          'Edullent provides a multi-dashboard school management platform: an Owner dashboard, a Principal portal, a Teacher app, and a Parent dashboard. Access is via web browser and mobile-optimised web.',
          'We aim to keep the service available 99.5% of the time on the Starter plan, 99.9% on Pro, and per-contract on Enterprise. Planned maintenance is announced in advance.',
        ],
      },
      {
        heading: '2. Your account',
        paragraphs: [
          'Owners create the school account and invite principals, teachers, and parents. Each user is responsible for keeping their login credentials safe. School admins are responsible for revoking access when staff leave or roles change.',
          'You may not share login credentials, attempt to access other schools\' data, or reverse-engineer the platform.',
        ],
      },
      {
        heading: '3. Billing and renewals',
        paragraphs: [
          'Subscriptions are billed monthly or annually, in advance. The plan you select determines student and branch limits. Going over the limit prompts an automatic upgrade nudge; we will not silently suspend access mid-term.',
          'GST is applicable extra on all invoices. Payments are processed through standard Indian payment gateways (UPI, cards, net-banking).',
          'Refunds are available within 7 days of the first payment if the platform fails to deliver core advertised functionality. After that, prepaid annual plans are non-refundable but can be downgraded at the next renewal.',
        ],
      },
      {
        heading: '4. Cancellation',
        paragraphs: [
          'You can cancel anytime from the Owner dashboard or by emailing support@edullent.com. After cancellation, your data remains available in read-only mode for 30 days, then is permanently deleted unless you request a longer retention window.',
          'If you cancel mid-term on a monthly plan, the service continues until the end of that billing cycle.',
        ],
      },
      {
        heading: '5. Acceptable use',
        paragraphs: [
          'Edullent must not be used to harass students, store unrelated personal data, run unauthorised marketing, or attempt to access data outside your school. We may suspend accounts that violate these rules after notifying the school owner.',
        ],
      },
      {
        heading: '6. Our responsibilities',
        paragraphs: [
          'We protect your data with industry-standard security practices, run regular backups, and keep the platform updated. We will notify you within 72 hours of any incident that affects your data.',
        ],
      },
      {
        heading: '7. Limits of liability',
        paragraphs: [
          'Edullent is provided "as is". To the maximum extent permitted by law, our total liability for any claim is limited to the amount you paid us in the 12 months before the claim arose. We are not liable for indirect or consequential losses.',
        ],
      },
      {
        heading: '8. Governing law',
        paragraphs: [
          'These terms are governed by the laws of India. Any dispute will be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.',
        ],
      },
      {
        heading: '9. Contact',
        paragraphs: [
          'For any questions about these terms write to support@edullent.com. We try to respond within 1 business day.',
        ],
      },
    ]}
  />
);

export default TermsOfUse;
