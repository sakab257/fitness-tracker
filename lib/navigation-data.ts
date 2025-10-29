import { LayoutDashboard, Dumbbell, Utensils, HeartPulse, Goal, ChartSpline, Settings } from "lucide-react"

export const navigationData = [
    {label: "Dashboard", href:"/", icon:LayoutDashboard},
    {label: "Entraînement", href:"/workout", icon: Dumbbell},
    {label: "Nutrition", href:"/food", icon: Utensils},
    {label: "Profil", href:"/health", icon: HeartPulse},
    {label: "Objectifs", href:"/goals", icon: Goal},
    {label: "Analyse", href:"/analytics", icon: ChartSpline},
    {label: "Paramètres", href:"/settings", icon: Settings},
]