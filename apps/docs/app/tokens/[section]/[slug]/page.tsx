import { notFound } from "next/navigation";
import { allTokens } from "@/.contentlayer/generated";
import { Mdx } from "@/components/Mdx/MdxComponent";
import { Aside } from "@/components/Aside/Aside";

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

    const regex = /##\s*([\w\s]+)/g;
    const noteData = note.body.raw;
    const matches = noteData.match(regex);
    let links: { title: string; url: string; id: string }[] = [];

    if (matches) {
        const words = matches.map(match => match.replace(/##\s*/, ""));

        links = words.map(word => ({
            title: word,
            url: `#${word.toLowerCase()}`,
            id: word.toLowerCase().replace(/\s+/g, "-")
        }));
    }

    return (
        <>
            <main>
                <article key={note._id}>
                    {note.body && <Mdx code={note.body.code} />}
                </article>
            </main>
            <Aside title="Contents" links={links} />
        </>
    );
}
