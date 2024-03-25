import clsx from "clsx";

const PreviewSkeleton = ({ overlay = false }: { overlay?: boolean }) => <div
    className={clsx("hd-preview-component--skeleton", {
        "hd-preview-component--skeleton-overlay": overlay
    })}
/>;

export default PreviewSkeleton;
