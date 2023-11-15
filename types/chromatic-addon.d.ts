import type { ChromaticProviderOptions } from ".storybook/custom-addons/chromatic/index.tsx";

declare module "@storybook/react"{
    export interface StorybookSafeParameters {
        chromaticProvider?: ChromaticProviderOptions;
    }
}

