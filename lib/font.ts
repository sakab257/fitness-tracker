import { Geist, Geist_Mono, Poppins, Montserrat } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const poppins = Poppins({
    weight: ["100", "400", "700"],
    subsets: ["latin"]
})

export const montserrat = Montserrat({
    weight: ["100", "400", "700"],
    subsets: ["latin"]
})