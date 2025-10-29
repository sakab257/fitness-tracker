import { navigationData } from "@/lib/navigation-data"
import Link from "next/link"

export default function LinksSidebar() {
    return (
        <div className="flex flex-col gap-2 p-1">
            {navigationData.map((link) => (
                <Link href={link.href} key={link.label} className="flex p-2 rounded-lg gap-2 items-center text-xs hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer">
                    <link.icon size={20} className="ml-2"/>
                    {link.label}
                </Link>
            ))}
        </div>
    )
}
