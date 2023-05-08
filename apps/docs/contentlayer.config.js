import { defineDocumentType, makeSource } from "contentlayer/source-files";

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

export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Page]
});
