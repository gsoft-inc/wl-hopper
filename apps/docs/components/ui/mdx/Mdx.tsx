import type { HTMLAttributes } from "react";

import { useMDXComponent } from "next-contentlayer/hooks";
import NextImage from "@/components/ui/image/Image";
import Card from "@/components/ui/card/Card";
import Pre from "@/components/ui/pre/Pre";
import Title from "@/components/ui/title/Title";
import Table from "@/components/ui/table/Table";
import Tabs from "@/components/tabs/Tabs";

type HeadingProps = React.DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const components = {
    Card,
    Image: NextImage,
    pre: Pre,
    Table: Table,
    Tabs: Tabs,
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

const Mdx = ({ code }: MdxProps) => {
    const Component = useMDXComponent(code);

    return <Component components={components} />;
};

export default Mdx;
