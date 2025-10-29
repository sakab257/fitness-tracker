import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { poppins } from "@/lib/font"
import Header from "@/components/header/header";


export const metadata: Metadata = {
  title: "Sanetee",
  description: "Un fitness tracker spécialement pour Barta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
        <head />
        <body className={`${poppins.className} w-full h-svh overflow-hidden`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <main className="w-full h-svh overflow-hidden flex flex-col">
                <Header />
                <div className="flex-1 overflow-auto">
                  {children}
                </div>
              </main>
            </SidebarProvider>
          </ThemeProvider>
        </body>
      </html>
  );
}
