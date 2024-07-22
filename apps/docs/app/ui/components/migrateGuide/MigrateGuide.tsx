import { getMigrationNotes } from "@/app/components/utils.ts";

import "./migrate-guide.css";

export interface MigrateGuideProps {
    src: string;
}

const MigrateGuide = async ({ src }: MigrateGuideProps) => {
    if (!src) {
        return null;
    }

    const { content } = await getMigrationNotes(src);

    return <article className="hd-migrate-guide">{content}</article>;
};

export default MigrateGuide;
