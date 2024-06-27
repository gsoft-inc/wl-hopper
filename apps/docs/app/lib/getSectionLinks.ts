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
            const title = link.replace("###", "").replace("##", "").trim();

            return {
                title: title,
                url: `#${formattingTitleId(title.toString())}`,
                id: title.toLowerCase().replace(/\s+/g, "-"),
                level: link.startsWith("###") ? 3 : 2
            };
        });
    }

    return [];
}

export default getSectionLinks;
