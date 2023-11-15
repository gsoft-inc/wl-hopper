import { select, selectAll } from "hast-util-select";
import path, { dirname } from "path";
import parse from "rehype-parse";
import { unified } from "unified";
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

test("has to correct groups assigned", () => {
    expect(Object.keys(dataGroupedBySize).map(x => Number(x))).toStrictEqual(ICONS_SIZES);
});

test("has the same amount of icons in each folder", () => {
    const amountOfIcons = Object.values(dataGroupedBySize).map(group => group.length);
    const unique = [...new Set(amountOfIcons)];

    expect(unique.length).toStrictEqual(1);
});

test("has the same name in all folder", () => {
    expect(Object.values(dataGroupedBySize).length).toBeGreaterThan(1);

    Object.values(dataGroupedBySize)
        .slice(1)
        .forEach(group => {
            const firstGroup = Object.values(dataGroupedBySize)[0].map(icon => icon.name);
            const otherGroup = group.map(icon => icon.name);

            expect(otherGroup).toStrictEqual(firstGroup);
        });
});

allIcons.forEach(icon => {
    describe(`SVG Contents: ${icon.name} ${icon.group}px`, () => {
        const expectedSize = icon.group.toString();
        const expectedViewbox = `0 0 ${expectedSize} ${expectedSize}`;
        const iconAst = unified().use(parse, { fragment: true, space: "svg" }).parse(icon.content);

        it(`has a viewbox of ${expectedViewbox}`, () => {
            const viewBox = select(":root", iconAst)?.properties.viewBox;
            expect(viewBox).toStrictEqual(expectedViewbox);
        });

        it(`has a width and height of ${expectedSize}`, () => {
            const properties = select(":root", iconAst)?.properties;
            expect(properties).not.toBeUndefined();

            const { width, height } = properties!;
            expect(width).toStrictEqual(expectedSize);
            expect(height).toStrictEqual(expectedSize);
        });

        it("has an xml namespace", () => {
            const xmlns = select(":root", iconAst)?.properties.xmlns;
            expect(xmlns).toBe("http://www.w3.org/2000/svg");
        });

        it("has no groups (<g>) or masks (<mask>) or clip path(<clipPath>)", () => {
            const groupNodes = selectAll("g, mask, clipPath", iconAst);

            expect(nodeSources(groupNodes, icon.content)).toStrictEqual([]);
        });
    });
});


function nodeSources(nodes: ReturnType<typeof selectAll>, iconSource: string) {
    return nodes.map(node =>
        iconSource.substring(
            node.position!.start.offset!,
            node.position!.end.offset! - node.position!.start.offset!
        )
    );
}
