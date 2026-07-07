// WOMD company-profile content.
// Copy sourced from the reference artifact (content only); structure maps to
// brand/WOMD Product Catalog.md, regrouped into 5 pillars. Refine via `copywriter`.

export const hero = {
  eyebrow: "Strategic Transformation Consultancy",
  tagline: "Weapons of Mass Discussion",
  subheadPre: "We help you listen, ideate, create, engage and amplify",
  subheadAccent: "your products and stories online.",
};

export const stats = {
  kicker: "Track record",
  items: [
    { value: "20+", label: "Years in digital" },
    { value: "100+", label: "Projects delivered" },
    { value: "50+", label: "Brands & organizations" },
  ],
};

export const whoWeAre = {
  kicker: "Who we are",
  headlineLead: "A consultancy built for the",
  headlineAccent: "AI & digital era.",
  paragraphs: [
    "Growth begins with research, clear goals and a sound strategy, followed by optimal execution. We help you create clarity, build scalable solutions, shape narratives, develop future-ready capabilities, and transform online conversations into impact.",
    "Our work sits at the intersection of strategy, communication, research, innovation, technology, AI, leadership, learning, and human behavior. Because in a rapidly changing world, organizations don't only need to be seen. They need to be understood, trusted, remembered, and talked about.",
  ],
};

export const belief = {
  kicker: "Our core belief",
  headline: "Ideas move people when they touch the heart as well as the mind.",
  beats: [
    { label: "Empathetic", text: "The best ideas are built on a shared understanding with your intended audience.", icon: "/icons/belief-clear.svg" },
    { label: "Relevant", text: "They spread further when they're in tune with your audience's identity, needs and wants.", icon: "/icons/belief-relevant.svg" },
    { label: "Powerful", text: "They become powerful when they become part of the public conversation.", icon: "/icons/belief-powerful.svg" },
    { label: "Impactful", text: "They create change when you turn them into systems, stories, and collective action.", icon: "/icons/belief-impactful.svg" },
  ],
};

export interface Product {
  name: string;
  bullets: string[];
}
export interface Pillar {
  num: string;
  icon: string;
  title: string;
  intro: string;
  products: Product[];
}

