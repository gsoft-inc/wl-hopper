import type { HTMLAttributes } from "react";

import Card from "@/components/card/Card.tsx";
import NextImage from "@/components/image/Image.tsx";
import Pre from "@/components/pre/Pre.tsx";
import Table from "@/app/ui/tokens/table/Table.tsx";
import TypographyTable from "@/app/ui/tokens/table/TypographyTable.tsx";
import TypographyVariantTable from "@/app/ui/tokens/table/TypographyVariantTable.tsx";
import { IconTable } from "@/app/ui/icons/iconTable/IconTable.tsx";
import IconSpecTable from "@/app/ui/tokens/table/IconSpecTable.tsx";
import Tabs from "@/components/tabs/Tabs.tsx";
import TableSection from "@/app/ui/tokens/tableSection/TableSection.tsx";
import Switcher from "@/app/ui/icons/switcher/Switcher.tsx";
import Title from "@/components/title/Title.tsx";
import PreviewComponent from "@/components/previewComponent/PreviewComponent.tsx";

type HeadingProps = React.DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export const components = {
    Card,
    Image: NextImage,
    pre: Pre,
    Table: Table,
    TypographyTable: TypographyTable,
    TypographyVariantTable: TypographyVariantTable,
    IconTable: IconTable,
    IconSpecTable: IconSpecTable,
    Tabs: Tabs,
    TableSection: TableSection,
    Switcher: Switcher,
    PreviewComponent: (props: { name: string }) => {
        return <PreviewComponent {...props} />;
    },
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
