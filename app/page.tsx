import BentoGridDesktop from "@/components/dashboard/bento-grid-desktop";
import GridMobile from "@/components/dashboard/grid-mobile";

export default function Home() {
  return (
    <div className="w-full h-full px-4 pb-4 overflow-auto xl:overflow-hidden">
        <div className="hidden xl:block h-full">
          <BentoGridDesktop />
        </div>
        <div className="xl:hidden">
          <GridMobile />
        </div>
      </div>
  );
}
