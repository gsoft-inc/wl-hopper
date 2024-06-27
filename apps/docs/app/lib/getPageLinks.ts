interface Raw {
    flattenedPath: string;
    sourceFileDir?: string;
}

export interface Data {
    _id: string;
    title: string;
    order?: number | undefined;
    section?: string;
    _raw: Raw;
}

export interface LinkItem {
    id: string;
    title: string;
    order?: number;
    path: string;
}

export interface Section {
    id: string;
    title: string;
    linkItems: LinkItem[];
}

function capitalizeWords(str: string) {
    return str.replace(/-/g, " ")
        .replace(/\b\w/g, char => char.toUpperCase());
}

function getPageLinks(items: Data[], options?: { order?: string[] }) {
    if (!items) {
        return [];
    }

    const sections: { [key: string]: Section } = {};

    items.forEach(item => {
        const sectionId = item.section || "";

        if (!sections[sectionId]) {
            sections[sectionId] = {
                id: sectionId,
                title: capitalizeWords(sectionId),
                linkItems: []
            };
        }

        sections[sectionId].linkItems.push({
            id: item._id,
            title: item.title,
            order: item.order,
            path: item._raw.flattenedPath
        });
    });

    const sortedSections = Object.values(sections).sort((a, b) => {
        if (!options?.order) {
            return 0;
        }

        const aIndex = options.order.indexOf(a.id);
        const bIndex = options.order.indexOf(b.id);

        if (aIndex === -1 && bIndex === -1) {
            return 0;
        }

        if (aIndex === -1) {
            return 1;
        }

        if (bIndex === -1) {
            return -1;
        }

        return aIndex - bIndex;
    });

    sortedSections.forEach(section => {
        section.linkItems.sort((a, b) => {
            if (a.order === undefined && b.order === undefined) {
                return 0;
            }

            if (a.order === undefined) {
                return 1;
            }

            if (b.order === undefined) {
                return -1;
            }

            return a.order - b.order;
        });
    });

    return sortedSections;
}

export default getPageLinks;
