/* eslint-disable max-len */ import { createIcon } from "../create-icon.tsx";import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalendarIcon16 = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={16} height={16} fill="none" viewBox="0 0 16 16" focusable="false" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6.5 1.75a.75.75 0 0 0-1.5 0V2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2v-.25a.75.75 0 1 0-1.5 0V2h-3v-.25ZM10.25 4a.75.75 0 0 1-.707-.5H6.457a.75.75 0 0 1-1.414 0H3.5v2h9v-2h-1.542a.75.75 0 0 1-.708.5Zm2.25 3h-9v5.5h9V7Z" /></svg>);const CalendarIcon24 = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={24} height={24} fill="none" viewBox="0 0 24 24" focusable="false" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.503 3.75a.75.75 0 0 0-1.5 0V4H5.5A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 4H17v-.25a.75.75 0 0 0-1.5 0V4H8.503v-.25Zm6.997 2.5V5.5H8.503v.75a.75.75 0 0 1-1.5 0V5.5H5.5V8h13V5.5H17v.75a.75.75 0 0 1-1.5 0Zm3 3.25h-13v9h13v-9Z" /></svg>);const CalendarIcon32 = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={32} height={32} fill="none" viewBox="0 0 32 32" focusable="false" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 5a1 1 0 1 0-2 0v1H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V5a1 1 0 1 0-2 0v1h-8V5Zm12 7V8h-2v1a1 1 0 1 1-2 0V8h-8v1a1 1 0 1 1-2 0V8H8v4h16ZM8 14v10h16V14H8Z" /></svg>);export const CalendarIcon = createIcon(CalendarIcon16, CalendarIcon24, CalendarIcon32, "CalendarIcon");