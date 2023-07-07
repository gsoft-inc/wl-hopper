import { notFound } from "next/navigation";
import { allComponents } from "@/.contentlayer/generated";
import { Mdx } from "@/components/Mdx/MdxComponent";

interface PageProps {
    params: {
        slug: string;
    };
}

async function getNoteFromParams(params: PageProps["params"]) {
    const note = allComponents.find(component => component.slug === params.slug);

    if (!note) {
        return null;
    }

    return note;
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return allComponents.map(({ slug }) => ({
        slug
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
                {note.status &&
                    `status: ${note.status}`
                }
                {note.body && <Mdx code={note.body.code} />}
            </article>
        </main>
    );
}
