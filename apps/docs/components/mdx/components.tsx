import type { HTMLAttributes } from "react";
import dynamic from "next/dynamic";

import Card from "@/components/card/Card.tsx";
import NextImage from "@/components/image/Image.tsx";
import Pre from "@/components/pre/Pre.tsx";
import InlineCode from "@/components/code/InlineCode.tsx";
import TokenTable from "@/app/ui/tokens/table/TokenTable.tsx";
import TypographyTable from "@/app/ui/tokens/table/TypographyTable.tsx";
import TypographyVariantTable from "@/app/ui/tokens/table/TypographyVariantTable.tsx";
import { IconTable } from "@/app/ui/icons/iconTable/IconTable.tsx";
import IconSpecTable from "@/app/ui/tokens/table/IconSpecTable.tsx";
import Tabs from "@/components/tabs/Tabs.tsx";
import TableSection from "@/app/ui/tokens/tableSection/TableSection.tsx";
import Switcher from "@/app/ui/icons/switcher/Switcher.tsx";
import Title from "@/components/title/Title.tsx";
import MotionPreview from "@/components/motionPreview/MotionPreview.tsx";
import Footnote from "@/components/footnote/Footnote.tsx";
import PackageInstallation, {
    type PackageInstallationProps
} from "@/components/packageInstallation/PackageInstallation.tsx";
import type { PreviewComponentProps } from "@/app/ui/components/previewComponent/PreviewComponent.tsx";
import type { MigrateGuideProps } from "@/app/ui/components/migrateGuide/MigrateGuide.tsx";
import type { PropTableProps } from "@/app/ui/components/propTable/PropTable.tsx";

type HeadingProps = React.DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const PreviewComponent = dynamic(() => import("@/app/ui/components/previewComponent/PreviewComponent.tsx"));
const MigrateGuide = dynamic(() => import("@/app/ui/components/migrateGuide/MigrateGuide.tsx"));
const PropTable = dynamic(() => import("@/app/ui/components/propTable/PropTable.tsx"));

export const components = {
    Card,
    code: InlineCode,
    Image: NextImage,
    pre: Pre,
    MotionPreview: MotionPreview,
    Footnote: Footnote,
    Table: TokenTable,
    TypographyTable: TypographyTable,
    TypographyVariantTable: TypographyVariantTable,
    IconTable: IconTable,
    IconSpecTable: IconSpecTable,
    Tabs: Tabs,
    TableSection: TableSection,
    Switcher: Switcher,
    PackageInstallation: (props: PackageInstallationProps) => {
        return <PackageInstallation {...props} />;
    },
    PreviewComponent: (props: PreviewComponentProps) => {
        return <PreviewComponent {...props} />;
    },
    MigrateGuide: (props: MigrateGuideProps) => {
        return <MigrateGuide {...props} />;
    },
    PropTable: (props: PropTableProps) => {
        return <PropTable {...props} />;
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
