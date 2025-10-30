import { ProgressChart } from "@/components/dashboard/progress-chart";
import HealthProfile from "@/components/dashboard/health-profile";
import { User } from "@/lib/types";

export default function GridMobile(props:User) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div className="md:col-span-2">
        <ProgressChart {...props} />
      </div>
      <div className="md:col-span-2  h-[300px] bg-purple-400">Nutritions</div>
      <div className="h-[300px] bg-yellow-400">Pas & Calories (Carousel)</div>
      <div>
        <HealthProfile {...props} />
      </div>
    </div>
  )
}
