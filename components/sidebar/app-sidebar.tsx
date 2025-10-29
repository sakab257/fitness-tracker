import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import LinksSidebar from "@/components/sidebar/links-sidebar"
import SupportMe from "@/components/sidebar/support-me"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import Image from "next/image"

export function AppSidebar() {
    return (
        <Sidebar variant="floating">
        <SidebarHeader>
            <div className="flex w-full items-center justify-center gap-2 h-[60px]">
                <Image src='/saniti.svg' alt="Logo" width={50} height={50} />
                {/* <h1 className="text-2xl font-medium">Sanetee</h1> */}
            </div>
            <SidebarSeparator className="mx-0" />
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <LinksSidebar />
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <SupportMe/>
            <SidebarSeparator className="mx-0 w-full" />
            <Button variant={'ghost'} className="text-destructive/80 hover:text-destructive">
                <LogOut />
                Se déconnecter
            </Button>
        </SidebarFooter>
        </Sidebar>
    )
}