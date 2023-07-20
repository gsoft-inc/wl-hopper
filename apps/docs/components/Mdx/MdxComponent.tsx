import { useMDXComponent } from "next-contentlayer/hooks";
import { Card } from "@/components/Card/Card";
import { NextImage } from "@/components/Image/Image";
import { Pre } from "@/components/Pre/Pre";
import { Title } from "@/components/Title/Title";
import type { HTMLAttributes } from "react";

type HeadingProps = React.DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const components = {
    Image: NextImage,
    pre: Pre,
    Card: Card,
    h1: (props: HeadingProps) => {
        return <Title {...props} as="h1" />;
    },
    h2: (props: HeadingProps) => {
        return <Title {...props} as="h2" level={2} />;
    },
    h3: (props: HeadingProps) => {
        return <Title {...props} as="h3" level={3} />;
    },
    h4: (props: HeadingProps) => {
        return <Title {...props} as="h4" level={4} />;
    },
    h5: (props: HeadingProps) => {
        return <Title {...props} as="h5" level={5} />;
    }
};

interface MdxProps {
    code: string;
}

export const Mdx = ({ code }: MdxProps) => {
    const Component = useMDXComponent(code);

    return <Component components={components} />;
};
