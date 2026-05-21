// ─── Site & contact ───────────────────────────────────────────────────────────

export const SITE = {
  name: "WebLynx",
  tagline: "A digital studio building the web for ambitious founders.",
  locations: {
    footer: "Houston, TX · GMT-6",
    studio: "Houston, TX",
    contact: "Houston, TX",
    contactNote: "Working remotely with clients across the USA · GMT-6",
  },
  email: "info@weblynx.us",
  whatsapp: {
    href: "https://wa.me/12033127541",
    display: "+1 (203) 312-7541",
  },
  linkedin: {
    href: "https://www.linkedin.com/company/weblynxus/",
    handle: "@weblynxus",
  },
} as const;

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: "Services", href: "/service" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
] as const;

export type ServiceMegaMenuLink = {
  label: string;
  href: string;
};

export type ServiceMegaMenuGroup = {
  label: string;
  href: string;
  items: readonly ServiceMegaMenuLink[];
};

export const SERVICES_MEGA_MENU_INTRO = {
  title: "Built to ship",
  description:
    "Future-ready web, mobile, AI, and brand work under one roof. Custom products for founders who need speed, clarity, and results that scale.",
  href: "/service",
} as const;

/** Desktop mega-menu columns (3 service columns + intro rendered separately). */
export const SERVICES_MEGA_MENU_COLUMNS: readonly (readonly ServiceMegaMenuGroup[])[] = [
  [
    {
      label: "Web Development",
      href: "/web-development",
      items: [
        { label: "E-commerce & web apps", href: "/ecommerce-website-development" },
        { label: "Web portals & dashboards", href: "/web-portal-development" },
      ],
    },
    {
      label: "App Development",
      href: "/app-development",
      items: [
        { label: "Android Apps Development", href: "/android-app-development" },
        { label: "iOS Apps Development", href: "/ios-app-development" },
        { label: "Cross-Platform Development", href: "/cross-platform-app-development" },
      ],
    },
  ],
  [
    {
      label: "AI Development",
      href: "/artificial-intelligence",
      items: [
        { label: "Generative AI", href: "/generative-ai" },
        { label: "Natural language processing", href: "/natural-language-processing" },
        { label: "AI agents development", href: "/ai-agent-development" },
      ],
    },
    {
      label: "Cloud Services",
      href: "/cloud-application-development",
      items: [
        { label: "Cloud consulting", href: "/cloud-consulting-services" },
        { label: "Cloud migration", href: "/cloud-consulting-services" },
        { label: "Support & maintenance", href: "/cloud-consulting-services" },
      ],
    },
  ],
  [
    {
      label: "Digital Marketing",
      href: "/digital-marketing",
      items: [
        { label: "Social media marketing", href: "/social-media-marketing" },
        { label: "Search engine marketing", href: "/search-engine-marketing" },
        { label: "Search engine optimization", href: "/search-engine-optimization" },
      ],
    },
    {
      label: "Design",
      href: "/design",
      items: [
        { label: "Brand identity", href: "/brand-identity-design" },
        { label: "UI / UX design", href: "/ui-ux-design" },
      ],
    },
  ],
] as const;

/** Flat list of main services (footer, legacy consumers). */
export const SERVICES_MEGA_MENU_GROUPS: readonly ServiceMegaMenuGroup[] =
  SERVICES_MEGA_MENU_COLUMNS.flat();

export const SERVICES_SUBMENU = SERVICES_MEGA_MENU_GROUPS.map(({ label, href }) => ({
  label,
  href,
}));

// ─── Social links (icons resolved in Footer) ──────────────────────────────────

export type SocialLink = {
  label: string;
  href: string;
  hoverClass?: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/weblynxus/",
    hoverClass: "hover:text-[#0A66C2]",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61582381187561",
    hoverClass: "hover:text-[#1877F2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/weblynx.us/",
    hoverClass: "hover:text-[#E4405F]",
  },
  {
    label: "Trustpilot",
    href: "https://www.trustpilot.com/review/weblynx.us",
    hoverClass: "hover:text-[#00B67A]",
  },
  {
    label: "Clutch",
    href: "https://clutch.co/profile/weblynx",
    hoverClass: "hover:text-[#FF3D2E]",
  },
  {
    label: "Bark",
    href: "https://www.bark.com/en/gb/company/weblynx/O7QZm/",
    hoverClass: "hover:text-[#00A86B]",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export const MARKETING_RESULTS_STATS = [
  { value: "+320%", label: "Organic traffic for Lumen Beauty (6 months)" },
  { value: "4.2×", label: "Return on ad spend for NorthBrand" },
  { value: "−47%", label: "Cost per lead for Acme SaaS" },
  { value: "12k", label: "New email subscribers for Stackline (Q1)" },
] as const;

// ─── Tech stacks ──────────────────────────────────────────────────────────────

export const TECH_STACKS = {
  webDevelopment: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Sanity CMS",
    "Vercel",
    "Framer Motion",
    "Shopify",
  ],
  appDevelopment: [
    "React Native",
    "Expo",
    "TypeScript",
    "Firebase",
    "Supabase",
    "Stripe / RevenueCat",
    "EAS Build",
    "Sentry",
  ],
  aiDevelopment: [
    "OpenAI GPT",
    "Anthropic Claude",
    "Gemini",
    "LangChain",
    "LlamaIndex",
    "Vercel AI SDK",
    "Pinecone",
    "Supabase pgvector",
    "Replicate",
    "Hugging Face",
    "LangSmith",
  ],
  design: [
    "Figma",
    "Framer",
    "After Effects",
    "Illustrator",
    "Photoshop",
    "Rive",
    "Notion",
    "Loom",
  ],
} as const;

