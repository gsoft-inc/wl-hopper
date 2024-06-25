import { useIsomorphicLayoutEffect } from "@hopper-ui/styled-system";
import { useState, type ReactEventHandler, useCallback, useRef, type SyntheticEvent, useEffect } from "react";

export interface ImageFallbackProps {
    /**
     * The URL of the first choice image to load.
     */
    src?: string;
    /**
     * The URL of the fallback image to load if the first choice fails.
     */
    fallbackSrc?: string | null;
    /**
     * The function to call when the image is loaded.
     */
    onLoad?: ReactEventHandler<HTMLImageElement>;
    /**
     * The function to call when the image fails to load.
     */
    onError?: ReactEventHandler<HTMLImageElement>;
}

type Status = "loading" | "failed" | "pending" | "loaded";
type ImageEvent = SyntheticEvent<HTMLImageElement, Event>;

export function useImageFallback(props: ImageFallbackProps): [string, Status] {
    const { src, fallbackSrc, onError, onLoad } = props;
    const [status, setStatus] = useState<Status>("pending");
    const [imageUrl, setImageUrl] = useState<string>(src ?? "");

    useEffect(() => {
        setStatus(src ? "loading" : "pending");
    }, [src]);

    const imageRef = useRef<HTMLImageElement | null>();

    const load = useCallback(() => {
        if (!src) {return;}
    
        flush();

        const image = new Image();

        image.src = src; // Start loading the initial image
        setImageUrl(src);

        image.onload = event => {
            flush();
            setStatus("loaded");
            onLoad?.(event as unknown as ImageEvent);
        };

        image.onerror = event => {
            // Only set the fallback image if it is different from the first choice, the current src is the same as src, and a fallback is provided
            if (src !== fallbackSrc && image.src === src && fallbackSrc) {
                setImageUrl(fallbackSrc);
                image.src = fallbackSrc; // Change source to fallback URL
            } else {
                setStatus("failed");
                flush();
            }
            onError?.(event as unknown as ImageEvent);
        };
        
        imageRef.current = image;
    }, [src, onLoad, fallbackSrc, onError]);

    const flush = () => {
        if (imageRef.current) {
            imageRef.current.onload = null;
            imageRef.current.onerror = null;
            imageRef.current = null;
        }
    };

    useIsomorphicLayoutEffect(() => {
        if (status === "loading") {
            load();
        }
    
        return () => {
            flush();
        };
    }, [status, load]);

    return [imageUrl, status];
}