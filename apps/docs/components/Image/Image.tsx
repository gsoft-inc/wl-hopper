import Image, { type ImageProps } from "next/image";

import "./image.css";

interface NextImageProps extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
    alt: string;
    src: string;
    width: number;
    height: number;
}

export const NextImage: React.FC<NextImageProps> = ({ alt, src, width, height, ...props }) => {
    return <Image alt={alt} src={src} width={width} height={height} className="hd-image" {...props} />;
};
