import { Header } from "@/components/Header/Header";

import "./globals.css";

export const metadata = {
    title: "Hopper Documentation",
    description: "The Hopper Design System Documentation Hub"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem("hdTheme")) {
        return window.localStorage.getItem("hdTheme")
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
    }
    document.body.dataset.theme = getUserPreference();
  `;

    return (
        <html lang="en">
            <body id="App">
                <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
                <Header />
                {children}
            </body>
        </html>
    );
}
