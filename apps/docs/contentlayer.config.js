import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { rehypePluginOptions } from "./app/lib/rehypeConfig.js";

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

export const Guides = defineDocumentType(() => ({
    name: "Guides",
    filePathPattern: "guides/**/*.mdx",
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
                return post._raw.sourceFileDir.replace("guides/", "");
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

export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Page, Tokens, Components, Icons, Guides],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: rehypePluginOptions
    }
});
