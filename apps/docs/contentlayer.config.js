import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

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
        },
        date: {
            type: "date"
        }
    },
    computedFields: {
        url: {
            type: "string",
            resolve: doc => `${doc._raw.flattenedPath}`
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
            node.children = [{ type: "text", value: " " }];
        }
    },
    onVisitHighlightedLine(node) {
        // Each line node by default has `class="line"`.
        node.properties.className.push("highlighted");
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
    documentTypes: [Page],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [
            [rehypePrettyCode, rehypeOptions]
        ]
    }

});
