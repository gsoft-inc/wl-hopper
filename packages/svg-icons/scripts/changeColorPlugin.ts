const colorsProps = new Set([
    "color",
    "fill",
    "flood-color",
    "lighting-color",
    "stop-color",
    "stroke"
]);

export const changeColorPlugin = {
    name: "changeColorPlugin",
    description: "Change the color of the SVGs",
    fn: () => {
        const colors: { [key: string]: string } = {
            "#fff": "var(--hop-richicon-placeholder-neutral-surface, #fff)",
            "#2A2620": "var(--hop-richicon-placeholder-background, #2A2620)",
            "#E5DED6": "var(--hop-richicon-placeholder-foreground, #E5DED6)"
        };

        return {
            element: {
                enter: (node: any) => {
                    // console.log(node);
                    for (const [nodeName, nodeValue] of Object.entries(node.attributes)) {
                        if (colorsProps.has(nodeName)) {
                            let value = nodeValue as string;

                            console.log(`Found color ${value}`);

                            if (colors[value]) {
                                value = colors[value];
                                // console.log(`Changing color from ${nodeValue} to ${value}`);
                            }
                            node.attributes[nodeName] = value;
                        }
                    }
                }
            }
        };
    }
};
