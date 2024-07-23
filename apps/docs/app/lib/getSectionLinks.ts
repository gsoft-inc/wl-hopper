import type { MDX } from "contentlayer/core";
import formattingTitleId from "@/app/lib/formattingTitleId";

type SectionLink = Pick<MDX, "raw">;

function getSectionLinks(content: {
    body: SectionLink;
}) {
    const regex = /(^#{2,3}\s).*?(?=\n)/gm;
    const body = content.body.raw;
    const matches = body.match(regex);

    if (matches) {
        return matches.map(link => {
            console.log(link);

            const title = link.replace("###", "").replace("##", "").trim();
            const level = link.startsWith("###") ? 3 : 2;

            return {
                title: title,
                url: `#${formattingTitleId(title.toString())}`,
                id: title.toLowerCase().replace(/\s+/g, "-"),
                level: level
            };
        });
    }

    return [];
}

export default getSectionLinks;
