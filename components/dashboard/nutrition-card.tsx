import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Flame, Beef, Droplets, Wheat, Clock9, ChartNoAxesColumnIncreasing, Plus} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

const NutritionCard = () => {
    return (
        <Card className="w-full h-full">
            <CardContent className="w-full h-full flex items-center">
                <Image src={'/asset/food.jpg'} alt="FoodImagePlaceholder" width={150} height={150} className="rounded-xl h-full"/>
                <div className="flex-1 flex flex-col w-full h-full justify-between px-4 gap-2">
                    <div className="flex justify-between">
                        <Badge className="rounded-sm">Diner</Badge>
                        <div className="flex gap-2">
                            <Badge className="bg-muted-foreground/20 text-foreground rounded-sm"><ChartNoAxesColumnIncreasing />Facile</Badge>
                            <Badge className="bg-muted-foreground/20 text-foreground rounded-sm"><Clock9 />30 minutes</Badge>
                        </div>
                    </div>
                    <div className="w-full flex-1 flex flex-col justify-center">
                        <h2 className="text-2xl">Buddha Bowl</h2>
                        <p className="text-xs text-muted-foreground">Bol de tofu avec légumes frais, maïs, œufs et edamame.</p>
                    </div>
                    <div className="w-full flex">
                        <div className="text-muted-foreground flex flex-col flex-1">
                            <div className="flex items-center gap-2">
                                <h2>Score :</h2>
                                <p><span className="text-foreground text-lg">85</span>/100</p>
                            </div>
                            <Progress value={85} className="w-2/3"/>
                        </div>
                        <div>
                            <Button> <Plus />Ajouter</Button>
                        </div>
                    </div>
                </div>
                <div className="bg-muted-foreground/20 text-xs h-full w-fit px-4 py-2 flex flex-col justify-evenly rounded-lg">
                    <div className="flex gap-2">
                        <Flame className="size-4" />
                        450 kCal
                    </div>
                    <div className="flex gap-2">
                        <Wheat className="size-4" />
                        40g glucides
                    </div>
                    <div className="flex gap-2">
                        <Beef className="size-4" />
                        35g protéines
                    </div>
                    <div className="flex gap-2">
                        <Droplets className="size-4" />
                        15g gras
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default NutritionCard