// ─── Testimonials & trust ─────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    quote:
      "Weblynx delivered our MVP in six weeks exactly what we needed to close our seed round.",
    initials: "SC",
    avatarBg: "var(--surface-red)" as const,
    name: "Sara Chen",
    role: "Founder, Acme SaaS",
  },
  {
    quote: "Site speed went from 4 seconds to under one. Conversions doubled within a month.",
    initials: "MK",
    avatarBg: "var(--surface-blue)" as const,
    name: "Marcus King",
    role: "CEO, NorthBrand",
  },
] as const;

export const CLIENT_LOGOS = [
  { label: "ACME", className: "font-sans text-xl font-bold tracking-wider text-[var(--text)]" },
  { label: "NORTHBRAND", className: "font-sans text-xl font-bold tracking-wider text-[var(--text)]" },
  { label: "finlytics", className: "font-serif text-2xl italic text-[var(--text)]" },
  { label: "LUMEN", className: "font-sans text-xl font-bold tracking-wider text-[var(--text)]" },
  { label: "orbit/studio", className: "font-mono text-xl text-[var(--text)]" },
  { label: "STACKLINE", className: "font-sans text-xl font-bold tracking-wider text-[var(--text)]" },
] as const;

// ─── Contact FAQ ──────────────────────────────────────────────────────────────

export const CONTACT_FAQS = [
  {
    q: "What's your minimum project size?",
    a: "Most projects start at $1,500 but we'll talk if budget is flexible.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Most of our clients are in the US, EU, and UK. We bill in USD.",
  },
  {
    q: "How fast can you start?",
    a: "Usually within 1–2 weeks of sign-off. We book 1 quarter ahead.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes before any project details are shared. Just ask.",
  },
] as const;

// ─── Service pages: App development ───────────────────────────────────────────

