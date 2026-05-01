import LegalPageLayout from '../../components/LegalPageLayout';

const PrivacyPolicy = () => (
  <LegalPageLayout
    title="Privacy Policy"
    effectiveDate="01 May 2026"
    intro="Edullent is built for schools, and schools handle some of the most sensitive data there is — student records, attendance, grades, fees. This policy explains exactly what we collect, why we collect it, where it lives, and what control you have over it."
    sections={[
      {
        heading: '1. Who we are',
        paragraphs: [
          'Edullent (“Edullent”, “we”, “us”) is a school management software platform owned and operated in India. School owners, principals, teachers, and parents use Edullent through dedicated dashboards.',
          'For privacy questions you can reach us at support@edullent.com.',
        ],
      },
      {
        heading: '2. What we collect',
        paragraphs: [
          'From schools and their staff: name, role (owner / principal / teacher), email address, phone number, school and branch identifiers.',
          'From students: name, class, section, attendance, scores, behaviour notes, and fee records — all entered by authorised school staff. Edullent does not collect biometric or location data.',
          'From parents: name, phone number, email address, and the link between parent and student account.',
          'Operational data: anonymised usage telemetry to improve product performance and reliability.',
        ],
      },
      {
        heading: '3. How we use the data',
        paragraphs: [
          'To deliver the service: showing dashboards, generating reports, calculating risk scores, sending notifications.',
          'To keep the service safe: preventing unauthorised access, detecting abuse, debugging.',
          'To communicate with school admins about service updates, billing, and support.',
          'We do not sell your data. We do not use student data to train external AI models.',
        ],
      },
      {
        heading: '4. Where the data lives',
        paragraphs: [
          'All school data is stored in Google Firebase (Firestore + Cloud Storage), region asia-south1 by default. Authentication is handled through Firebase Authentication.',
          'AI features that need a model call use OpenAI as a processor — payloads are sent over TLS, processed, and not retained for training. Sensitive identifiers are minimised before any external call.',
          'Backups are encrypted at rest and rotated regularly.',
        ],
      },
      {
        heading: '5. Who can see what',
        paragraphs: [
          'Access is enforced by Firebase Security Rules tied to each user\'s role and school. A teacher cannot read another school\'s data; a parent cannot read another student\'s data; a principal cannot read another branch\'s private data.',
          'Edullent staff access production data only when required for support, with the school\'s prior request, and the access is logged.',
        ],
      },
      {
        heading: '6. Your rights',
        paragraphs: [
          'You can request a copy of all data associated with your account. You can ask for correction of inaccurate data. You can request deletion subject to legal record-keeping obligations the school may have under the local education regulator.',
          'For data correction or deletion requests, write to support@edullent.com from the email address registered with us.',
        ],
      },
      {
        heading: '7. Children\'s data',
        paragraphs: [
          'Edullent processes student data on behalf of the school as a data processor. Schools are the data controllers. Parents who want to access, correct, or remove their child\'s data should contact the school first; we will support the school in fulfilling the request.',
        ],
      },
      {
        heading: '8. Changes to this policy',
        paragraphs: [
          'We may update this policy when we add features or when regulations change. The "effective from" date at the top of the page reflects the latest version. Material changes are emailed to school admins.',
        ],
      },
    ]}
  />
);

export default PrivacyPolicy;
