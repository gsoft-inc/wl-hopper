import { getMigrationNotes } from "@/app/components/utils.ts";

export interface MigrateGuideProps {
    src: string;
}

const MigrateGuide = async ({ src }: MigrateGuideProps) => {
    if (!src) {
        return null;
    }

    const { content } = await getMigrationNotes(src);

    return <article>{content}</article>;
};

export default MigrateGuide;
