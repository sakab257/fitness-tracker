import {SidebarTrigger} from "@/components/ui/sidebar"
import { DatePicker } from "@/components/header/date-picker"
import { ToggleTheme } from "@/components/theme/theme-toggle"
import Notifications from "@/components/header/notifications"


const Header = () => {
    return (
        <div className="w-full h-[75px] flex items-center justify-between pt-1.5">
            <div className="flex items-center pl-4">
                <SidebarTrigger className="w-12 h-12" variant={'outline'}/>
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