import type { Config } from "jest";

import { swcConfig } from "./swc.jest.ts";

const config: Config = {
    testEnvironment: "node",
    transform: {
        "^.+\\.(js|ts|tsx)$": ["@swc/jest", swcConfig as Record<string, unknown>]
    },
    extensionsToTreatAsEsm: [".ts"]
};

export default config;
