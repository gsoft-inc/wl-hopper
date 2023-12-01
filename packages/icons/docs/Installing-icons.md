// TODO: This is not an official documentation. This is a placeholder for the real documentation.

# Standalone Installation (without the @hopper-ui/components)

Icons rely on the styled system to provide styling and responsive options.

## Install packages
```bash
npm install @hopper-ui/icons @hopper-ui/styled-system
```

## Import styles
```css
/* index.css */

@import "@hopper-ui/icons/index.css";
```

## Configure your application

```tsx
// index.tsx
import { StyledSystemProvider } from "@hopper-ui/styled-system";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root")!);
root.render(
    <StyledSystemProvider withBodyStyles colorScheme="light">
        <App />
    </StyledSystemProvider>
);
```

## Start using icons
```tsx
import { AddIcon } from "@hopper-ui/icons";

export const App = () => (
    <div>
        <span>Hello World!</span>
        <AddIcon size="sm" />
    </div>
);
```