export const pillars: Pillar[] = [
  {
    num: "01",
    icon: "/icons/pillar-01.svg",
    title: "Digital Transformation & Leadership",
    intro:
      "This category focuses on helping organizations build digital transformation direction, modern communication strategy, and leadership readiness for the AI and digital era.",
    products: [
      {
        name: "Digital Transformation Playbook",
        bullets: [
          "Business & channel assessment",
          "Digital opportunity mapping",
          "Workflow transformation",
          "Technology recommendation",
          "12-month implementation roadmap",
        ],
      },
      {
        name: "Social Media Growth Strategy Playbook",
        bullets: [
          "Content pillar framework",
          "Audience & platform mapping",
          "Messaging framework",
          "3-month content direction",
          "KPI & growth tracking",
        ],
      },
      {
        name: "Digital Leadership Playbook",
        bullets: [
          "AI & digital leadership framework",
          "Future of work insights",
          "Team productivity framework",
          "Decision-making guideline",
          "Leadership adaptation roadmap",
        ],
      },
    ],
  },
  {
    num: "02",
    icon: "/icons/pillar-02.svg",
    title: "Brand Strategy & Visual System",
    intro:
      "This category focuses on helping organizations build strong, consistent, and scalable brand foundations across all communication touchpoints.",
    products: [
      {
        name: "Brand Blueprint",
        bullets: [
          "Brand positioning",
          "Value proposition",
          "Brand personality",
          "Messaging hierarchy",
          "Communication direction",
        ],
      },
      {
        name: "Brand Kit & Visual System",
        bullets: [
          "Logo usage guideline",
          "Typography & color system",
          "Social media templates",
          "Presentation template",
          "Marketing collateral templates",
          "Website visual direction",
        ],
      },
    ],
  },
  {
    num: "03",
    icon: "/icons/pillar-03.svg",
    title: "Business & Product Innovation",
    intro:
      "This category focuses on helping organizations make sharper business, product, and communication decisions backed by market research, validation, and data.",
    products: [
      {
        name: "Market Research Report",
        bullets: [
          "Market & industry overview",
          "Competitor landscape analysis",
          "Audience & consumer behavior insights",
          "Trend & opportunity mapping",
          "SWOT & strategic positioning",
          "Key findings & recommendations",
        ],
      },
      {
        name: "Product-Market Fit Assessment",
        bullets: [
          "Product-market fit evaluation",
          "Customer problem & needs analysis",
          "Value proposition assessment",
          "Audience relevance mapping",
          "Market demand validation",
          "Growth barrier identification",
          "Strategic recommendation report",
        ],
      },
      {
        name: "Data Analytics Dashboard Blueprint",
        bullets: [
          "KPI & metrics mapping",
          "Reporting structure",
          "Dashboard wireframe & flow",
          "Data source identification",
          "User role & access mapping",
          "Analytics workflow recommendation",
        ],
      },
    ],
  },
  {
    num: "04",
    icon: "/icons/pillar-04.svg",
    title: "Technology & Digital Products",
    intro:
      "This category focuses on helping organizations build systems, platforms, and digital tools that support modern learning, communication, productivity, and operations.",
    products: [
      {
        name: "LMS & Learning Platform Development",
        bullets: [
          "LMS strategy & structure",
          "User flow & learning journey",
          "Dashboard & assessment system",
          "Certification system",
          "Content structure setup",
          "Deployment & onboarding",
        ],
      },
      {
        name: "AI Agent & Automation System",
        bullets: [
          "AI agent strategy",
          "Conversation flow design",
          "Persona & tone setup",
          "Knowledge base structure",
          "Workflow automation mapping",
          "Technical requirement guide",
        ],
      },
      {
        name: "Website & Digital Presence Development",
        bullets: [
          "Website strategy & structure",
          "Sitemap & wireframe",
          "UI direction",
          "Copywriting direction",
          "Development & deployment",
          "Basic SEO setup",
        ],
      },
    ],
  },
  {
    num: "05",
    icon: "/icons/pillar-05.svg",
    title: "People & Organizational Development",
    intro:
      "This category focuses on helping organizations build stronger talent systems, capability development, and workforce readiness for the future of work.",
    products: [
      {
        name: "Organizational & Talent Assessment",
        bullets: [
          "Organizational assessment",
          "Capability gap analysis",
          "Team & role evaluation",
          "Leadership readiness insights",
          "Strategic recommendations",
        ],
      },
      {
        name: "Transformation Training Roadmap",
        bullets: [
          "Learning roadmap",
          "Training matrix",
          "Competency development framework",
          "Role-based learning",
          "Capability growth timeline",
        ],
      },
      {
        name: "Strategic Hiring & Talent Development",
        bullets: [
          "Hiring framework",
          "Talent persona",
          "Interview & assessment framework",
          "Candidate evaluation system",
          "Talent development recommendations",
        ],
      },
    ],
  },
];

export const process = {
  kicker: "How we work",
  headline: "We begin with clarity.",
  headlineLead: "We begin with",
  headlineAccent: "clarity.",
  steps: [
    { n: "1", icon: "/icons/step-diagnose.svg", title: "Diagnose", text: "We understand your organization's current condition, challenges, goals, market context, and opportunities." },
    { n: "2", icon: "/icons/step-define.svg", title: "Define", text: "We help define your strategic direction, priorities, system, product opportunities, or capability that needs to be built." },
    { n: "3", icon: "/icons/step-design.svg", title: "Design", text: "We design the blueprint, playbook, framework, system, roadmap, or product structure you need to move forward." },
    { n: "4", icon: "/icons/step-develop.svg", title: "Develop", text: "We help you develop the required assets, tools, platforms, dashboards, brand systems, or capability structures." },
    { n: "5", icon: "/icons/step-enable.svg", title: "Enable", text: "We support you with implementation guidance, alignment, and capability transfer." },
  ],
};

export const differentiators = {
  kicker: "What makes us different",
  headline: "We don't start from “what should we make?” We start from “what needs to change?”",
  items: [
    { title: "Strategic Before Tactical", text: "We begin with direction, not deliverables." },
    { title: "Connected, Not Siloed", text: "We link strategy, research, communication, technology, and people, because transformation requires them all." },
    { title: "Systems, Not Outputs", text: "We build repeatable systems and long-term capability, not one-off deliverables." },
    { title: "AI-Enabled, Human-Centered", text: "AI should strengthen human clarity, productivity, learning, creativity, and decision-making." },
  ],
};

export const audience = {
  kicker: "Who we work with",
  headline: "Organizations ready to build for the future.",
  items: [
    "International brands seeking to enter the Indonesian market",
    "Indonesian brands seeking to grow regionally or globally",
    "Organizations seeking digital transformation and AI adoption",
    "Brands needing clearer positioning",
    "Product teams validating market opportunities",
    "Leaders building future-ready teams",
    "Institutions developing learning systems",
    "Founders needing strategic clarity",
    "Organizations preparing for scalability",
  ],
};

