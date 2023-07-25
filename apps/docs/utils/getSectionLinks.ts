import type { MDX } from "contentlayer/core";

function getSectionLinks (content: {
    body: MDX;
}) {
    const regex = /(?<=##\s).*?(?=\n)/g;
    const body = content.body.raw;
    const matches = body.match(regex);

    if (matches) {
        const links = matches.map(match => match.replace("##", "").trim());

        return links.map(link => ({
            title: link,
            url: `#${link.toLowerCase()}`,
            id: link.toLowerCase().replace(/\s+/g, "-")
        }));
    }

    return [];
}

export default getSectionLinks;
