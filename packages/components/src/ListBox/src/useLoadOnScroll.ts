import { useIsomorphicLayoutEffect } from "@hopper-ui/styled-system";
import { useCallback, useRef, useState, type RefObject } from "react";

export interface LoadOnScrollProps {
    /** Whether data is currently being loaded. */
    isLoading?: boolean;
    /** Handler that is called when more items should be loaded, e.g. while scrolling near the bottom.  */
    onLoadMore?: () => void;
    /**
     * The amount of offset (in pixels) from the bottom of your scrollable region that should trigger load more.
     * @default 5
     */
    scrollOffset?: number;
}

export function useLoadOnScroll(props: LoadOnScrollProps, ref: RefObject<HTMLElement | null>): () => void {
    const { isLoading, onLoadMore, scrollOffset = 5 } = props;
    const [hasLoaded, setHasLoaded] = useState(false);

    // Handle scrolling, and call onLoadMore when nearing the bottom.
    const isLoadingRef = useRef(isLoading);
    const prevProps = useRef(props);
    const onScroll = useCallback(() => {
        if (ref.current && !isLoadingRef.current && onLoadMore) {
            const shouldLoadMore = ref.current.scrollHeight - ref.current.scrollTop - ref.current.clientHeight < scrollOffset;

            if (shouldLoadMore) {
                isLoadingRef.current = true;
                onLoadMore();
            }
        }
    }, [onLoadMore, ref, scrollOffset]);

    const lastContentSize = useRef(0);

    useIsomorphicLayoutEffect(() => {
        // Only update isLoadingRef if props object actually changed,
        // not if a local state change occurred.
        const wasLoading = isLoadingRef.current;
        if (props !== prevProps.current) {
            isLoadingRef.current = isLoading;
            prevProps.current = props;
        }

        // This actually calls loadMore twice in succession on initial load because after the first load,
        // the scrollable element hasn't yet received its new height with the newly loaded items... Because of RAC collection needing two renders?
        const shouldLoadMore = !hasLoaded
            && ref?.current
            && !isLoadingRef.current
            && onLoadMore
            && ref.current.clientHeight === ref.current.scrollHeight
            // Only try loading more if the content size changed, or if we just finished
            // loading and still have room for more items.
            && (wasLoading || ref.current.scrollHeight !== lastContentSize.current);

        if (shouldLoadMore) {
            isLoadingRef.current = true;
            onLoadMore?.();
            setHasLoaded(true);
        }
        lastContentSize.current = ref.current?.scrollHeight || 0;

        return () => {
            setHasLoaded(false);
        };
    }, [isLoading, onLoadMore, props, ref]);

    return onScroll;
}