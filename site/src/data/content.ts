// WOMD company-profile content.
// Copy sourced from the reference artifact (content only); structure maps to
// brand/WOMD Product Catalog.md, regrouped into 5 pillars. Refine via `copywriter`.

export const hero = {
  eyebrow: "Strategic Transformation Consultancy",
  tagline: "Weapons of Mass Discussion",
  subheadPre: "We help organizations turn ideas into public conversations",
  subheadAccent: "impossible to ignore.",
};

export const stats = {
  kicker: "Track record",
  // TODO: replace with REAL numbers before launch (placeholders)
  items: [
    { value: "20+", label: "Years in digital" },
    { value: "120+", label: "Projects delivered" },
    { value: "60+", label: "Brands & organizations" },
  ],
};

export const whoWeAre = {
  kicker: "Who we are",
  headlineLead: "A consultancy built for the",
  headlineAccent: "AI & digital era.",
  paragraphs: [
    "WOMD is not an agency that simply produces content, manages campaigns, or delivers isolated outputs. We help organizations create clarity, build systems, shape narratives, develop future-ready capabilities, and transform ideas into conversations that matter.",
    "Our work sits at the intersection of strategy, communication, research, innovation, technology, AI, leadership, learning, and human behavior. Because in a rapidly changing world, organizations don't only need to be seen. They need to be understood, trusted, remembered, and talked about.",
  ],
};

export const belief = {
  kicker: "Our core belief",
  headline: "Ideas don't move people just because they exist.",
  beats: [
    { label: "Clear", text: "They move people only when they're clear.", icon: "/icons/belief-clear.svg" },
    { label: "Relevant", text: "They spread only when they're relevant.", icon: "/icons/belief-relevant.svg" },
    { label: "Powerful", text: "They turn powerful when they enter public conversation.", icon: "/icons/belief-powerful.svg" },
    { label: "Impactful", text: "They create impact when you turn them into systems, stories, and action.", icon: "/icons/belief-impactful.svg" },
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
    title: "Innovation & Business Intelligence",
    intro:
      "This category focuses on helping organizations make sharper business, product, and communication decisions backed by market research, validation, and data.",
    products: [
      {
        name: "Market Research Report",
        bullets: [
          "Market & industry overview",
          "Competitor landscape analysis",
          "Consumer behavior insights",
          "Trend & opportunity mapping",
          "SWOT & strategic recommendations",
        ],
      },
      {
        name: "Product-Market Fit Assessment",
        bullets: [
          "Product-market fit evaluation",
          "Customer needs analysis",
          "Value proposition assessment",
          "Market demand validation",
          "Growth barrier identification",
        ],
      },
      {
        name: "Data Analytics Dashboard Blueprint",
        bullets: [
          "KPI & metrics mapping",
          "Reporting structure",
          "Dashboard wireframe & flow",
          "Data source identification",
          "Analytics workflow recommendation",
        ],
      },
    ],
  },
  {
    num: "03",
    icon: "/icons/pillar-03.svg",
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
        ],
      },
      {
        name: "Website & Digital Presence Development",
        bullets: [
          "Website strategy & structure",
          "Sitemap & wireframe",
          "UI & copywriting direction",
          "Development & deployment",
          "Basic SEO setup",
        ],
      },
    ],
  },
  {
    num: "04",
    icon: "/icons/pillar-04.svg",
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
  steps: [
    { n: "1", icon: "/icons/step-diagnose.svg", title: "Diagnose", text: "We understand the organization's current condition, challenges, goals, market context, and opportunities." },
    { n: "2", icon: "/icons/step-define.svg", title: "Define", text: "We define the strategic direction, priorities, system, product opportunity, or capability that needs to be built." },
    { n: "3", icon: "/icons/step-design.svg", title: "Design", text: "We design the blueprint, playbook, framework, system, roadmap, or product structure needed to move forward." },
    { n: "4", icon: "/icons/step-develop.svg", title: "Develop", text: "We help develop the required assets, tools, platforms, dashboards, brand systems, or capability structures." },
    { n: "5", icon: "/icons/step-enable.svg", title: "Enable", text: "We support the organization with implementation guidance, alignment, and capability transfer." },
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
    "Companies entering digital transformation",
    "Organizations adopting AI",
    "Brands needing clearer positioning",
    "Product teams validating market opportunities",
    "Leaders building future-ready teams",
    "Institutions developing learning systems",
    "Founders needing strategic clarity",
    "Organizations preparing for scale",
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
  // TODO: replace dummy values with real ones before launch
  contact: {
    email: "hello@womd.id",
    website: "womd.id",
    phone: "+62 811 1000 2000",
    address: "Jakarta, Indonesia",
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
    { src: "/clients/toyota.webp", name: "Toyota" },
    { src: "/clients/daihatsu.webp", name: "Daihatsu" },
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
      role: "Transformation Lead",
      photo: "/team/razi-thalib.jpg",
      bio: "20+ years in digital. Former VP Digital Product at Zalora, Google Developers Launchpad Mentor, and Co-Founder of RevoU.",
    },
  ],
};

// Dot-nav anchors
export const navItems = [
  { id: "hero", label: "Top" },
  { id: "who", label: "Who we are" },
  { id: "belief", label: "Core belief" },
  { id: "what-we-do", label: "What we do" },
  { id: "pillar-01", label: "Digital Transformation" },
  { id: "pillar-02", label: "Innovation" },
  { id: "pillar-03", label: "Technology" },
  { id: "pillar-04", label: "Brand" },
  { id: "pillar-05", label: "People" },
  { id: "process", label: "How we work" },
  { id: "team", label: "Who's behind it" },
  { id: "different", label: "What makes us different" },
  { id: "audience", label: "Who we work with" },
  { id: "future", label: "The future" },
  { id: "contact", label: "Contact" },
];
