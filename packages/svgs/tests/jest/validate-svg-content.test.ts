/* import { select } from "hast-util-select";
import parse from "rehype-parse";
import { unified } from "unified"; */

import { loadIcons } from "../../src/scripts/load-icons.ts";
import { ICONS_SOURCE_DIR, ICONS_SIZES } from "../../src/scripts/constants.ts";

const allIcons = await loadIcons(ICONS_SOURCE_DIR);


describe("icons", () => {
    const dataGroupedBySize = ICONS_SIZES.map(s => allIcons.filter(d => d.group === s));
    /* const iconAst = unified().use(parse, { fragment: true, space: "svg" }).parse(icon.content);
        const expectedViewbox = `0 0 ${icon.group} ${icon.group}`; */
        

    /* it(`has a viewbox of "${expectedViewbox}"`, () => {
            const viewBox = select(":root", iconAst)?.properties?.viewBox;
            expect(viewBox).toStrictEqual(expectedViewbox);
        }); */

    it("has the same amount of icons in each folder", () => {
        const amountOfIcons = dataGroupedBySize.map(group => group.length);
        const unique = [...new Set(amountOfIcons)];

        expect(unique.length).toStrictEqual(1);
    });

    it("the first group contains the same names as the others", () => {
        const firstGroup = dataGroupedBySize[0].map(icon => icon.name);
        const otherGroups = dataGroupedBySize.slice(1).map(group => group.map(icon => icon.name));

        otherGroups.forEach(group => {
            expect(group).toStrictEqual(firstGroup);
        });
    });
});