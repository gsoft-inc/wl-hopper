import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Pre } from "../Pre/Pre";

const components = {
    Image,
    pre: Pre
};

interface MdxProps {
    code: string;
}

export const Mdx = ({ code }: MdxProps) => {
    const Component = useMDXComponent(code);

    return <Component components={{ ...components }} />;
};
