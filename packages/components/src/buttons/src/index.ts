import { slot } from "@hopper-ui/styled-system";

// export * from "./Button.tsx";
export * from "./ButtonContext.ts";
export * from "./ButtonGroup.tsx";
export * from "./ButtonGroupContext.ts";
export * from "./ClearButton.tsx";
export * from "./ClearButtonContext.ts";
export * from "./EmbeddedButton.tsx";
export * from "./EmbeddedButtonContext.ts";

import { Button } from "./Button.tsx";

const _Button = slot("button", Button);
export { _Button as Button };
