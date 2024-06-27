import formattingTitleId from "@/app/lib/formattingTitleId";
import clsx from "clsx";

import "./title.css";
import Link from "next/link";
import type { PropsWithChildren } from "react";

export interface TitleProps {
    as?: "h1" | "h2" | "h3" | "h4" | "h5";
    level?: 1 | 2 | 3 | 4 | 5;
    interactive?: boolean;
    className?: string;
}

const Title = ({
    as = "h1",
    level = 1,
    interactive = false,
    className,
    children,
    ...rest
}: PropsWithChildren<TitleProps>) => {
    const Component = as;

    if (children == null) {
        return null;
    }

    const uniqueId = formattingTitleId(children.toString());

    return (
        <Component
            className={clsx("hd-title", className, {
                [`hd-title--level${level}`]: level
            })}
            id={level > 1 ? uniqueId : undefined}
            data-section-title={level === 2 ? uniqueId : undefined}
            {...rest}
        >
            {interactive ? (
                <Link href={`#${uniqueId}`} className="hd-title-link">
                    {children}
                </Link>
            ) : (
                children
            )}
        </Component>
    );
};

export default Title;
