import { site } from "./content";

export const legalContact = {
  email: site.email,
  phone: site.phoneDisplay,
  address: site.offices[0].address,
} as const;

export const legalPaths = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
] as const;

export const disclaimer = {
  heading: "Disclaimer",
  paragraphs: [
    "Vikas Bharat Advisory PRIVATE LIMITED is a private company that provides startup consulting services in India. We help new and growing businesses with professional advice. We are not connected or associated with any Government or Non-Government Department, Office, Agency, or Organization. We only offer consultancy services.",
    "Please note that the information we provide is based on our understanding of current rules and processes. Actual requirements or procedures may vary depending on the concerned approving authority, officials, or agents. Any changes or updates made by these authorities are beyond our control and the information may differ or be updated without prior notice.",
  ],
  paymentHeading: "Payment Information",
  payment:
    "Please make sure that all payments are made only to Vikas Bharat ADVISORY PRIVATE LIMITED. We accept payments through our Current Account using NEFT, IMPS, RTGS, or through digital payment platforms like Cashfree and Razorpay. We do not accept payments in personal accounts or under any other name. Always use the official payment details shared by our company.",
} as const;

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "contact" };

export type LegalSection = {
  heading: string;
  blocks: readonly LegalBlock[];
};

export type LegalDocument = {
  path: string;
  title: string;
  description: string;
  intro: readonly string[];
  sections: readonly LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  path: "/privacy-policy",
  title: "Privacy Policy",
  description:
    "How VikasBharat Advisory Pvt. Ltd. safeguards personal information, your rights under Indian law, and how to raise a privacy request.",
  intro: [],
  sections: [
    {
      heading: "Security Measures",
      blocks: [
        {
          type: "p",
          text: "VikasBharat Advisory Pvt. Ltd. takes reasonable administrative, technical, physical, and organizational measures to safeguard personal information against unauthorized access, misuse, alteration, disclosure, loss, or destruction. While we make reasonable efforts to protect personal data, no electronic transmission, storage system, or security measure can be guaranteed to be completely secure in every circumstance.",
        },
      ],
    },
    {
      heading: "Rights Under Indian Law",
      blocks: [
        {
          type: "p",
          text: "Subject to applicable Indian laws and regulations, individuals may have the right to:",
        },
        {
          type: "list",
          items: [
            "Request information regarding the personal data collected and processed by VikasBharat Advisory Pvt. Ltd.",
            "Seek access to or copies of their personal information, where legally permitted.",
            "Request correction, updating, completion, or deletion of inaccurate or unnecessary personal information.",
            "Raise concerns or complaints regarding the handling of personal data and seek appropriate grievance redressal.",
            "Withdraw consent for processing activities that are based on consent. Such withdrawal will apply to future processing and will not affect the legality of processing carried out before consent was withdrawn.",
          ],
        },
        {
          type: "p",
          text: "Requests may be subject to applicable legal requirements, verification procedures, and reasonable limitations.",
        },
      ],
    },
    {
      heading: "Children's Personal Data",
      blocks: [
        {
          type: "p",
          text: "VikasBharat Advisory Pvt. Ltd. does not knowingly seek to collect or process personal information of children except where such processing is permitted under applicable Indian law. Where consent or additional safeguards are legally required for processing children's personal data, we will implement the applicable requirements and appropriate safeguards.",
        },
      ],
    },
    {
      heading: "International Data Transfers",
      blocks: [
        {
          type: "p",
          text: "In situations where personal information is transferred, stored, or processed outside India, VikasBharat Advisory Pvt. Ltd. will take appropriate steps to ensure that such transfers are undertaken in accordance with applicable Indian laws and regulatory requirements. Depending on the circumstances, suitable contractual, technical, and organizational safeguards may be implemented to protect personal information during such transfers.",
        },
      ],
    },
    {
      heading: "Grievance Redressal and Contact",
      blocks: [
        {
          type: "p",
          text: "If you have any questions, concerns, requests, or complaints relating to this Privacy Policy or the processing of your personal information, you may contact VikasBharat Advisory Pvt. Ltd. through the contact details provided on our official website.",
        },
        { type: "contact" },
        {
          type: "p",
          text: "We will review and address privacy-related requests and grievances in accordance with applicable laws and our internal procedures.",
        },
      ],
    },
    {
      heading: "Changes to This Privacy Policy",
      blocks: [
        {
          type: "p",
          text: "VikasBharat Advisory Pvt. Ltd. may revise or modify this Privacy Policy from time to time to reflect changes in our services, business practices, technology, or applicable legal and regulatory requirements.",
        },
        {
          type: "p",
          text: "Any updated version will be made available through our website or other appropriate communication channels. The revised policy will become effective from the date specified in the updated version. We encourage users to periodically review this Privacy Policy to remain informed about how their personal information is handled.",
        },
      ],
    },
  ],
};

