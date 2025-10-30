import BentoGridDesktop from "@/components/dashboard/bento-grid-desktop";
import GridMobile from "@/components/dashboard/grid-mobile";
import { currentUser } from "@/lib/fake-data";

export default function Home() {
  const user = currentUser
  return (
    <div className="w-full h-full overflow-auto xl:overflow-hidden">
        <div className="w-full flex flex-col xl:flex-row justify-between items-center px-5 pb-2 xl:pb-1">
          <h1 className="flex justify-center xl:justify-start text-2xl transition-all">Bienvenue, {user.name}<span className="uppercase ml-2">{user.surname}</span></h1>
          <p className="text-center text-xs text-muted-foreground">Suivez vos entraînements, calories, nutrition et activité globale dans une application tout-en-en.</p>
        </div>
        <div className="hidden xl:flex h-full">
          <BentoGridDesktop {...user}/>
        </div>
        <div className="xl:hidden px-2 pb-2 xl:pb-0">
          <GridMobile {...user} />
        </div>
      </div>
  );
}
