/* eslint-disable max-len */ import { createIcon } from "../create-icon.tsx";import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StarIcon16 = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={16} height={16} fill="none" viewBox="0 0 16 16" focusable="false" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6.88 1.698c.458-.929 1.782-.929 2.24 0l1.4 2.834 3.127.455c1.025.149 1.434 1.409.692 2.132l-2.262 2.206.534 3.114c.175 1.021-.897 1.8-1.814 1.318L8 12.287l-2.797 1.47c-.917.482-1.989-.297-1.814-1.318l.534-3.114L1.66 7.119c-.741-.723-.332-1.983.693-2.132l3.127-.455 1.4-2.834ZM8 2.816 6.767 5.314a1.25 1.25 0 0 1-.94.684l-2.757.4 1.994 1.944c.295.287.43.701.36 1.107l-.47 2.745 2.464-1.296a1.25 1.25 0 0 1 1.164 0l2.465 1.296-.471-2.745a1.25 1.25 0 0 1 .36-1.107l1.994-1.944-2.756-.4a1.25 1.25 0 0 1-.941-.684L8 2.816Z" /></svg>);const StarIcon24 = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={24} height={24} fill="none" viewBox="0 0 24 24" focusable="false" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.655 4.03c.55-1.114 2.14-1.114 2.69 0l1.798 3.644 4.02.584c1.23.179 1.722 1.69.832 2.559l-2.91 2.835.687 4.005c.21 1.225-1.076 2.16-2.176 1.58L12 17.348l-3.596 1.89c-1.1.58-2.387-.355-2.176-1.58l.686-4.005-2.909-2.835c-.89-.868-.399-2.38.832-2.559l4.02-.584 1.798-3.643ZM12 4.696l-1.798 3.643a1.5 1.5 0 0 1-1.13.82l-4.02.585 2.91 2.835a1.5 1.5 0 0 1 .43 1.328l-.686 4.004 3.596-1.89a1.5 1.5 0 0 1 1.396 0l3.596 1.89-.687-4.004a1.5 1.5 0 0 1 .432-1.328l2.909-2.835-4.02-.585a1.5 1.5 0 0 1-1.13-.82L12 4.695Z" /></svg>);const StarIcon32 = forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={32} height={32} fill="none" viewBox="0 0 32 32" focusable="false" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M14.207 5.374c.733-1.486 2.853-1.486 3.586 0l2.398 4.858 5.36.779c1.64.238 2.296 2.254 1.109 3.411l-3.88 3.781.916 5.34c.28 1.633-1.434 2.879-2.901 2.108L16 23.13l-4.795 2.52c-1.467.772-3.182-.474-2.902-2.108l.916-5.339-3.879-3.78c-1.187-1.158-.532-3.174 1.109-3.412l5.36-.78 2.398-4.857Zm4.19 5.743L16 6.26l-2.397 4.857a2 2 0 0 1-1.506 1.094l-5.36.78 3.878 3.78a2 2 0 0 1 .575 1.77l-.915 5.34 4.794-2.521a2 2 0 0 1 1.862 0l4.794 2.52-.915-5.339a2 2 0 0 1 .575-1.77l3.879-3.78-5.36-.78a2 2 0 0 1-1.507-1.094Z" /></svg>);export const StarIcon = createIcon(StarIcon16, StarIcon24, StarIcon32, "StarIcon");