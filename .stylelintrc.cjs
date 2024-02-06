// @ts-check

/** @type {import('stylelint').Config} */
const config = {
    extends: "@workleap/stylelint-configs",
    overrides: [
        {
            files: ["./packages/**/*.css"],
            rules: {
                "property-disallowed-list": [
                    // MARGIN
                    // prefer using margin-block-start, margin-inline-end, margin-block-end, margin-inline-start
                    "margin-top", "margin-right", "margin-bottom", "margin-left",
                    // PADDING
                    // prefer using padding-block-start, padding-inline-end, padding-block-end, padding-inline-start
                    "padding-top", "padding-right", "padding-bottom", "padding-left",
                    // BORDER
                    // prefer using border-block-start, border-inline-end, border-block-end, border-inline-start
                    "border-top", "border-right", "border-bottom", "border-left",
                    // prefer using border-block-start-width, border-inline-end-width, border-block-end-width, border-inline-start-width
                    "border-top-width", "border-right-width", "border-bottom-width", "border-left-width",
                    // prefer using border-block-start-color, border-inline-end-color, border-block-end-color, border-inline-start-color
                    "border-top-color", "border-right-color", "border-bottom-color", "border-left-color",
                    // prefer using border-block-start-style, border-inline-end-style, border-block-end-style, border-inline-start-style
                    "border-top-style", "border-right-style", "border-bottom-style", "border-left-style",
                    // SIZES
                    // Logical properties for sizes depend on context and aren't directly replaced by logical properties but consider using layout techniques that adapt to writing modes, like flexbox or grid.
                    "width", "height",

                    // POSITION
                    // Logical position properties don't have direct equivalents but consider using CSS Grid or Flexbox for layout which can adapt based on direction.
                    "top", "right", "bottom", "left",
                ],
                "declaration-property-value-disallowed-list": {
                    "text-align": [
                        // TEXT ALIGNMENT
                        // Use: text-align: start; or text-align: end; for text alignment that adapts to the directionality of the content.
                        "left", "right",
                    ],
                    "float": [
                        // Avoid: float: left; or float: right;
                        // Use: CSS Grid or Flexbox as alternatives that offer more flexibility and logical alignment without direct logical equivalents.
                        "left", "right",
                    ],
                }
            }
        }
    ]
};

module.exports = config;
