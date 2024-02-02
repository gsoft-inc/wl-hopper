import { cssModule } from "../../src/css-module.ts";

const styles = {
    "hop-test": "hop-test_withHash",
    "hop-test--size-xs": "hop-test--size-xs_withHash",
    "hop-test--size-sm": "hop-test--size-sm_withHash",
    "hop-test--size-md": "hop-test--size-md_withHash",
    "hop-test--size-lg": "hop-test--size-lg_withHash",
    "hop-test--size-xl": "hop-test--size-xl_withHash",
    "hop-test--size-2xl": "hop-test--size-2xl_withHash"
} as const;

describe("css-module", () => {
    let consoleWarnSpy: jest.SpyInstance<void, unknown[]>;

    beforeEach(() => {
        // Set up a spy on console.warn before each test
        consoleWarnSpy = jest.spyOn(global.console, "warn");
    });

    afterEach(() => {
        // Ensure the spy is cleared after each test
        consoleWarnSpy.mockRestore();
    });

    it("should not warn when the component class is not found", () => {
        const result = cssModule(styles, "hop-unknown");

        expect(result).toBe("");
        expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it("should support empty modifiers", () => {
        const result = cssModule(styles, "hop-test");

        expect(result).toBe(styles["hop-test"]);
        expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it("should support single string modifiers", () => {
        const result = cssModule(styles, "hop-test", "size-xs");

        expect(result).toBe(`${styles["hop-test"]} ${styles["hop-test--size-xs"]}`);
        expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it("should support single conditional modifiers", () => {
        const result1 = cssModule(styles, "hop-test", {
            "size-xs": false
        });

        expect(result1).toBe(styles["hop-test"]);

        const result2 = cssModule(styles, "hop-test", {
            "size-xs": true
        });

        expect(result2).toBe(`${styles["hop-test"]} ${styles["hop-test--size-xs"]}`);
        expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it("should warn when a modifier is not found", () => {
        const result = cssModule(styles, "hop-test", "unknown-string");

        expect(result).toBe(styles["hop-test"]);
        expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining("unknown-string"));
    });
});
