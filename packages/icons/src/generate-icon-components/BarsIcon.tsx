/* eslint-disable max-len */ import { createIcon } from "../create-icon.tsx";import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BarsIcon16 = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={16} height={16} fill="none" viewBox="0 0 16 16" focusable="false" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M1.068 2.752a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Zm0 5.248a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5h-12.5Z" /></svg>);const BarsIcon24 = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={24} height={24} fill="none" viewBox="0 0 24 24" focusable="false" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2.998 5.75a.75.75 0 0 1 .75-.75h16.504a.75.75 0 0 1 0 1.5H3.748a.75.75 0 0 1-.75-.75Zm0 6.25a.75.75 0 0 1 .75-.75h16.504a.75.75 0 0 1 0 1.5H3.748a.75.75 0 0 1-.75-.75Zm.75 5.5a.75.75 0 0 0 0 1.5h16.504a.75.75 0 0 0 0-1.5H3.748Z" /></svg>);const BarsIcon32 = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={32} height={32} fill="none" viewBox="0 0 32 32" focusable="false" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 7a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 9a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 8a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2z" /></svg>);export const BarsIcon = createIcon(BarsIcon16, BarsIcon24, BarsIcon32, "BarsIcon");