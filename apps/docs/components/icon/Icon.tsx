import { forwardRef, type ElementType, type RefAttributes, type SVGProps } from "react";
import { useContextProps, type SlotProps } from "react-aria-components";

import { IconContext } from "./IconContext.ts";

export interface IconProps extends SlotProps {
    src: ElementType<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    className?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    [props, ref] = useContextProps({ ...props, slot: props.slot || "hd-icon" }, ref, IconContext);
    const { src, ...otherProps } = props;

    const Component = src;

    return <Component ref={ref} {...otherProps} />;
});

export default Icon;
