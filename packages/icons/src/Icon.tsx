import { useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { forwardRef, type ComponentProps, type ElementType } from "react";

type IconSize = "sm" | "md" | "lg";

export interface IconProps extends StyledComponentProps<"svg"> {
    size?: ResponsiveProp<IconSize>;
}

export interface MultiVariantIconProps extends IconProps {
    src16: ElementType<ComponentProps<"svg">>;
    src24: ElementType<ComponentProps<"svg">>;
    src32: ElementType<ComponentProps<"svg">>;
}

// TODO: missing slot = "icon"
const Icon = forwardRef<SVGSVGElement, MultiVariantIconProps>((props, ref) => {
    const {
        size = "md",
        src16,
        src24,
        src32,
        ...rest
    } = useStyledSystem(props);

    let src = src16;
    if (size === "md") {
        src = src24;
    } else if (size === "lg") {
        src = src32;
    }

    const As = src;

    /*
        focusable: 'false',
        'aria-label': ariaLabel,
        'aria-hidden': (ariaLabel ? (ariaHidden || undefined) : true),
        role: 'img',

        Size via CSS or props? If it's the only css needed, it sucks to have to transpile css just for this
    */
    return <As ref={ref} width={48} height={48} {...rest} />;
});

Icon.displayName = "MultiVariantIcon";


export function createHopperIcon(
    src16: ElementType<ComponentProps<"svg">>,
    src24: ElementType<ComponentProps<"svg">>,
    src32: ElementType<ComponentProps<"svg">>
) {
    return forwardRef<SVGSVGElement, IconProps>((props, ref) =>
        <Icon
            {...props}
            ref={ref}
            src16={src24}
            src24={src24}
            src32={src32}
        />
    );
}

