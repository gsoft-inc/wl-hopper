import type { TagVariant } from "../src/Tag.tsx";

// TODO: Remove this when Orbiter is not used anymore
type OrbiterVariant = "informative" | "warning";

export function mapOrbiterToHopperVariants(variant: TagVariant | OrbiterVariant): TagVariant {
    if (variant === "informative") {
        return "option1";
    }

    if (variant === "warning") {
        return "option6";
    }

    return variant;
}
