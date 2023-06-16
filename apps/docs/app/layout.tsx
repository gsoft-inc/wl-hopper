import { Header } from "@/components/Header/Header";
import { ThemeProvider } from "@/components/Utils/ThemeProvider/ThemeProvider";

import "./globals.css";
import "./layout.css";

export const metadata = {
    title: "Hopper Documentation",
    description: "The Hopper Design System Documentation Hub"
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
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
                    <div className="hd-wrapper hd-flex">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
