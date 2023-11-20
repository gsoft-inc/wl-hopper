import { useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { filterDOMProps } from "@react-aria/utils";
import clsx from "clsx";
import { forwardRef } from "react";
import { Provider } from "react-aria-components";
import { IconContext } from "./Icon.tsx";
import styles from "./IconList.module.css";

interface IconListProps extends StyledComponentProps<"div">{
    /**
    * The size of the icon list.
    */
    size?: ResponsiveProp<"sm" | "md" | "lg">;
}

/**
 * Icon list component to test the slots
 * @example
 * <IconList>
 *     <Icon src={AzureIcon} />
 *     <Icon src={FilterMajorIcon} />
 * </IconList>
 */
export const IconList = forwardRef<HTMLDivElement, IconListProps>((props, ref) => {
    const {
        children,
        className,
        size,
        ...rest
    } = useStyledSystem(props);

    return (
        <Provider
            values={[
                [IconContext, {
                    size
                }]
            ]}
        >
            <div
                ref={ref}
                {...filterDOMProps(rest)}
                className={clsx(className, styles["hop-icon-list"])}
            >
                {children}
            </div>
        </Provider>
    );
});

IconList.displayName = "IconList";
