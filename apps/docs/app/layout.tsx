import Header from "@/app/ui/layout/header/Header";
import { FeatureFlagProvider } from "@/context/feature/FeatureFlagProvider";
import { ThemeProvider } from "@/context/theme/ThemeProvider";
import type { ReactNode } from "react";

import "./globals.css";
import "./layout.css";

export const metadata = {
    title: "Hopper Documentation",
    description: "The Hopper Design System Documentation Hub"
};

export default function RootLayout({ children }: {
    children: ReactNode;
}) {
    const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem("hdTheme")) {
        return window.localStorage.getItem("hdTheme");
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
    }
    document.documentElement.dataset.theme = getUserPreference();
  `;

    return (
        <html lang="en" suppressHydrationWarning>
            <body id="App" className="hd-layout">
                <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
                <FeatureFlagProvider>
                    <ThemeProvider>
                        <Header />
                        <div className="hd-header__shadow" role="presentation">
                            <div className="hd-header-shadow-block hd-header-shadow-block-1"></div>
                            <div className="hd-header-shadow-block hd-header-shadow-block-2"></div>
                            <div className="hd-header-shadow-block hd-header-shadow-block-3"></div>
                        </div>
                        {children}
                    </ThemeProvider>
                </FeatureFlagProvider>
            </body>
        </html>
    );
}
