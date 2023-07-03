import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Button, Inline, createThemeVars, ShareGateTheme, ThemeProvider } from "@sharegate/orbit-ui";
import { themes } from "prism-react-renderer";

const ReactLiveSample = () => {
    const scope = { Button, Inline };
    createThemeVars([ShareGateTheme]);

    const code = `
  <Inline>
      <Button>Coffee is Life</Button>
      <Button variant="secondary">Coffee is Life</Button>
  </Inline>
    `;

    return (
        <ThemeProvider theme={ShareGateTheme} colorScheme="light">
            <LiveProvider code={code} scope={scope} theme={themes.duotoneDark}>
                <LiveEditor />
                <LiveError style={{ backgroundColor: "#FFD6D3", padding: 20 }} />
                <LivePreview style={{ backgroundColor: "white", borderRadius: "0 0 12px 12px", padding: 20 }} />
            </LiveProvider>
        </ThemeProvider>
    );
};

export default ReactLiveSample;
