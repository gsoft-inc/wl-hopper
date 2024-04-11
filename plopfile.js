// @ts-check

/**
 * @param {import("plop").NodePlopAPI} plop
 */
export default function (plop) {
    plop.setGenerator("components", {
        description: "a new component in @hopper-ui/components",
        prompts: [{
            type: "input",
            name: "folderName",
            message: "folder name"
        },
        {
            type: "input",
            name: "name",
            message: "component name"
        }],
        actions: [{
            type: "addMany",
            skipIfExists: true,
            destination: "./packages/components/src/{{folderName}}",
            base: "plop-templates/components",
            templateFiles: "plop-templates/components/"
        }]
    });
}
