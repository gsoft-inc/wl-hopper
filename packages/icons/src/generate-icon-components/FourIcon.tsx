/* eslint-disable max-len */ import { createIcon } from "../create-icon.tsx";import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FourIcon16 = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={16} height={16} fill="none" viewBox="0 0 16 16" focusable="false" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM7.315 5.042a.75.75 0 0 0-1.382-.584L4.755 7.245a1.083 1.083 0 0 0 .998 1.505H8.75v2.5a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 1 0-1.5 0v2.5H6.381l.934-2.208Z" /></svg>);const FourIcon24 = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={24} height={24} fill="none" viewBox="0 0 24 24" focusable="false" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M19.5 12a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm1.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM10.97 8.04a.75.75 0 0 0-1.384-.58l-1.585 3.79a1.083 1.083 0 0 0 1 1.501h4.249v3.5a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.5H9.627l1.343-3.21Z" /></svg>);const FourIcon32 = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={32} height={32} fill="none" viewBox="0 0 32 32" focusable="false" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10Zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Zm-13.331-4.608a1 1 0 1 0-1.84-.784l-1.933 4.536c-.375.88.27 1.856 1.226 1.856h5.088v4a1 1 0 1 0 2 0V11a1 1 0 1 0-2 0v4h-4.08l1.538-3.608Z" /></svg>);export const FourIcon = createIcon(FourIcon16, FourIcon24, FourIcon32, "FourIcon");