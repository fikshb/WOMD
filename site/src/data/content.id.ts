// WOMD — Indonesian (Bahasa Indonesia) content.
// Mirrors src/data/content.ts shape. Draft translation — refine via `copywriter` skill.
// Brand voice: percaya diri, strategis, anti-jargon korporat. Pertahankan istilah teknis
// yang sudah baku (AI, brand, dashboard, playbook, LMS) bila padanan Indonesianya kaku.

import type { Pillar, Product } from "./content";

export const hero = {
  eyebrow: "Konsultan Transformasi Strategis",
  tagline: "Weapons of Mass Discussion",
  subheadPre: "Kami membantu organisasi mengubah gagasan menjadi percakapan publik yang",
  subheadAccent: "mustahil diabaikan.",
};

export const stats = {
  kicker: "Rekam jejak",
  items: [
    { value: "20+", label: "Tahun di dunia digital" },
    { value: "120+", label: "Proyek tertangani" },
    { value: "60+", label: "Brand & organisasi" },
  ],
};

export const whoWeAre = {
  kicker: "Siapa kami",
  headlineLead: "Konsultan yang dibangun untuk",
  headlineAccent: "era AI & digital.",
  paragraphs: [
    "WOMD bukan agensi yang sekadar memproduksi konten, mengelola kampanye, atau menyajikan output yang berdiri sendiri-sendiri. Kami membantu organisasi membangun kejelasan, menyusun sistem, membentuk narasi, mengembangkan kapabilitas siap masa depan, dan mengubah gagasan menjadi percakapan yang berarti.",
    "Pekerjaan kami berada di persimpangan strategi, komunikasi, riset, inovasi, teknologi, AI, kepemimpinan, pembelajaran, dan perilaku manusia. Sebab di dunia yang berubah cepat, organisasi tidak cukup hanya terlihat. Mereka perlu dipahami, dipercaya, diingat, dan dibicarakan.",
  ],
};

export const belief = {
  kicker: "Keyakinan inti kami",
  headline: "Gagasan tidak menggerakkan orang hanya karena ia ada.",
  beats: [
    { label: "Jelas", text: "Gagasan menggerakkan orang hanya saat ia jelas.", icon: "/icons/belief-clear.svg" },
    { label: "Relevan", text: "Gagasan menyebar hanya saat ia relevan.", icon: "/icons/belief-relevant.svg" },
    { label: "Kuat", text: "Gagasan menjadi kuat saat masuk ke percakapan publik.", icon: "/icons/belief-powerful.svg" },
    { label: "Berdampak", text: "Gagasan menciptakan dampak saat diubah menjadi sistem, cerita, dan tindakan.", icon: "/icons/belief-impactful.svg" },
  ],
};

