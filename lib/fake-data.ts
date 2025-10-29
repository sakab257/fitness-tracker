import {
    ChartConfig,
} from "@/components/ui/chart"

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