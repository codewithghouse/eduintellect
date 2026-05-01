import LegalPageLayout from '../../components/LegalPageLayout';

const Legal = () => (
  <LegalPageLayout
    title="Legal Notice"
    effectiveDate="01 May 2026"
    intro="This page consolidates Edullent's legal positioning — company information, copyright, trademarks, third-party services, and how to get in touch about legal matters."
    sections={[
      {
        heading: 'Company information',
        paragraphs: [
          'Edullent is a school management software platform owned and operated by its founder team in India. Registered correspondence email: support@edullent.com.',
          'For commercial questions about partnerships, integrations, or enterprise licensing, write to support@edullent.com with subject line "Partnerships".',
        ],
      },
      {
        heading: 'Copyright',
        paragraphs: [
          'All content on edullent.com — including text, graphics, software code, logos, and product screenshots — is © Edullent. You may not copy, redistribute, or republish material without prior written permission.',
          'Code samples explicitly published under an open-source licence are exempt and remain subject to the terms of that licence.',
        ],
      },
      {
        heading: 'Trademarks',
        paragraphs: [
          '"Edullent" and the Edullent logomark are trademarks of Edullent. Any other product or service names referenced on this site are the property of their respective owners.',
        ],
      },
      {
        heading: 'Third-party services',
        paragraphs: [
          'Edullent is built on top of several third-party services: Firebase (Google) for storage, authentication, and hosting; OpenAI for AI features; Resend for transactional email; Vercel for serverless functions. Their respective terms and privacy notices apply to the data they process on our behalf.',
          'A detailed sub-processor list is available on request to the school owner of record.',
        ],
      },
      {
        heading: 'DMCA / takedown notices',
        paragraphs: [
          'If you believe content on Edullent infringes your copyright, send a written notice to support@edullent.com containing: a description of the work, the URL where it appears, your contact information, and a statement of good-faith belief. We will review within 7 business days.',
        ],
      },
      {
        heading: 'Disclaimer',
        paragraphs: [
          'Edullent provides a school management platform; it does not provide academic, legal, or financial advice. Risk predictions, fee forecasts, and analytics are decision-support tools — final decisions belong to the school administration and parents.',
          'External links from this site to other websites are provided for convenience; we are not responsible for the content of external sites.',
        ],
      },
      {
        heading: 'Contact for legal queries',
        paragraphs: [
          'For any legal correspondence write to support@edullent.com with subject line "Legal". We aim to acknowledge within 2 business days and respond substantively within 7 business days.',
        ],
      },
    ]}
  />
);

export default Legal;
