import {visit} from "unist-util-visit";
import rehypePrettyCode from "rehype-pretty-code";

/**
 * Options for the rehype-pretty-code plugin.
 * @type {Object}
 * @property {string} theme - The theme to use for code highlighting.
 * @property {boolean} keepBackground - Whether to keep the background color of the code block.
 * @property {Function} onVisitLine - Function to be called on each line of the code block.
 * @property {Function} onVisitHighlightedLine - Function to be called on each highlighted line of the code block.
 * @property {Function} onVisitHighlightedWord - Function to be called on each highlighted word of the code block.
 */
export const rehypeOptions = {
    // Use one of Shiki's packaged themes
    theme: "nord",
    keepBackground: true,
    onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and
        // allow empty lines to be copy/pasted
        if (node.children.length === 0) {
            node.children = [{
                type: "text",
                value: " "
            }];
        }
    },
    onVisitHighlightedLine(node) {
        const nodeClass = node.properties.className;
        if (nodeClass && nodeClass.length > 0) {
            node.properties.className.push("highlighted");
        } else {
            node.properties.className = ["highlighted"];
        }
    },
    onVisitHighlightedWord(node, id) {
        // Each word node has no className by default.
        node.properties.className = ["word"];

        if (id) {
            // If the word spans across syntax boundaries (e.g. punctuation), remove
            // colors from the child nodes.
            if (node.properties["data-rehype-pretty-code-wrapper"]) {
                node.children.forEach(childNode => {
                    childNode.properties.style = "";
                });
            }

            node.properties.style = "";
            node.properties["data-word-id"] = id;
        }
    }
};


export const rehypePluginOptions = [
    () => tree => {
        visit(tree, node => {
            if (node?.type === "element" && node?.tagName === "pre") {
                const [codeEl] = node.children;

                if (codeEl.tagName !== "code") {
                    return;
                }
                node.raw = codeEl.children?.[0].value;
            }
        });
    },
    [rehypePrettyCode, rehypeOptions],
    () => tree => {
        visit(tree, node => {
            if (node?.type === "element" && node?.tagName === "figure") {
                const titleChild = node.children.find(child => {
                    return (
                        child.properties &&
                        "data-rehype-pretty-code-title" in child.properties
                    );
                });

                for (const child of node.children) {
                    if (child.tagName === "pre") {
                        child.properties["raw"] = node.raw;
                    }

                    if (titleChild) {
                        node.title = titleChild.children[0].value;
                        child.properties["title"] = node.title;
                    }
                }
            }
        });
    }
];
