import type { Metadata } from "next";
import { Poppins, Saira_Condensed } from "next/font/google";
import "./globals.css";
import { CursorContextProvider } from "@/context/CursorContext";
import { ProjectContextProvider } from "@/context/ProjectContext";
import { app, dark_theme } from "@/data/config";
import { ServiceContextProvider } from "@/context/ServiceContext";
import { SmoothScrollingProvider } from "@/context/SmoothScrollingProvider";
import Nav from "@/components/common/global/Nav";
import { cn } from "@/lib/utils";
import { GlobalGsapProvider } from "@/context/GlobalGsapProvider";
import ProjectLightbox from "@/components/common/projects/ProjectLightbox";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["300", "400", "500"],
});

const Saira = Saira_Condensed({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  ...app,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dark_theme ? "dark" : ""}>
      <body className={cn(poppins.variable, Saira.variable)}>
      <LanguageProvider>
        <CursorContextProvider>
          <ProjectContextProvider>
            <ServiceContextProvider>
              <Nav />

              <GlobalGsapProvider>
                <SmoothScrollingProvider>{children}</SmoothScrollingProvider>
              </GlobalGsapProvider>

              <ProjectLightbox />
            </ServiceContextProvider>
          </ProjectContextProvider>
        </CursorContextProvider>
        </LanguageProvider>
        <Analytics />
        
      </body>
    </html>
  );
}
