import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Pre } from "@/components/Pre/Pre";
import { CustomHeading, Heading } from "@/components/Heading/Heading";
import type { HTMLAttributes } from "react";

type HeadingProps = React.DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const components = {
    Image,
    pre: Pre,
    h1: (props: HeadingProps) => {
        return <Heading {...props} as="h1" />;
    },
    h2: (props: HeadingProps) => {
        return <CustomHeading {...props} as="h2" />;
    },
    h3: (props: HeadingProps) => {
        return <CustomHeading {...props} as="h3" />;
    },
    h4: (props: HeadingProps) => {
        return <CustomHeading {...props} as="h4" />;
    },
    h5: (props: HeadingProps) => {
        return <CustomHeading {...props} as="h5" />;
    },
    h6: (props: HeadingProps) => {
        return <CustomHeading {...props} as="h6" />;
    }
};

interface MdxProps {
    code: string;
}

export const Mdx = ({ code }: MdxProps) => {
    const Component = useMDXComponent(code);

    return <Component components={components} />;
};
