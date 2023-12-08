import type { HTMLAttributes } from "react";

import { useMDXComponent } from "next-contentlayer/hooks";
import NextImage from "@/components/ui/image/Image";
import Card from "@/components/ui/card/Card";
import IconSpecTable from "@/components/ui/table/IconSpecTable";
import { IconTable } from "@/components/iconTable/IconTable";
import Pre from "@/components/ui/pre/Pre";
import Switcher from "@/components/ui/switcher/Switcher";
import Title from "@/components/ui/title/Title";
import Table from "@/components/ui/table/Table";
import TypographyTable from "@/components/ui/table/TypographyTable";
import Tabs from "@/components/tabs/Tabs";
import TableSection from "@/components/tableSection/TableSection";

type HeadingProps = React.DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const components = {
    Card,
    Image: NextImage,
    pre: Pre,
    Table: Table,
    TypographyTable: TypographyTable,
    IconTable: IconTable,
    IconSpecTable: IconSpecTable,
    Tabs: Tabs,
    TableSection: TableSection,
    Switcher: Switcher,
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
