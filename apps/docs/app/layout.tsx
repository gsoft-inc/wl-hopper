import Header from "@/app/ui/layout/header/Header";
import { EnvironmentContextProvider } from "@/context/env/EnvironmentProvider";
import { FeatureFlagProvider } from "@/context/feature/FeatureFlagProvider";
import { RACProvider } from "@/context/rac/RACProvider";
import { ThemeProvider } from "@/context/theme/ThemeProvider";
import "@hopper-ui/tokens/fonts.css";
import "@hopper-ui/tokens/tokens.css";
import type { ReactNode } from "react";
import "./globals.css";
import "./layout.css";

export const metadata = {
    title: {
        template: "%s | Hopper Design System",
        default: "Hopper Design System"
    },
    description: "Explore Workleap's Design System, where icons, tokens, and components are handpicked for ultimate simplicity and accessibility"
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
                    <EnvironmentContextProvider>
                        <ThemeProvider>
                            <RACProvider>
                                <Header />
                                <div className="hd-header__shadow" role="presentation">
                                    <div className="hd-header-shadow-block hd-header-shadow-block-1"></div>
                                    <div className="hd-header-shadow-block hd-header-shadow-block-2"></div>
                                    <div className="hd-header-shadow-block hd-header-shadow-block-3"></div>
                                </div>
                                {children}
                            </RACProvider>
                        </ThemeProvider>
                    </EnvironmentContextProvider>
                </FeatureFlagProvider>
            </body>
        </html>
    );
}
