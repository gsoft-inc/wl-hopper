import { IconContext, BulletIcon } from "@hopper-ui/icons";
import {
    type StyledComponentProps,
    useStyledSystem,
    type ResponsiveProp,
    useResponsiveValue
} from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import {
    useContextProps,
    Radio as RACRadio,
    type RadioProps as RACRadioProps,
    composeRenderProps
} from "react-aria-components";

import { IconListContext } from "../../IconList/index.ts";
import { Text, TextContext } from "../../typography/Text/index.ts";
import {
    composeClassnameRenderProps,
    SlotProvider,
    cssModule,
    isTextOnlyChildren,
    ClearContainerSlots
} from "../../utils/index.ts";

import { RadioContext } from "./RadioContext.ts";

import styles from "./Radio.module.css";

export const GlobalRadioCssSelector = "hop-Radio";

export interface RadioProps extends StyledComponentProps<RACRadioProps> {
    /**
     * A radio can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;
}

function Radio(props: RadioProps, ref: ForwardedRef<HTMLLabelElement>) {
    [props, ref] = useContextProps(props, ref, RadioContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children: childrenProp,
        size: sizeProp = "md",
        style: styleProp,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalRadioCssSelector,
        cssModule(
            styles,
            "hop-Radio",
            size
        ),
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const children = composeRenderProps(childrenProp, prev => {
        if (prev && isTextOnlyChildren(prev)) {
            return <Text>{prev}</Text>;
        }

        return prev;
    });

    return (
        <RACRadio
            ref={ref}
            className={classNames}
            style={style}
            {...otherProps}
        >
            {radioProps => {
                const radioIconClassName = styles["hop-Radio__bullet"];

                return (
                    <>
                        <div className={styles["hop-Radio__box"]}>
                            <BulletIcon size={size} className={radioIconClassName} />
                        </div>
                        <ClearContainerSlots>
                            <SlotProvider
                                values={[
                                    [TextContext, {
                                        className: styles["hop-Radio__text"],
                                        size: size
                                    }],
                                    [IconListContext, {
                                        className: styles["hop-Radio__icon-list"],
                                        size: size
                                    }],
                                    [IconContext, {
                                        className: styles["hop-Radio__icon"],
                                        size: size
                                    }]
                                ]}
                            >
                                {children(radioProps)}
                            </SlotProvider>
                        </ClearContainerSlots>
                    </>
                );
            }}
        </RACRadio>
    );
}

/**
 * The Radio component indicates the selection state of an option. It displays either one of three states: checked, unchecked, or indeterminate.
 *
 * [View Documentation](TODO)
 */
const _Radio = forwardRef<HTMLLabelElement, RadioProps>(Radio);
_Radio.displayName = "Radio";

export { _Radio as Radio };
