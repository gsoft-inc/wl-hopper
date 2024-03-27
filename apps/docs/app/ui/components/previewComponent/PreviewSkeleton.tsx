import clsx from "clsx";

interface PreviewSkeletonProps {
    overlay?: boolean;
}

const PreviewSkeleton = ({ overlay = false }: PreviewSkeletonProps) => <div
    className={clsx("hd-preview-component--skeleton", {
        "hd-preview-component--skeleton-overlay": overlay
    })}
/>;

export default PreviewSkeleton;
