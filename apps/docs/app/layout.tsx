import Header from "@/app/ui/layout/header/Header";
import { FeatureFlagProvider } from "@/context/feature/FeatureFlagProvider";
import { ThemeProvider } from "@/context/theme/ThemeProvider";
import LogRocket from "logrocket";
import { useEffect, type ReactNode } from "react";

import "./globals.css";
import "./layout.css";

export const metadata = {
    title: "Hopper Documentation",
    description: "The Hopper Design System Documentation Hub"
};

const logrocketAppId = process.env.LOGROCKET_APP_ID;

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

    useEffect(() => {
        if (logrocketAppId) {
            LogRocket.init(logrocketAppId);
        }
    }, []);

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
