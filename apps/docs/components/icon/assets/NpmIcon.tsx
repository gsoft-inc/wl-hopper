import { forwardRef, type Ref, type SVGProps } from "react";

const NpmIcon = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
>
    <path d="M1 15H8V4.5H11.5V15H15V1H1V15Z" fill="currentColor" />
</svg>);

export default NpmIcon;
