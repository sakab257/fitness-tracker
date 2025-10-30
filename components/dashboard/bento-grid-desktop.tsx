import { ProgressChart } from "@/components/dashboard/progress-chart";
import HealthProfile from "./health-profile";
import {User} from "@/lib/types"
import NutritionCard from "@/components/dashboard/nutrition-card";


export default function BentoGridDesktop(props:User) {
  return (
    <div className="grid grid-cols-5 auto-rows-fr gap-4 w-full h-[calc(100vh-8rem)] px-4 pt-0 mt-0">
      <div className="row-span-6">
        <ProgressChart {...props} />
      </div>
      <div className="col-span-2 row-span-4 col-start-2 row-start-3 bg-yellow-400 flex items-center justify-center">Pas & Calories (Carousel)</div>
      <div className="col-span-4 row-span-2 col-start-2 row-start-1 flex items-center justify-center">
        <NutritionCard />
      </div>
      <div className="col-span-2 row-span-4 col-start-4 row-start-3">
        <HealthProfile {...props} />
      </div>
      {/* <div className="col-span-4 row-span-1 col-start-2 row-start-7 bg-green-400">5</div> */}
    </div>
  )
}
