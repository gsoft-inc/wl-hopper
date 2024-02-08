// import type { NodePlopAPI } from "plop";
// @ts-check

/**
 * @param {import("plop").NodePlopAPI} plop
 */
export default function (plop) {
    plop.setGenerator("components", {
        description: "a new component in @hopper-ui/components",
        prompts: [{
            type: "input",
            name: "name",
            message: "component name"
        }],
        actions: [{
            type: "addMany",
            skipIfExists: true,
            destination: "./packages/components/src/{{name}}",
            base: "plop-templates/components",
            templateFiles: "plop-templates/components/"
        }]
    });
}
