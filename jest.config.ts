import type { Config } from "jest";

const config: Config = {
    rootDir: "./",
    projects: [
        "<rootDir>/packages/*"
    ],
    testRegex: "/tests/jest/.*\\.test\\.(ts|tsx)$",
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    cacheDirectory: "./node_modules/.cache/jest",
    clearMocks: true,
    verbose: true
};

export default config;
