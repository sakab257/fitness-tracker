import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"


const SupportMe = () => {
  return (
    <Card
        className="bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/support-background.jpg')" }}
    >
        <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
        <CardHeader className="relative z-10">
            <CardTitle className="text-primary-foreground">Me Soutenir</CardTitle>
            <CardDescription className="text-primary-foreground/90">
                Vous souhaitez me soutenir ?
            </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10 text-primary-foreground text-sm">
            Votre soutien m'aide à continuer à développer et améliorer cette application.
        </CardContent>
        <CardFooter className="relative z-10">
            <Button
                asChild
                variant="outline"
                className="w-full gap-2"
            >
                <Link href="" target="_blank" rel="noopener noreferrer">
                    Soutenir le projet
                    <ArrowUpRight className="size-4" />
                </Link>
            </Button>
        </CardFooter>
    </Card>
  )
}

export default SupportMe