import clsx from "clsx";
import type { ComponentProps } from "react";
import Image from "../image/Image";

import "./figure.css";

export interface FigureProps extends ComponentProps<"div">{
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
}

const Figure = ({ alt, caption, className, width, height, src, ...rest }: FigureProps) => {
    const figureClass = clsx("hd-figure", className);

    return (
        <figure className={figureClass} {...rest}>
            <Image className="hd-figure__image" src={src} alt={alt} width={width} height={height} />
            <figcaption className="hd-figure__figcaption"><em>{caption}</em></figcaption>
        </figure>
    );
};

export default Figure;