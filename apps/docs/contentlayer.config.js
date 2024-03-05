import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";

/** @type {import('contentlayer/source-files').ComputedFields} */

export const Page = defineDocumentType(() => ({
    name: "Page",
    filePathPattern: "pages/**/*.mdx",
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true
        },
        description: {
            type: "string"
        }
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: doc => `${doc._raw.flattenedPath}`
        }
    }
}));

export const Tokens = defineDocumentType(() => ({
    name: "Tokens",
    filePathPattern: "tokens/**/*.mdx",
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true
        },
        description: {
            type: "string"
        },
        order: {
            type: "number"
        }
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: post => {
                return post._raw.sourceFileName.replace(/\.mdx$/, "");
            }
        },
        section: {
            type: "string",
            resolve: post => {
                return post._raw.sourceFileDir.replace("tokens/", "");
            }
        }
    }
}));

export const Icons = defineDocumentType(() => ({
    name: "Icons",
    filePathPattern: "icons/**/*.mdx",
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true
        },
        description: {
            type: "string"
        },
        section: {
            type: "string"
        },
        order: {
            type: "number"
        }
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: post => post._raw.sourceFileName.replace(/\.mdx$/, "")
        },
        section: {
            type: "string",
            resolve: post => {
                return post._raw.sourceFileDir.replace("icons/", "");
            }
        }
    }
}));

export const Components = defineDocumentType(() => ({
    name: "Components",
    filePathPattern: "components/**/*.mdx",
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true
        },
        description: {
            type: "string"
        },
        section: {
            type: "string"
        },
        status: {
            type: "string"
        }
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: post => post._raw.sourceFileName.replace(/\.mdx$/, "")
        }
    }
}));

const rehypeOptions = {
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

export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Page, Tokens, Components, Icons],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [
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
                    if (node?.type === "element" && node?.tagName === "div") {
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
        ]
    }
});
