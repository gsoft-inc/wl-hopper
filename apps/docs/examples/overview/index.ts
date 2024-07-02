import type { FunctionComponent, SVGProps } from "react";

import Button from "./Button.svg";

type SvgComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

interface OverviewComponentsType {
    [key: string]: SvgComponent;
}

export const OverviewComponents: OverviewComponentsType = { Button };