export const refundPolicy: LegalDocument = {
  path: "/refund-policy",
  title: "Refund Policy",
  description:
    "Refund and fee terms for advisory services provided by VikasBharat Advisory Private Limited, including cancellations, processing timelines, and non-refundable fees.",
  intro: [],
  sections: [
    {
      heading: "1. Purpose and Scope",
      blocks: [
        {
          type: "p",
          text: "This Refund & Fee Policy (“Policy”) sets out the terms governing payments, professional fees, cancellations, withdrawal from engagements, and refund requests in relation to advisory, consulting, professional, and related services provided by VikasBharat Advisory Private Limited (“Company”, “we”, “us”, or “our”).",
        },
        {
          type: "p",
          text: "By making a payment or engaging the Company for its services, the client (“Client”, “you”, or “your”) acknowledges and agrees to the terms of this Policy, together with the applicable Engagement Letter, Proposal, Consulting Agreement, Service Agreement, or other written terms governing the engagement.",
        },
      ],
    },
    {
      heading: "2. Nature of Professional Fees",
      blocks: [
        {
          type: "p",
          text: "Unless expressly stated otherwise in writing, all fees paid to the Company are consideration for professional time, expertise, consultation, research, analysis, documentation, advisory support, and other services agreed upon with the Client.",
        },
        {
          type: "p",
          text: "Fees may also cover resources allocated, preliminary assessment, administrative work, preparation of documents, communications, coordination, and other activities undertaken in connection with the engagement.",
        },
        {
          type: "p",
          text: "Accordingly, payment of professional fees does not constitute payment for a guaranteed result or outcome.",
        },
      ],
    },
    {
      heading: "3. Cancellation and Withdrawal by the Client",
      blocks: [
        {
          type: "p",
          text: "The Client may request cancellation or withdrawal from an engagement; however, eligibility for a refund will depend upon the stage of the engagement and the nature of services already performed.",
        },
        {
          type: "p",
          text: "Where the Company has commenced work, including but not limited to consultation, research, assessment, preparation, documentation, submission support, communication, coordination, or other professional activities, the fees attributable to such services shall generally be non-refundable.",
        },
        {
          type: "p",
          text: "Any request for cancellation or withdrawal must be made in writing. The Company will assess such requests in accordance with this Policy and the terms of the applicable engagement.",
        },
      ],
    },
    {
      heading: "4. Non-Refundable Fees After Commencement of Services",
      blocks: [
        {
          type: "p",
          text: "Once professional services have commenced, fees paid for services already performed, work undertaken, resources committed, or costs incurred by the Company shall not ordinarily be refundable. This includes, without limitation:",
        },
        {
          type: "list",
          items: [
            "professional consultation and advisory services;",
            "research, analysis, assessment, and preparation;",
            "preparation or review of documents;",
            "application or proposal preparation and support;",
            "communication and coordination undertaken on behalf of the Client;",
            "services delivered in whole or in part; and",
            "third-party or administrative costs incurred specifically for the engagement.",
          ],
        },
        {
          type: "p",
          text: "The Client's decision to discontinue, suspend, or withdraw from an engagement after commencement of services shall not, by itself, create a right to a refund.",
        },
      ],
    },
    {
      heading: "5. No Guarantee of Outcome",
      blocks: [
        {
          type: "p",
          text: "VikasBharat Advisory Private Limited provides professional advisory and consulting services based on the information, documents, circumstances, and requirements communicated by the Client.",
        },
        {
          type: "p",
          text: "The Company does not guarantee or warrant any particular business, financial, regulatory, governmental, or commercial outcome, including but not limited to:",
        },
        {
          type: "list",
          items: [
            "approval or sanction of grants, subsidies, incentives, or government schemes;",
            "funding, financing, investment, or loan approval;",
            "regulatory registrations, permissions, approvals, certificates, or licenses;",
            "acceptance of applications, proposals, or submissions by any authority or third party;",
            "business growth, profitability, revenue, or commercial success; or",
            "any specific financial or other benefit.",
          ],
        },
        {
          type: "p",
          text: "Decisions relating to approvals, funding, licenses, grants, schemes, or other external outcomes may depend upon independent authorities, financial institutions, investors, third parties, market conditions, eligibility criteria, policies, and circumstances beyond the Company's reasonable control.",
        },
        {
          type: "p",
          text: "Accordingly, failure to achieve a desired or anticipated outcome, or dissatisfaction with the results of the advisory services, shall not by itself constitute valid grounds for a refund of professional fees.",
        },
      ],
    },
    {
      heading: "6. Discretionary Resolution",
      blocks: [
        {
          type: "p",
          text: "In exceptional circumstances, and solely at its discretion, the Company may consider an amicable resolution where it believes such action is appropriate for maintaining a professional relationship with the Client.",
        },
        {
          type: "p",
          text: "Without creating any obligation, the Company may, at its sole discretion, offer:",
        },
        {
          type: "list",
          items: [
            "a partial fee adjustment;",
            "a service credit for a future engagement;",
            "modification or extension of certain service terms; or",
            "another mutually acceptable commercial resolution.",
          ],
        },
        {
          type: "p",
          text: "Any such accommodation shall be considered on a case-by-case basis and shall not constitute an admission of liability, waiver of any provision of this Policy, or precedent for any future request or engagement.",
        },
      ],
    },
    {
      heading: "7. Refund Request Procedure",
      blocks: [
        {
          type: "p",
          text: "Any request for a refund must be submitted in writing to the Company's designated email address within seven (7) calendar days from the date of payment, unless a different period has been expressly agreed to in writing.",
        },
        {
          type: "p",
          text: "The request should include:",
        },
        {
          type: "list",
          items: [
            "Client's name and relevant engagement details;",
            "transaction or payment reference;",
            "proof of payment;",
            "date and amount of payment; and",
            "a clear written explanation of the reason for requesting the refund.",
          ],
        },
        {
          type: "p",
          text: "The Company may request additional information or documentation where reasonably necessary to evaluate the request. Submission of a refund request does not automatically create an entitlement to a refund. Each request will be reviewed in accordance with this Policy and the applicable engagement terms.",
        },
      ],
    },
    {
      heading: "8. Review and Refund Processing",
      blocks: [
        {
          type: "p",
          text: "Where a refund is approved in writing by the Company, the approved amount will ordinarily be processed within 7–15 business days from the date of approval, subject to applicable banking and payment-processing timelines.",
        },
        {
          type: "p",
          text: "Where practicable, refunds will be made through the original payment method used by the Client.",
        },
        {
          type: "p",
          text: "The Company may deduct, where applicable and legally permissible:",
        },
        {
          type: "list",
          items: [
            "payment gateway or transaction charges;",
            "banking or processing charges;",
            "third-party expenses already incurred;",
            "administrative or service-related costs; and",
            "applicable taxes or statutory deductions.",
          ],
        },
        {
          type: "p",
          text: "The final refundable amount, if any, will be communicated to the Client at the time the refund is approved.",
        },
      ],
    },
    {
      heading: "9. Client Responsibility and Third-Party Delays",
      blocks: [
        {
          type: "p",
          text: "The Company shall not be responsible for delays, rejection, non-approval, or failure of an engagement caused by inaccurate, incomplete, misleading, or delayed information or documents provided by the Client.",
        },
        {
          type: "p",
          text: "Similarly, delays or decisions attributable to government authorities, regulatory bodies, financial institutions, investors, vendors, technology platforms, or other third parties shall not automatically entitle the Client to a refund.",
        },
        {
          type: "p",
          text: "The Client is responsible for providing accurate and timely information and for complying with reasonable requests necessary for the delivery of the agreed services.",
        },
      ],
    },
    {
      heading: "10. Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "To the maximum extent permitted under applicable law, the Company's total aggregate liability arising out of or relating to a specific engagement, whether based on contract, negligence, tort, statute, or any other legal theory, shall not exceed the professional fees actually received by the Company for that specific engagement giving rise to the claim.",
        },
        {
          type: "p",
          text: "To the extent permitted by applicable law, the Company shall not be liable for any indirect, incidental, special, consequential, exemplary, reputational, or opportunity losses, including loss of profits, business opportunities, anticipated savings, revenue, or commercial benefits arising from or relating to the services.",
        },
        {
          type: "p",
          text: "Nothing in this Policy shall be construed as excluding or limiting any liability that cannot lawfully be excluded or limited under applicable law.",
        },
      ],
    },
    {
      heading: "11. Governing Agreement and Order of Precedence",
      blocks: [
        {
          type: "p",
          text: "This Refund & Fee Policy shall be read together with the applicable Engagement Letter, Consulting Agreement, Proposal, Service Agreement, invoice, or other written agreement entered into between the Company and the Client.",
        },
        {
          type: "p",
          text: "In the event of any inconsistency between this Policy and a specific provision contained in an executed written agreement, the terms of the executed agreement shall prevail to the extent of such inconsistency.",
        },
      ],
    },
    {
      heading: "12. Amendments to the Policy",
      blocks: [
        {
          type: "p",
          text: "The Company reserves the right to modify or update this Refund & Fee Policy from time to time to reflect changes in its services, business practices, or applicable legal and regulatory requirements.",
        },
        {
          type: "p",
          text: "The version of the Policy applicable to an engagement shall generally be the version in effect at the time the relevant payment or engagement was made, unless otherwise agreed in writing.",
        },
      ],
    },
    {
      heading: "13. Contact",
      blocks: [
        {
          type: "p",
          text: "For refund-related requests, questions, or clarifications, Clients may contact VikasBharat Advisory Private Limited through the official contact details published by the Company.",
        },
        { type: "contact" },
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  path: "/terms-and-conditions",
  title: "Terms & Conditions",
  description:
    "Refund and cancellation terms for advisory and consulting services provided by VikasBharat Advisory Private Limited.",
  intro: [
    "These Refund and Cancellation Terms & Conditions (“Terms”) set out the procedures, conditions, and requirements applicable to requests for cancellation and refund in connection with the advisory, consulting, professional, and related services provided by VikasBharat Advisory Private Limited (“Company”, “we”, “us”, or “our”).",
    "By engaging the Company and making payment for any service, the client (“Client”, “you”, or “your”) acknowledges and agrees to these Terms, together with any applicable proposal, quotation, engagement letter, service agreement, or other document executed between the Company and the Client.",
  ],
  sections: [
    {
      heading: "1. Definitions",
      blocks: [
        {
          type: "p",
          text: "For the purpose of these Terms:",
        },
        {
          type: "list",
          items: [
            "“Company” means VikasBharat Advisory Private Limited, being the entity providing the agreed advisory, consulting, or professional services.",
            "“Client” means any individual, business, organization, or other entity that engages the Company and/or purchases or avails its services.",
            "“Services” means the advisory, consulting, professional, documentation, application-support, business-support, or other services agreed to be provided by the Company.",
            "“Refund” means the return of all or part of the amount paid by the Client, where the Company determines that such amount is refundable under these Terms or under a specific written agreement between the parties.",
          ],
        },
      ],
    },
    {
      heading: "2. Eligibility for Refund",
      blocks: [
        {
          type: "p",
          text: "A Client shall be eligible for a refund only where:",
        },
        {
          type: "list",
          items: [
            "the applicable service and circumstances have been reviewed and assessed by the Company; or",
            "the Client's entitlement to a refund is expressly provided for in a duly executed agreement, engagement letter, undertaking, proposal, or other written document between the Company and the Client; or",
            "the Company expressly approves the refund in writing.",
          ],
        },
        {
          type: "p",
          text: "Payment of fees does not, by itself, create an automatic right to a refund.",
        },
        {
          type: "p",
          text: "Where Services have already commenced, the Company may consider the work performed, professional time spent, resources allocated, administrative activities undertaken, and expenses incurred before determining whether any amount is refundable.",
        },
      ],
    },
    {
      heading: "3. Cancellation of Services",
      blocks: [
        {
          type: "p",
          text: "Any request to cancel or discontinue Services must be submitted by the Client in writing to the Company's official communication channel.",
        },
        {
          type: "p",
          text: "Where the request is received before commencement of Services, the Company may evaluate the request for cancellation in accordance with the applicable engagement terms.",
        },
        {
          type: "p",
          text: "Where Services have already commenced, cancellation or discontinuation by the Client shall not automatically entitle the Client to a refund. Any refund, if applicable, shall be determined based on the terms of the relevant engagement and the work already undertaken by the Company.",
        },
      ],
    },
    {
      heading: "4. Determination of Refund Amount",
      blocks: [
        {
          type: "p",
          text: "Where a refund is approved, the refundable amount shall be determined based on:",
        },
        {
          type: "list",
          items: [
            "the terms of the applicable agreement or engagement;",
            "the Services already performed;",
            "professional time and resources utilized;",
            "expenses or third-party costs already incurred;",
            "applicable taxes, transaction charges, or other permissible deductions; and",
            "any other relevant circumstances associated with the engagement.",
          ],
        },
        {
          type: "p",
          text: "The refund amount shall be the amount expressly stated in the applicable written agreement or, where no specific amount is stated, such amount as may be determined and mutually agreed upon between the Company and the Client.",
        },
      ],
    },
    {
      heading: "5. Refund Confirmation",
      blocks: [
        {
          type: "p",
          text: "Where the Company approves a refund, the Company shall communicate the refund details to the Client through the email address or other official contact information provided by the Client. Such communication may specify:",
        },
        {
          type: "list",
          items: [
            "the reason for the refund;",
            "the approved refund amount;",
            "applicable deductions, if any;",
            "the terms and conditions applicable to the refund; and",
            "the expected refund processing timeline.",
          ],
        },
        {
          type: "p",
          text: "The Client may be required to acknowledge and confirm acceptance of the refund terms before the refund is processed.",
        },
      ],
    },
    {
      heading: "6. Refund Process",
      blocks: [
        {
          type: "p",
          text: "Where a refund has been approved, the following process may apply:",
        },
        {
          type: "list",
          items: [
            "The Company will communicate the refund decision and applicable terms to the Client in writing.",
            "The Client shall review and acknowledge the refund communication, where required.",
            "The Client shall provide accurate bank/payment details necessary for processing the refund.",
            "Where applicable, the Client may be required to provide the account holder's name, bank account number, IFSC code, and other information reasonably required to complete the transfer.",
            "Upon receipt and verification of the required information, the Company will initiate the refund process.",
            "The approved refund will then be transferred to the Client through the applicable payment method.",
          ],
        },
        {
          type: "p",
          text: "The Company shall not be responsible for delays resulting from incorrect, incomplete, or outdated banking information supplied by the Client.",
        },
      ],
    },
    {
      heading: "7. Refund Timeframe",
      blocks: [
        {
          type: "p",
          text: "An approved refund shall ordinarily be processed within 45 working days from the date on which the Company has received all documents, confirmations, banking details, and other information reasonably required to complete the refund process.",
        },
        {
          type: "p",
          text: "The above timeframe may be extended where delays arise due to banks, payment gateways, financial institutions, regulatory requirements, technical issues, or other circumstances beyond the Company's reasonable control.",
        },
      ],
    },
    {
      heading: "8. Non-Refundable Circumstances",
      blocks: [
        {
          type: "p",
          text: "Unless otherwise expressly agreed in writing, fees may be non-refundable where:",
        },
        {
          type: "list",
          items: [
            "Services have already been substantially performed;",
            "professional work, research, consultation, documentation, or preparation has already been undertaken;",
            "the Client voluntarily discontinues or withdraws from the engagement after commencement;",
            "the desired business, financial, funding, grant, regulatory, licensing, or commercial outcome is not achieved;",
            "the outcome depends upon a government authority, financial institution, investor, third party, or other external decision-maker;",
            "the Client has provided inaccurate, incomplete, or misleading information or documentation;",
            "third-party or administrative expenses have already been incurred; or",
            "the applicable agreement expressly provides that the relevant fee is non-refundable.",
          ],
        },
      ],
    },
    {
      heading: "9. No Guarantee of Outcome",
      blocks: [
        {
          type: "p",
          text: "The Company's Services are advisory and professional in nature. The Company does not guarantee any particular business, financial, funding, grant, regulatory, licensing, investment, or commercial outcome unless expressly stated otherwise in a written agreement.",
        },
        {
          type: "p",
          text: "Accordingly, failure to obtain a particular approval, grant, funding, license, investment, or other anticipated result shall not, by itself, constitute grounds for a refund.",
        },
      ],
    },
    {
      heading: "10. Client's Responsibility",
      blocks: [
        {
          type: "p",
          text: "The Client is responsible for providing complete, accurate, and timely information and documentation required for the delivery of Services.",
        },
        {
          type: "p",
          text: "Any delay, rejection, non-approval, or adverse outcome resulting from inaccurate information, incomplete documentation, failure to cooperate, failure to meet eligibility criteria, or delay attributable to the Client shall not automatically create an entitlement to a refund.",
        },
      ],
    },
    {
      heading: "11. Grievance Resolution",
      blocks: [
        {
          type: "p",
          text: "If the Client requires clarification, has a concern regarding a refund or cancellation request, or wishes to raise a service-related grievance, the Client may contact the Company through its official communication channels. The communication should, wherever possible, include:",
        },
        {
          type: "list",
          items: [
            "Name of the Client/Company;",
            "Service availed;",
            "Date of engagement/payment;",
            "Nature of the query, concern, or grievance;",
            "Name of the person who coordinated with the Company regarding the engagement; and",
            "Relevant contact details and supporting documents.",
          ],
        },
        {
          type: "p",
          text: "The Company will review the matter and provide an appropriate response in accordance with these Terms and the applicable agreement.",
        },
      ],
    },
    {
      heading: "12. Contact Us",
      blocks: [
        {
          type: "p",
          text: "For questions, refund requests, cancellation requests, or clarification regarding these Terms, please contact VikasBharat Advisory Private Limited through its official contact details:",
        },
        { type: "contact" },
      ],
    },
    {
      heading: "13. Amendments",
      blocks: [
        {
          type: "p",
          text: "The Company reserves the right to modify or update these Refund and Cancellation Terms & Conditions from time to time to reflect changes in its services, business practices, or applicable legal and regulatory requirements.",
        },
        {
          type: "p",
          text: "Any updated version may be published through the Company's website or communicated through appropriate channels and shall apply as specified therein.",
        },
      ],
    },
  ],
};