export const pillars: Pillar[] = [
  {
    num: "01",
    icon: "/icons/pillar-01.svg",
    title: "Transformasi Digital & Kepemimpinan",
    intro:
      "Kategori ini fokus membantu organisasi menyusun arah transformasi digital, strategi komunikasi modern, dan kesiapan kepemimpinan untuk era AI dan digital.",
    products: [
      {
        name: "Digital Transformation Playbook",
        bullets: [
          "Asesmen bisnis & kanal",
          "Pemetaan peluang digital",
          "Transformasi workflow",
          "Rekomendasi teknologi",
          "Roadmap implementasi 12 bulan",
        ],
      },
      {
        name: "Social Media Growth Strategy Playbook",
        bullets: [
          "Framework pilar konten",
          "Pemetaan audiens & platform",
          "Framework pesan",
          "Arah konten 3 bulan",
          "Tracking KPI & pertumbuhan",
        ],
      },
      {
        name: "Digital Leadership Playbook",
        bullets: [
          "Framework kepemimpinan AI & digital",
          "Insight masa depan pekerjaan",
          "Framework produktivitas tim",
          "Pedoman pengambilan keputusan",
          "Roadmap adaptasi kepemimpinan",
        ],
      },
    ],
  },
  {
    num: "02",
    icon: "/icons/pillar-02.svg",
    title: "Strategi Brand & Sistem Visual",
    intro:
      "Kategori ini fokus membantu organisasi membangun fondasi brand yang kuat, konsisten, dan dapat diskalakan di semua titik komunikasi.",
    products: [
      {
        name: "Brand Blueprint",
        bullets: [
          "Positioning brand",
          "Value proposition",
          "Brand personality",
          "Hierarki pesan",
          "Arah komunikasi",
        ],
      },
      {
        name: "Brand Kit & Visual System",
        bullets: [
          "Pedoman penggunaan logo",
          "Sistem tipografi & warna",
          "Template media sosial",
          "Template presentasi",
          "Template materi pemasaran",
          "Arah visual website",
        ],
      },
    ],
  },
  {
    num: "03",
    icon: "/icons/pillar-03.svg",
    title: "Inovasi Bisnis & Produk",
    intro:
      "Kategori ini fokus membantu organisasi mengambil keputusan bisnis, produk, dan komunikasi yang lebih tajam, didukung riset pasar, validasi, dan data.",
    products: [
      {
        name: "Market Research Report",
        bullets: [
          "Gambaran pasar & industri",
          "Analisis lanskap kompetitor",
          "Insight audiens & perilaku konsumen",
          "Pemetaan tren & peluang",
          "SWOT & positioning strategis",
          "Temuan kunci & rekomendasi",
        ],
      },
      {
        name: "Product-Market Fit Assessment",
        bullets: [
          "Evaluasi product-market fit",
          "Analisis masalah & kebutuhan pelanggan",
          "Asesmen value proposition",
          "Pemetaan relevansi audiens",
          "Validasi permintaan pasar",
          "Identifikasi hambatan pertumbuhan",
          "Laporan rekomendasi strategis",
        ],
      },
      {
        name: "Data Analytics Dashboard Blueprint",
        bullets: [
          "Pemetaan KPI & metrik",
          "Struktur pelaporan",
          "Wireframe & alur dashboard",
          "Identifikasi sumber data",
          "Pemetaan role & akses pengguna",
          "Rekomendasi workflow analitik",
        ],
      },
    ],
  },
  {
    num: "04",
    icon: "/icons/pillar-04.svg",
    title: "Teknologi & Produk Digital",
    intro:
      "Kategori ini fokus membantu organisasi membangun sistem, platform, dan tools digital yang mendukung pembelajaran modern, komunikasi, produktivitas, dan operasional.",
    products: [
      {
        name: "LMS & Learning Platform Development",
        bullets: [
          "Strategi & struktur LMS",
          "User flow & learning journey",
          "Sistem dashboard & asesmen",
          "Sistem sertifikasi",
          "Setup struktur konten",
          "Deployment & onboarding",
        ],
      },
      {
        name: "AI Agent & Automation System",
        bullets: [
          "Strategi AI agent",
          "Desain alur percakapan",
          "Setup persona & tone",
          "Struktur knowledge base",
          "Pemetaan otomasi workflow",
          "Panduan kebutuhan teknis",
        ],
      },
      {
        name: "Website & Digital Presence Development",
        bullets: [
          "Strategi & struktur website",
          "Sitemap & wireframe",
          "Arah UI",
          "Arah copywriting",
          "Pengembangan & deployment",
          "Setup SEO dasar",
        ],
      },
    ],
  },
  {
    num: "05",
    icon: "/icons/pillar-05.svg",
    title: "Pengembangan Manusia & Organisasi",
    intro:
      "Kategori ini fokus membantu organisasi membangun sistem talenta, pengembangan kapabilitas, dan kesiapan tenaga kerja yang lebih kuat untuk masa depan pekerjaan.",
    products: [
      {
        name: "Organizational & Talent Assessment",
        bullets: [
          "Asesmen organisasi",
          "Analisis gap kapabilitas",
          "Evaluasi tim & peran",
          "Insight kesiapan kepemimpinan",
          "Rekomendasi strategis",
        ],
      },
      {
        name: "Transformation Training Roadmap",
        bullets: [
          "Roadmap pembelajaran",
          "Matriks pelatihan",
          "Framework pengembangan kompetensi",
          "Pembelajaran berbasis peran",
          "Timeline pertumbuhan kapabilitas",
        ],
      },
      {
        name: "Strategic Hiring & Talent Development",
        bullets: [
          "Framework hiring",
          "Persona talenta",
          "Framework interview & asesmen",
          "Sistem evaluasi kandidat",
          "Rekomendasi pengembangan talenta",
        ],
      },
    ],
  },
];

export const process = {
  kicker: "Cara kami bekerja",
  headline: "Kami mulai dari kejelasan.",
  headlineLead: "Kami mulai dari",
  headlineAccent: "kejelasan.",
  steps: [
    { n: "1", icon: "/icons/step-diagnose.svg", title: "Diagnosa", text: "Kami memahami kondisi organisasi saat ini, tantangan, tujuan, konteks pasar, dan peluang yang ada." },
    { n: "2", icon: "/icons/step-define.svg", title: "Definisi", text: "Kami mendefinisikan arah strategis, prioritas, sistem, peluang produk, atau kapabilitas yang perlu dibangun." },
    { n: "3", icon: "/icons/step-design.svg", title: "Rancangan", text: "Kami merancang blueprint, playbook, framework, sistem, roadmap, atau struktur produk yang dibutuhkan untuk melangkah maju." },
    { n: "4", icon: "/icons/step-develop.svg", title: "Pengembangan", text: "Kami membantu mengembangkan aset, tools, platform, dashboard, sistem brand, atau struktur kapabilitas yang dibutuhkan." },
    { n: "5", icon: "/icons/step-enable.svg", title: "Aktivasi", text: "Kami mendampingi organisasi dengan panduan implementasi, alignment, dan transfer kapabilitas." },
  ],
};

