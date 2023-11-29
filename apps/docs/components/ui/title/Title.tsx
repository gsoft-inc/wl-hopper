import formattingTitleId from "@/utils/formattingTitleId";
import clsx from "clsx";

import "./title.css";

export interface TitleProps {
    as?: "h1" | "h2" | "h3" | "h4" | "h5";
    level?: 1 | 2 | 3 | 4 | 5;
    className?: string;
}

const Title = ({
    as = "h1",
    level = 1,
    className,
    children,
    ...rest
}: React.PropsWithChildren<TitleProps>) => {
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
            {level > 1 ? (
                <a href={`#${uniqueId}`} className="hd-title-link">
                    {children}
                </a>
            ) : (
                children
            )}
        </Component>
    );
};

export default Title;
