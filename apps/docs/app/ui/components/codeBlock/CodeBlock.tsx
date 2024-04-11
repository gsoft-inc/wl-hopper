"use client";

import { useEffect, useState } from "react";
import * as prod from "react/jsx-runtime";
import { unified } from "unified";
import rehypeReact from "rehype-react";
import rehypeParse from "rehype-parse";

import Pre from "@/components/pre/Pre.tsx";

const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs, components: { pre: Pre } };

function useProcessor(text: string) {
    const [Content, setContent] = useState(<></>);

    useEffect(() => {
        unified()
            .use(rehypeParse, { fragment: true })
            // @ts-expect-error: rehype-react types error
            .use(rehypeReact, production)
            .process(text)
            .then(file => {
                setContent(file.result);
            });
    }, [text]);

    return Content;
}

export default function CodeBlock({ code }: { code: string }) {
    return useProcessor(code);
}
