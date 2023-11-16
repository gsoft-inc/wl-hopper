import { readdirSync, readFileSync } from "fs";
import { select, selectAll } from "hast-util-select";
import path from "path";
import parse from "rehype-parse";
import { unified } from "unified";
import { fileURLToPath } from "url";
import { IconSizes, IconsSourceDirectory } from "../../scripts/constants.ts";

const iconsSrcPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), `../../${IconsSourceDirectory}`);

const allIconsContent = IconSizes.flatMap(size => {
    return readdirSync(`${iconsSrcPath}/${size}px`, { recursive: true, withFileTypes: true })
        .filter(file => file.isFile() && file.name.endsWith(".svg"))
        .map(file => {
            return {
                name: file.name,
                size,
                content: readFileSync(path.resolve(file.path, file.name), "utf8")
            };
        });
});

const dataGroupedBySize = allIconsContent.reduce((acc, icon) => {
    if (!acc[icon.size]) {
        acc[icon.size] = [icon.name];
    } else {
        acc[icon.size].push(icon.name);
    }

    return acc;
}, {} as Record<typeof IconSizes[number], string[]>);

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
            const firstGroup = Object.values(dataGroupedBySize)[0].map(icon => icon);
            const otherGroup = group.map(icon => icon);

            expect(otherGroup).toStrictEqual(firstGroup);
        });
});

allIconsContent.forEach(icon => {
    describe(`SVG Contents: ${icon.name} ${icon.size}px`, () => {
        const expectedSize = icon.size.toString();
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
