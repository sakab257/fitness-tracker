import {SidebarTrigger} from "@/components/ui/sidebar"
import { DatePicker } from "@/components/header/date-picker"
import { ToggleTheme } from "@/components/theme/theme-toggle"
import { montserrat } from "@/lib/font"
import Notifications from "@/components/header/notifications"


const Header = () => {
    return (
        <div className="w-full h-[75px] flex items-center justify-between pt-1.5">
            <div className="flex items-center gap-4 pl-4">
                <SidebarTrigger className="w-12 h-12" variant={'outline'}/>
                {/* <div className="hidden md:block">
                    <h1 className={`${montserrat.className} md:text-2xl lg:text-3xl`}>Bienvenue, Salim BOUSKINE !</h1>
                    <p className={`${montserrat.className} text-[10px] text-muted-foreground hidden lg:inline-block`}>Suivez vos entraînements, votre nutrition, vos calories et votre activité globale dans une application tout-en-un.</p>
                </div> */}
                <div className="">
                    <h1 className={`${montserrat.className} text-xl`}>Sanetee</h1>
                </div>
            </div>
            <div className="flex items-center px-4 gap-4">
                <DatePicker />
                <Notifications />
                <ToggleTheme />
            </div>
        </div>
    )
}

export default Header