export const closing = {
  statementLead: "The future belongs to organizations that know how to",
  statementAccent: "think, communicate, and transform.",
  statementBody:
    "If your organization is preparing for transformation, validating new opportunities, adopting AI, strengthening your brand, or developing future-ready teams. We are ready to help.",
  kicker: "Let's build together",
  descriptor: "Strategic Transformation Consultancy for the AI Era",
  kicker2: "Make your ideas impossible to ignore.",
  futureEyebrow: "The future",
  contactHeadlineLead: "Amplify your",
  contactHeadlineAccent: "products and stories online.",
  // TODO: phone is still a placeholder — confirm real number before launch.
  contact: {
    email: "hello@wmdiscussion.com",
    phone: "+62 811 1000 2000",
  },
};

// Page-chrome strings that previously lived inline in .astro files.
// Centralised here so they translate alongside everything else.
export const homePage = {
  whatWeDoKicker: "What we do",
  whatWeDoTitle: "Five pillars of transformation.",
  whatWeDoIntro:
    "Together, these pillars help organizations move from understanding current realities to building solutions and teams that lead to meaningful growth.",
  servicesSuffix: "services",
  seeAllPillars: "See all 5 pillars",
};

export const whatWeDoPage = {
  heroEyebrow: "What we do",
  heroHeadlineLead: "Five pillars of",
  heroHeadlineAccent: "transformation.",
  heroIntro:
    "Together, these pillars help organizations move from understanding current realities to building solutions and teams that lead to meaningful growth.",
  metaTitle: "What we do — WOMD",
  metaDescription:
    "Five pillars of transformation: how WOMD helps organizations move from understanding current realities to building solutions and teams that lead to meaningful growth.",
};

// UI chrome — labels & banner copy. The banner is shown in the *target* language
// (i.e. on /id/ a banner that suggests EN reads in English, and vice versa).
export const ui = {
  htmlLang: "en",
  langToggleLabel: "Language",
  langCodeSelf: "EN",
  langCodeOther: "ID",
  langOtherFull: "Bahasa Indonesia",
  // Banner copy: shown to invite the visitor *to this language*.
  banner: {
    message: "This page is available in English.",
    cta: "Switch to English",
    dismiss: "Keep current",
  },
};

// Client logos — reused from the Katalis project (same client base)
export const clients = {
  kicker: "Trusted by",
  logos: [
    { src: "/clients/telkom.webp", name: "Telkom Indonesia" },
    { src: "/clients/telkomsel.webp", name: "Telkomsel" },
    { src: "/clients/bank-mandiri.webp", name: "Bank Mandiri" },
    { src: "/clients/bi.webp", name: "Bank Indonesia" },
    { src: "/clients/indosat.webp", name: "Indosat" },
    { src: "/clients/ahm.webp", name: "Astra Honda Motor" },
    { src: "/clients/roche.webp", name: "Roche" },
    { src: "/clients/binus.webp", name: "BINUS" },
  ],
};

export const team = {
  kicker: "Who's behind it",
  members: [
    {
      name: "Razi Thalib",
      role: "Founder | Principal Consultant",
      photo: "/team/razi-thalib.jpg",
      bio: "20+ years in digital. Former VP of Digital Product and Marketing at Zalora, Google Developers Launchpad Mentor, Founder of Setipe, and Co-Founder of RevoU.",
    },
    {
      name: "Ken Moore",
      role: "Co-Founder | Data & Education Lead",
      photo: "/team/ken-moore.jpg",
      bio: "20+ years experience in education, evaluation and data analytics. Education researcher and former management consultant. Co-Founder of AptoNow.",
    },
  ],
};

// Dot-nav anchors
export const homeNavItems = [
  { id: "hero", label: "Top" },
  { id: "who", label: "Who we are" },
  { id: "belief", label: "Core belief" },
  { id: "what-we-do", label: "What we do" },
  { id: "process", label: "How we work" },
  { id: "team", label: "Who's behind it" },
  { id: "different", label: "What makes us different" },
  { id: "audience", label: "Who we work with" },
  { id: "future", label: "The future" },
  { id: "contact", label: "Contact" },
];

export const whatWeDoNavItems = [
  { id: "hero", label: "Top" },
  { id: "pillar-01", label: "Digital Transformation" },
  { id: "pillar-02", label: "Brand" },
  { id: "pillar-03", label: "Innovation" },
  { id: "pillar-04", label: "Technology" },
  { id: "pillar-05", label: "People" },
  { id: "contact", label: "Contact" },
];

// Legacy alias — Nav.astro picks the right list per route.
export const navItems = homeNavItems;
