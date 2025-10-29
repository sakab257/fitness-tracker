import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"

import { HeartPlus, Medal, Coins } from "lucide-react"

import { currentUser } from "@/lib/fake-data"

const HealthDataComponent = () => {
    return (
        <div className="w-full grid grid-cols-3 gap-4 bg-primary/20 py-3 rounded-xl">
            <div className="flex flex-col items-center">
                <span className="capitalize text-xl">Taille</span>
                <span className="text-muted-foreground">{currentUser.height}</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="capitalize text-xl">poids</span>
                <span className="text-muted-foreground">{currentUser.weight}</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="capitalize text-xl">âge</span>
                <span className="text-muted-foreground">{currentUser.age}</span>
            </div>
        </div>
    )
}

const HealthProfile = () => {
    return (
        <Card className="h-full w-full bg-linear-to-br from-primary to-background">
            <CardHeader>
                <CardTitle className="flex font-medium w-full items-center justify-between text-2xl">
                    Mon Profil
                    <Button variant={'ghost'} className="py-6"><HeartPlus className="size-6"/></Button>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center gap-4">
                <Avatar className="w-20 h-20 rounded-lg">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                    <AvatarFallback className="rounded-lg">{currentUser.surname.charAt(0)}{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="">
                    <div className="text-4xl flex gap-2 justify-center">
                        <span>{currentUser.name}</span>
                        <span className="uppercase">{currentUser.surname}</span>
                    </div>
                    <div className="flex gap-4 text-lg justify-center">
                        <span className="flex items-center gap-2">
                            <Medal className="size-6 text-muted-foreground"/>
                            <span className="text-muted-foreground">{currentUser.streak}</span>
                        </span>
                        <span className="flex items-center gap-2">
                            <Coins className="size-6 text-muted-foreground"/>
                            <span className="text-muted-foreground">{currentUser.nbTokens}</span>
                        </span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="w-full p-2 px-4">
                <HealthDataComponent />
            </CardFooter>
        </Card>
    )
}

export default HealthProfile