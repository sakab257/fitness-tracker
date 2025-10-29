"use client"

import { RadialBar, RadialBarChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
} from "@/components/ui/chart"

import { progressChartConfig, progressChartData } from "@/lib/fake-data"

import { Progress } from "@/components/ui/progress"

export function ProgressChart() {
    const currentMonth = new Date().toLocaleDateString('fr-FR', { 
        month: 'long', 
        year: 'numeric' 
    }).replace(/^\w/, (c) => c.toUpperCase());

    return (
        <Card className="flex flex-col w-full h-full">
        <CardHeader className="items-center pb-0">
            <CardTitle className="text-xl font-medium mx-auto">Progression</CardTitle>
            <CardDescription>{currentMonth}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
            <ChartContainer
            config={progressChartConfig}
            className="mx-auto aspect-square max-h-[250px]"
            >
            <RadialBarChart data={progressChartData} innerRadius={25} outerRadius={75}>
                <RadialBar dataKey="number" background />
            </RadialBarChart>
            </ChartContainer>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 leading-none font-medium text-muted-foreground text-xs">
            Votre progression du mois
            </div>
            <div className="flex flex-col flex-1 w-full h-full gap-2">
                {progressChartData.map((data)=> (
                    <div key={data.type} className="capitalize flex flex-col gap-1">
                        <div className="flex justify-between w-full">
                            <span>{data.type}</span>
                            <span>{data.number*3 + ' %'}</span>
                        </div>
                        <Progress value={data.number*3} indicatorColor={data.color}/>
                    </div>
                ))}
            </div>
        </CardFooter>
        </Card>
    )
}
