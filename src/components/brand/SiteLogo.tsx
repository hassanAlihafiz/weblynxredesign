import Image from "next/image";

/** Shared logo sizing: header and footer stay in sync. */
export const SITE_LOGO_IMG_CLASS =
  "h-[5.25rem] w-auto max-w-[min(100%,500px)] object-contain sm:h-24 sm:max-w-[min(100%,580px)] md:h-[6.5rem] md:max-w-[min(100%,700px)] lg:h-28 lg:max-w-[min(100%,780px)] xl:h-32 xl:max-w-[min(100%,880px)]";

type SiteLogoProps = {  
  priority?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SiteLogo({ priority = false, align = "left", className = "" }: SiteLogoProps) {
  return (
    <Image
      src="/Logo.png"
      alt="Weblynx"
      width={560}
      height={154}
      sizes="(max-width: 768px) 200px, 280px"
      className={`${SITE_LOGO_IMG_CLASS} ${align === "center" ? "object-center" : "object-left"} ${className}`}
      priority={priority}
    />
  );
}
