import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Clock9, ChartNoAxesColumnIncreasing, Plus} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { currentFood } from "@/lib/fake-data"
import clsx from "clsx"

const NutritionCard = () => {
    return (
        <Card className="w-full h-full">
            <CardContent className="w-full h-full flex items-center">
                <Image src={currentFood.imageUrl} alt="FoodImagePlaceholder" width={150} height={150} className="rounded-xl h-full"/>
                <div className="flex-1 flex flex-col w-full h-full justify-between px-4 gap-2">
                    <div className="flex justify-between">
                        <Badge className="rounded-sm">{currentFood.type}</Badge>
                        <div className="flex gap-2">
                            <Badge className="bg-muted-foreground/20 text-foreground rounded-sm"><ChartNoAxesColumnIncreasing />{currentFood.difficulty}</Badge>
                            <Badge className="bg-muted-foreground/20 text-foreground rounded-sm"><Clock9 />{currentFood.time}</Badge>
                        </div>
                    </div>
                    <div className="w-full flex-1 flex flex-col justify-center">
                        <h2 className="text-2xl">{currentFood.name}</h2>
                        <p className="text-xs text-muted-foreground">{currentFood.description}</p>
                    </div>
                    <div className="w-full flex">
                        <div className="text-muted-foreground flex flex-col flex-1">
                            <div className="flex items-center gap-2">
                                <h2>Score :</h2>
                                <p><span className={clsx(
                                    "text-lg",
                                    {
                                    "text-destructive": currentFood.score < 30,
                                    "text-warning": currentFood.score >= 30 && currentFood.score < 70,
                                    "text-validate": currentFood.score >= 70
                                    }
                                    )}>{currentFood.score}</span>/100</p>
                            </div>
                            <Progress value={currentFood.score} className="w-2/3"/>
                        </div>
                        <div>
                            <Button> <Plus />Ajouter</Button>
                        </div>
                    </div>
                </div>
                <div className="bg-muted-foreground/20 text-xs h-full w-fit px-4 py-2 flex flex-col justify-evenly rounded-lg">
                    {currentFood.nutriments.map((nutriment)=> (
                        <div key={nutriment.type} className="flex gap-2">
                            <nutriment.icon className="size-4" />
                            {nutriment.data} {nutriment.type}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default NutritionCard