export { HOME_PAGE, type HomeProcessHeading, type HomeServiceIconId } from "./home";
export {
  CASE_STUDIES_CASE_STUDIES,
  CASE_STUDIES_FEATURED,
  CASE_STUDIES_FILTERS,
  CASE_STUDIES_PAGE,
  CASE_STUDIES_STATS,
  PROJECT_SHOWCASES,
  caseStudyMatchesFilter,
  featuredMatchesFilter,
  getCaseStudyBySlug,
  type CaseStudiesFilterId,
  type CaseStudiesIndexHeading,
  type CaseStudyCard,
} from "./case-studies-page";
export { ABOUT_PAGE, ABOUT_STATS, type AboutHeading } from "./about-page";
export {
  BLOG_PAGE,
  BLOG_CATEGORIES,
  BLOG_FEATURED,
  BLOG_POSTS,
  getBlogPostBySlug,
  type BlogCategoryId,
  type BlogHeading,
  type BlogPost,
} from "./blog-page";
export { SERVICES_PAGE, type ServicesGridIconId, type ServicesWhyIconId } from "./services-page";
export { WEB_DEVELOPMENT_PAGE, type WebDevHeading, type WebDevIncludedIconId } from "./inner-seervices/web/web-development";
export { 
  ECOMMERCE_WEB_DEV_PAGE, 
  type EcommerceWebFeatureIconId, 
  type EcommerceWebHeading, 
  type EcommerceWebPlatformIconId, 
  type EcommerceWebRelatedIconId,
} from "./inner-seervices/web/services/ecommerce-website-development";
export { 
  WEB_PORTAL_DEV_PAGE, 
  type WebPortalDeliverableIconId, 
  type WebPortalHeading, 
  type WebPortalPortalTypeIconId, 
  type WebPortalRelatedIconId, type WebPortalRoleIconId,
} from "./inner-seervices/web/services/web-portal-development";
export { APP_DEVELOPMENT_PAGE, type AppDevHeading } from "./inner-seervices/app/app-development";
export { 
  ANDROID_APP_DEV_PAGE, 
  type AndroidAppDeliverableIconId, 
  type AndroidAppDevHeading, 
  type AndroidAppExploreIconId, 
  type AndroidAppPlatformIconId, 
} from "./inner-seervices/app/services/android-app-development";
export {
  IOS_APP_DEV_PAGE,
  type IosAppDeliverableIconId,
  type IosAppDevHeading,
  type IosAppExploreIconId,
  type IosAppPlatformIconId,
} from "./inner-seervices/app/services/ios-app-development";
export {
  CROSS_PLATFORM_APP_DEV_PAGE,
  type CrossPlatformAppDevHeading,
  type CrossPlatformComparisonTone,
  type CrossPlatformDeliverableIconId,
  type CrossPlatformFrameworkIconId,
  type CrossPlatformRelatedIconId,
} from "./inner-seervices/app/services/cross-platform-app-development";
export { AI_DEVELOPMENT_PAGE, type AiDevCapabilitiesIconId, type AiDevHeading, type AiDevIncludedIconId, } from "./inner-seervices/artificial-intelligence/ai-development";
export {
  GENERATIVE_AI_PAGE,
  type GenAiDeliverableIconId,
  type GenAiHeading,
  type GenAiModalityIconId,
  type GenAiRelatedIconId,
  type GenAiUseCaseIconId,
} from "./inner-seervices/artificial-intelligence/services/generative-ai";
export {
  NATURAL_LANGUAGE_PROCESSING_PAGE,
  type NlpCapabilityIconId,
  type NlpDeliverableIconId,
  type NlpHeading,
  type NlpIndustryIconId,
  type NlpRelatedIconId,
} from "./inner-seervices/artificial-intelligence/services/natural-language-processing";
export {
  AI_AGENT_DEVELOPMENT_PAGE,
  type AiAgentDeliverableIconId,
  type AiAgentHeading,
  type AiAgentRelatedIconId,
  type AiAgentSafetyIconId,
  type AiAgentTypeIconId,
} from "./inner-seervices/artificial-intelligence/services/ai-agent-development";
export { DIGITAL_MARKETING_PAGE, type DmChannelIconId, type DmHeading, type DmIncludedIconId, } from "./inner-seervices/digital-markiting/digital-marketing";
export { 
  SOCIAL_MEDIA_MARKETING_PAGE, 
  type SmmContentTypeIconId, 
  type SmmDeliverableIconId, 
  type SmmHeading, 
  type SmmPlatformIconId, 
  type SmmRelatedIconId, 
} from "./inner-seervices/digital-markiting/services/social-media-marketing";
export {
  SEARCH_ENGINE_MARKETING_PAGE,
  type SemCampaignTypeIconId,
  type SemDeliverableIconId,
  type SemHeading,
  type SemNetworkIconId,
  type SemRelatedIconId,
} from "./inner-seervices/digital-markiting/services/search-engine-marketing";
export {
  SEARCH_ENGINE_OPTIMIZATION_PAGE,
  type SeoDeliverableIconId,
  type SeoHeading,
  type SeoPillarIconId,
  type SeoRelatedIconId,
  type SeoSpecializationIconId,
} from "./inner-seervices/digital-markiting/services/search-engine-optimization";
export { DESIGN_PAGE, type DesignDeliverableIconId, type DesignDisciplineIconId, type DesignHeading } from "./inner-seervices/designing/design";
export {
  BRAND_IDENTITY_DESIGN_PAGE,
  type BrandIdentityDeliverableIconId,
  type BrandIdentityHeading,
  type BrandIdentityLayerIconId,
  type BrandIdentityRelatedIconId,
} from "./inner-seervices/designing/services/brand-identity-design";
export {
  UI_UX_DESIGN_PAGE,
  type UiUxDeliverableIconId,
  type UiUxPrincipleIconId,
  type UiUxRelatedIconId,
  type UiUxSurfaceIconId,
} from "./inner-seervices/designing/services/ui-ux-design";
export {
  CLOUD_APPLICATION_DEVELOPMENT_PAGE,
  type CloudAppArchitectureIconId,
  type CloudAppDeliverableIconId,
  type CloudAppPatternIconId,
  type CloudAppProviderIconId,
  type CloudAppRelatedIconId,
} from "./inner-seervices/cloud/cloud-application-development";
export {
  CLOUD_CONSULTING_SERVICES_PAGE,
  type CloudConsultingCapabilityIconId,
  type CloudConsultingComplianceIconId,
  type CloudConsultingDeliverableIconId,
  type CloudConsultingProviderIconId,
  type CloudConsultingRelatedIconId,
} from "./inner-seervices/cloud/cloud-consulting-services";
