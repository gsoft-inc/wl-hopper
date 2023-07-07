import { notFound } from "next/navigation";
import { allTokens } from "@/.contentlayer/generated";
import { Mdx } from "@/components/Mdx/MdxComponent";

interface PageProps {
    params: {
        slug: string;
        section: string;
    };
}

async function getNoteFromParams(params: PageProps["params"]) {
    const note = allTokens.find(token => token.slug === params.slug && token.section === params.section);

    if (!note) {
        return null;
    }

    return note;
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return allTokens.map(({ slug, section }) => ({
        slug,
        section
    }));
}

export default async function Note({ params }: PageProps) {
    const note = await getNoteFromParams(params);

    if (!note) {
        notFound();
    }

    return (
        <main>
            <article key={note._id}>
                {note.body && <Mdx code={note.body.code} />}
            </article>
        </main>
    );
}
