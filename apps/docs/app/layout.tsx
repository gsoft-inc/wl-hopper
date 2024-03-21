import Header from "@/app/ui/layout/header/Header";
import { ThemeProvider } from "@/context/theme/ThemeProvider";

import "./globals.css";
import "./layout.css";

export const metadata = {
    title: "Hopper Documentation",
    description: "The Hopper Design System Documentation Hub"
};

export default function RootLayout({ children }: {
    children: React.ReactNode;
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
            <body id="App">
                <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
                <ThemeProvider>
                    <Header />
                    <div className="hd-header__shadow" role="presentation">
                        <div className="hd-header-shadow-block hd-header-shadow-block-1"></div>
                        <div className="hd-header-shadow-block hd-header-shadow-block-2"></div>
                        <div className="hd-header-shadow-block hd-header-shadow-block-3"></div>
                    </div>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
