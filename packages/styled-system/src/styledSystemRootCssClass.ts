import packageJson from "../package.json";

export const HopperRootCssClass = "hop";

// We read the version from the packageJson and replace all dots with dashes.
// This ensures that multiple versions of the Styled System can be used on the same page.
export const StyledSystemRootCssClass = `${HopperRootCssClass}-${packageJson.version.replaceAll(".", "-")}`;
