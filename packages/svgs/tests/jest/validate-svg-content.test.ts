/* import { select } from "hast-util-select";
import parse from "rehype-parse";
import { unified } from "unified"; */
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { ICONS_SIZES, ICONS_SOURCE_DIR } from "../../src/scripts/constants.ts";
import { loadIcons } from "../../src/scripts/load-icons.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsFolderPath = path.resolve(__dirname, `../../${ICONS_SOURCE_DIR}`);

const allIcons = await loadIcons(iconsFolderPath);

const dataGroupedBySize = allIcons.reduce((acc, curr) => {
    const group = curr.group;
    if (!acc[group]) {
        acc[group] = [];
    }
    acc[group].push(curr);

    return acc;
}, {} as Record<number, typeof allIcons>);

test("icons are assigned with the correct groups", () => {
    expect(Object.keys(dataGroupedBySize).map(x => Number(x))).toStrictEqual(ICONS_SIZES);
});

test("has the same amount of icons in each folder", () => {
    const amountOfIcons = Object.values(dataGroupedBySize).map(group => group.length);
    const unique = [...new Set(amountOfIcons)];

    expect(unique.length).toStrictEqual(1);
});

test("the first group contains the same names as the others", () => {
    expect(Object.values(dataGroupedBySize).length).toBeGreaterThan(1);

    Object.values(dataGroupedBySize)
        .slice(1)
        .forEach(group => {
            const firstGroup = Object.values(dataGroupedBySize)[0].map(icon => icon.name);
            const otherGroup = group.map(icon => icon.name);

            expect(otherGroup).toStrictEqual(firstGroup);
        });
});
