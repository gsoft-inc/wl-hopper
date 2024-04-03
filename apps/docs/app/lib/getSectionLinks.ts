import type { MDX } from "contentlayer/core";
import formattingTitleId from "@/app/lib/formattingTitleId";

function getSectionLinks(content: {
    body: MDX;
}) {
    const regex = /(?<=^##\s).*?(?=\n)/gm;
    const body = content.body.raw;
    const matches = body.match(regex);

    if (matches) {
        const links = matches.map(match => match.replace("##", "").trim());

        return links.map(link => ({
            title: link,
            url: `#${formattingTitleId(link.toString())}`,
            id: link.toLowerCase().replace(/\s+/g, "-")
        }));
    }

    return [];
}

export default getSectionLinks;