export const differentiators = {
  kicker: "Apa yang membuat kami berbeda",
  headline: "Kami tidak mulai dari “apa yang harus kami buat?” Kami mulai dari “apa yang perlu berubah?”",
  items: [
    { title: "Strategis Sebelum Taktis", text: "Kami mulai dari arah, bukan deliverable." },
    { title: "Terhubung, Bukan Tersekat", text: "Kami menyambungkan strategi, riset, komunikasi, teknologi, dan manusia — karena transformasi membutuhkan semuanya." },
    { title: "Sistem, Bukan Output", text: "Kami membangun sistem yang berulang dan kapabilitas jangka panjang, bukan deliverable sekali pakai." },
    { title: "Berbasis AI, Berpusat pada Manusia", text: "AI harus memperkuat kejelasan, produktivitas, pembelajaran, kreativitas, dan pengambilan keputusan manusia." },
  ],
};

export const audience = {
  kicker: "Dengan siapa kami bekerja",
  headline: "Organisasi yang siap membangun masa depan.",
  items: [
    "Perusahaan memasuki transformasi digital",
    "Organisasi yang mengadopsi AI",
    "Brand yang butuh positioning lebih jelas",
    "Tim produk yang memvalidasi peluang pasar",
    "Pemimpin yang membangun tim siap masa depan",
    "Institusi yang mengembangkan sistem pembelajaran",
    "Founder yang butuh kejelasan strategis",
    "Organisasi yang bersiap untuk scale",
  ],
};

export const closing = {
  statementLead: "Masa depan adalah milik organisasi yang tahu cara",
  statementAccent: "berpikir, berkomunikasi, dan bertransformasi.",
  statementBody:
    "Jika organisasi Anda sedang bersiap untuk transformasi, memvalidasi peluang baru, mengadopsi AI, memperkuat brand, atau membangun tim siap masa depan. Kami siap membantu.",
  kicker: "Mari membangun bersama",
  descriptor: "Konsultan Transformasi Strategis untuk Era AI",
  kicker2: "Buat gagasan Anda mustahil diabaikan.",
  futureEyebrow: "Masa depan",
  contactHeadlineLead: "Buat gagasan Anda menjadi percakapan publik yang",
  contactHeadlineAccent: "mustahil diabaikan.",
  contact: {
    email: "hello@wmdiscussion.com",
    phone: "+62 811 1000 2000",
  },
};

export const clients = {
  kicker: "Dipercaya oleh",
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
  kicker: "Siapa di baliknya",
  members: [
    {
      name: "Razi Thalib",
      role: "Transformation Lead",
      photo: "/team/razi-thalib.jpg",
      bio: "20+ tahun di dunia digital. Mantan VP Digital Product di Zalora, Google Developers Launchpad Mentor, dan Co-Founder RevoU.",
    },
  ],
};

export const homeNavItems = [
  { id: "hero", label: "Atas" },
  { id: "who", label: "Siapa kami" },
  { id: "belief", label: "Keyakinan inti" },
  { id: "what-we-do", label: "Apa yang kami kerjakan" },
  { id: "process", label: "Cara kami bekerja" },
  { id: "team", label: "Siapa di baliknya" },
  { id: "different", label: "Apa yang membedakan" },
  { id: "audience", label: "Dengan siapa kami bekerja" },
  { id: "future", label: "Masa depan" },
  { id: "contact", label: "Kontak" },
];

export const whatWeDoNavItems = [
  { id: "hero", label: "Atas" },
  { id: "pillar-01", label: "Transformasi Digital" },
  { id: "pillar-02", label: "Brand" },
  { id: "pillar-03", label: "Inovasi" },
  { id: "pillar-04", label: "Teknologi" },
  { id: "pillar-05", label: "Manusia" },
  { id: "contact", label: "Kontak" },
];

export const navItems = homeNavItems;

export const homePage = {
  whatWeDoKicker: "Apa yang kami kerjakan",
  whatWeDoTitle: "Lima pilar transformasi.",
  whatWeDoIntro:
    "Bersama-sama, lima pilar ini membantu organisasi bergerak dari gagasan menuju kejelasan, dari kejelasan menuju sistem, dan dari sistem menuju pertumbuhan yang berarti.",
  servicesSuffix: "layanan",
  seeAllPillars: "Lihat semua 5 pilar",
};

export const whatWeDoPage = {
  heroEyebrow: "Apa yang kami kerjakan",
  heroHeadlineLead: "Lima pilar",
  heroHeadlineAccent: "transformasi.",
  heroIntro:
    "Bersama-sama, lima pilar ini membantu organisasi bergerak dari gagasan menuju kejelasan, dari kejelasan menuju sistem, dan dari sistem menuju pertumbuhan yang berarti.",
  metaTitle: "Apa yang kami kerjakan — WOMD",
  metaDescription:
    "Lima pilar transformasi: bagaimana WOMD membantu organisasi bergerak dari gagasan menuju kejelasan, dari kejelasan menuju sistem, dan dari sistem menuju pertumbuhan yang berarti.",
};

export const ui = {
  htmlLang: "id",
  langToggleLabel: "Bahasa",
  langCodeSelf: "ID",
  langCodeOther: "EN",
  langOtherFull: "English",
  banner: {
    message: "Halaman ini tersedia dalam Bahasa Indonesia.",
    cta: "Beralih ke Bahasa Indonesia",
    dismiss: "Tetap di sini",
  },
};
