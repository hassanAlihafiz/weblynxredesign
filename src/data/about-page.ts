/**
 * Copy and structured content for the About page (`/about`).
 */

export type AboutHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export const ABOUT_STATS = [
  { value: "2025", label: "Founded" },
  { value: "12+", label: "Projects shipped" },  
  { value: "4", label: "Countries served" },
  { value: "100%", label: "On-time delivery" },
] as const;

export const ABOUT_PAGE = {
  intro: {
    heading: {
      before: "A digital studio built around ",
      emphasis: "craft",
      after: ", speed, and clear thinking",
    } satisfies AboutHeading,
    description:
      "Weblynx is an independent studio working with founders and small teams to build the web and apps they actually need fast, modern, and made to scale.",
  },

  manifesto: {
    quote:
      "The best digital products aren't built by big teams or fancy stacks. They're built by people who care deeply about the details and who ship.",
  },

  story: {
    label: "Our story",
    title: "From a single project to a studio trusted by founders worldwide.",
    paragraphs: [
      "Weblynx started with a simple idea: most agencies move too slow, most freelancers can't deliver at scale, and founders are stuck choosing between them.",
      "So we built something in between a focused studio that ships fast without cutting corners, charges fairly, and treats every project like it's our own.",
      "Today we work with brands and startups across four countries, building everything from MVPs to full-scale platforms.",
    ] as const,
  },

  values: {
    heading: {
      before: "Four ",
      emphasis: "things",
      after: " we never compromise on",
    } satisfies AboutHeading,
    subtext: "These aren't marketing words. They're how every Weblynx project actually runs.",
    principles: [
      {
        n: "01",
        title: "Speed without shortcuts",
        body: "We ship in weeks, not quarters but never at the cost of quality or maintainability.",
      },
      {
        n: "02",
        title: "Honest communication",
        body: "No buzzwords, no ghosting. You'll always know exactly where your project stands.",
      },
      {
        n: "03",
        title: "Outcomes over output",
        body: "Pretty screens are easy. We care whether your business actually grows.",
      },
      {
        n: "04",
        title: "Partners, not vendors",
        body: "We turn down projects we can't fully commit to. The ones we take, we own.",
      },
    ] as const,
  },

  capabilities: {
    heading: {
      before: "Our ",
      emphasis: "core capabilities",
      after: "",
    } satisfies AboutHeading,
    subtext: "A focused range of services we've shipped enough times to do well.",
    items: [
      {
        title: "Web development",
        stack: "Next.js · React · TypeScript",
        description: "Marketing sites, web apps, dashboards.",
        cellClass: "border-b border-[var(--border-subtle)] p-6 md:border-r",
      },
      {
        title: "App development",
        stack: "React Native · Expo",
        description: "iOS and Android apps from MVP to scale.",
        cellClass: "border-b border-[var(--border-subtle)] p-6",
      },
      {
        title: "Digital marketing",
        stack: "SEO · Ads · Content",
        description: "Get found, get clicks, get customers.",
        cellClass: "border-b border-[var(--border-subtle)] p-6 md:border-b-0 md:border-r",
      },
      {
        title: "Design",
        stack: "Brand · UI/UX · Identity",
        description: "Brand systems, product UI, full identity.",
        cellClass: "p-6",
      },
    ] as const,
  },

  finalCta: {
    titleBefore: "Like the way we ",
    titleEmphasis: "think",
    titleAfter: "?",
    description: "Let's build something together.",
    ctaLabel: "Start a project",
    ctaHref: "/contact",
  },
} as const;
