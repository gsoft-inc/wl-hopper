import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import Card from "@/components/Card/Card";
import { Pre } from "@/components/Pre/Pre";

const components = {
    Image,
    pre: Pre,
    "Card": Card
};

interface MdxProps {
    code: string;
}

export const Mdx = ({ code }: MdxProps) => {
    const Component = useMDXComponent(code);

    return <Component components={components} />;
};
