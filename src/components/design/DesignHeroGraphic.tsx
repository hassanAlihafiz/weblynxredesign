import { HomeHeroChainGraphic } from "@/components/home/HomeHeroChainGraphic";

export function DesignHeroGraphic() {
  return (
    <div
      className="relative flex h-[220px] items-center justify-center sm:h-[250px] md:h-[280px] lg:h-[300px]"
      aria-hidden
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[min(260px,88vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,57,70,0.35)_0%,transparent_70%)] sm:size-[280px] md:size-[300px]"
      />
      <HomeHeroChainGraphic />
    </div>
  );
}
