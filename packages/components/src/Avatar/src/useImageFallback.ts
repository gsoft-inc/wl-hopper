import { useState, useEffect, type ReactEventHandler } from "react";

export function useImageFallback(firstChoice: string = "", fallback?: string | null): [string, ReactEventHandler<HTMLImageElement> | undefined, boolean] {
    const [imageUrl, setImageUrl] = useState<string>(firstChoice);
    const [imageFailed, setImageFailed] = useState<boolean>(false);

    useEffect(() => {
        setImageUrl(firstChoice);
        setImageFailed(false); // Reset fallback failure state when firstChoice or fallback changes
    }, [firstChoice, fallback]);

    const handleImageError: ReactEventHandler<HTMLImageElement> | undefined = () => {
        // Don't set the fallback image if it's the same as the first choice or if it's already being used or if no fallback was passed
        if (firstChoice !== fallback && imageUrl === firstChoice && fallback) {
            setImageUrl(fallback);
        } else if (imageUrl === fallback || !fallback) {
            // If the fallback image also fails or no fallback is provided, indicate failure
            setImageFailed(true);
        }
    };

    return [imageUrl, handleImageError, imageFailed];
}