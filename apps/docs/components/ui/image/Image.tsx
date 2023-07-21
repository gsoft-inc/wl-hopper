import Image, { type ImageProps } from "next/image";

import "./image.css";

interface NextImageProps extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
    alt: string;
    src: string;
    width: number;
    height: number;
}

const NextImage = ({ alt, src, width, height, ...props }: React.PropsWithoutRef<NextImageProps>) => {
    return <Image alt={alt} src={src} width={width} height={height} className="hd-image" {...props} />;
};

export default NextImage;
