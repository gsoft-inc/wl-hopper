import type { Config } from "jest";
import { swcConfig } from "./swc.jest.ts";
import path from "path";

const config: Config = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|ts|tsx)$": ["@swc/jest", swcConfig as Record<string, unknown>]
    },
    transformIgnorePatterns: [
        // Must exclude hast-util-select from the transform ignore files
        // because it's an ESM only project which must be processed by SWC.
        // The pattern is optimized for PNPM, for more info view: https://jestjs.io/docs/configuration#transformignorepatterns-arraystring.
        `${path.join(
            __dirname,
            "../.."
        )}/node_modules/.pnpm/(?!(hast-util-select)@)`,
        `${path.join(
            __dirname,
            "../.."
        )}/node_modules/.pnpm/(?!(property-information)@)`
    ]
};

export default config;
