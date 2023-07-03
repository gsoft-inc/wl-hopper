import sdk from "@stackblitz/sdk";

const StackBlitzEmbed = () => {
    function embedProjectTest() {
        sdk.embedProject(
            "embed",
            {
                title: "TS Starter",
                description: "Blank starter project for building ES6 apps.",
                template: "create-react-app",
                dependencies: {
                    "@types/react": "^18.0.8",
                    "@types/react-dom": "^18.0.2",
                    "react": "18.1.0",
                    "react-dom": "18.1.0",
                    "@sharegate/orbit-ui": "35.0.0"
                },
                files: {
                    "index.html": "<div id=\"root\"></div>",
                    "index.tsx": `
                    import * as React from 'react';
                    import { StrictMode } from 'react';
                    import { createRoot } from 'react-dom/client';

                    import {
                        createThemeVars,
                        ShareGateTheme,
                        ThemeProvider,
                    } from '@sharegate/orbit-ui';

                    import App from './App';

                    createThemeVars([ShareGateTheme]);
                    const rootElement = document.getElementById('root');
                    const root = createRoot(rootElement);

                    root.render(
                      <StrictMode>
                        <ThemeProvider theme={ShareGateTheme} colorScheme="light">
                            <App />
                        </ThemeProvider>
                      </StrictMode>
                    );
              `,
                    "App.tsx": `
                    import * as React from "react";
                    import { Button } from "@sharegate/orbit-ui";
                    import "./styles.css";

                    export default function App () {
                        return (<Button>Cutoff</Button>)
                    }
                `,
                    "styles.css": "@import \"@sharegate/orbit-ui/index.css\"; body { padding: 1rem}"
                },
                settings: {
                    compile: {
                        trigger: "auto",
                        clearConsole: true
                    }
                }
            },
            {
                clickToLoad: false,
                openFile: "App.tsx",
                terminalHeight: 40,
                height: 700
            }
        );
    }

    return (
        <div>
            <button onClick={() => embedProjectTest()} type="button">Embed project</button>
            <div id="embed"></div>
        </div>
    );
};

export default StackBlitzEmbed;
