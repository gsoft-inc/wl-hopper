import type { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
    plop.setGenerator("components", {
        description: "a new component in @hopper-ui/components",
        prompts: [{
            type: "input",
            name: "name",
            message: "component name"
        }],
        actions: [{
            type: "addMany",
            destination: "./packages/components/src/{{name}}",
            templateFiles: "plop-templates/components/*"
        }]
    });
}
