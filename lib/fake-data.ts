import {
    ChartConfig,
} from "@/components/ui/chart"
import { Beef, Droplet, Flame, Wheat } from "lucide-react"

/*

FAKE DATA pour le current user

*/

export const currentUser = {
    surname:"Cena",
    name:"John",
    age:"48 ans",
    weight: "114 kg",
    height: "185 cm",
    nbTokens: "14,568",
    streak: "87 j"
}

/*

FAKE DATA pour la nutrition dans le dashboard

*/

export const currentFood = {
    imageUrl: "/asset/food.jpg",
    name: "Buddha Bowl",
    description: "Bol de tofu avec légumes frais, maïs, œufs et edamame.",
    type: "Diner",
    difficulty: "Facile",
    time: "30 minutes",
    score: 73,
    nutriments: [
        {type:"kCal",data: 450, icon: Flame},
        {type:"glucides",data: 40, icon: Wheat},
        {type:"protéines",data: 35, icon: Beef},
        {type:"gras",data: 15, icon: Droplet},
    ]
}

/*

DATA POUR LE GRAPHIQUE DANS /components/dashboard/progress-chart.tsx

*/

export const progressChartData = [
    { type: "cardio", number: 12, fill: "var(--color-cardio)", color: "var(--chart-1)" },
    { type: "force", number: 31, fill: "var(--color-strength)", color: "var(--chart-2)" },
    { type: "mobilité", number: 18, fill: "var(--color-mobility)", color: "var(--chart-3)" },
]

export const progressChartConfig = {
    number: {
        label: "Nombre",
    },
    cardio: {
        label: "Cardio",
        color: "var(--chart-1)",
    },
    strength: {
        label: "Force",
        color: "var(--chart-2)",
    },
    mobility: {
        label: "Mobilité",
        color: "var(--chart-3)",
    },
} satisfies ChartConfig