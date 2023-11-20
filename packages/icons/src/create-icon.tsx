import { forwardRef, type ElementType, type RefAttributes, type SVGProps } from "react";
import { MultiSourceIcon, type IconProps } from "./Icon.tsx";


export function createIcon(
    src16: ElementType<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>,
    src24: ElementType<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>,
    src32: ElementType<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>,
    displayName: string
) {
    const iconComponent = forwardRef<SVGSVGElement, IconProps>((props, ref) =>
        <MultiSourceIcon
            {...props}
            ref={ref}
            src16={src16}
            src24={src24}
            src32={src32}
        />
    );

    iconComponent.displayName = displayName;

    return iconComponent;
}

