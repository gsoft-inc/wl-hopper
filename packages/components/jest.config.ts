import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";

import { swcConfig } from "./swc.jest.ts";
import { compilerOptions } from "./tsconfig.json";

const config: Config = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|ts|tsx)$": ["@swc/jest", swcConfig as Record<string, unknown>]
    },
    moduleNameMapper: {
        "\\.css$": "identity-obj-proxy", // https://jestjs.io/docs/webpack#mocking-css-modules
        ...pathsToModuleNameMapper(compilerOptions.paths, {
            prefix: "<rootDir>"
        })
    },
    cacheDirectory: "./node_modules/.cache/jest",
    resolver: "<rootDir>/../../tooling/intl-jest-resolver/jestResolver.cjs",
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"]
};

export default config;
