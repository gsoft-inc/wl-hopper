import { type ResponsiveProp, type StyledComponentProps, useResponsiveValue, useStyledSystem } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, type ForwardedRef, forwardRef } from "react";
import { ModalOverlay, type ModalOverlayProps, type ModalRenderProps, Modal as RACModal, useContextProps } from "react-aria-components";

import { HopperProvider, useForwardedHopperContext } from "../../HopperProvider/index.ts";
import { cssModule } from "../../utils/index.ts";

import { BaseModalContext } from "./BaseModalContext.ts";

import styles from "./BaseModal.module.css";

export const GlobalBaseModalCssSelector = "hop-BaseModal";

export interface BaseModalProps extends StyledComponentProps<ModalOverlayProps> {
    /**
     * The size of the modal.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md" | "lg" | "xl" | "fullscreen" | "fullscreenTakeover">;
    /**
     * Whether the modal has an image.
     */
    hasImage?: boolean;
}

const BaseModal = (props: BaseModalProps, ref: ForwardedRef<HTMLDivElement>) => {
    [props, ref] = useContextProps(props, ref, BaseModalContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        style,
        slot,
        size: sizeProp,
        children,
        hasImage,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";
    const prevContextProps = useForwardedHopperContext();
    const classNames = (renderProps: ModalRenderProps) => clsx(
        GlobalBaseModalCssSelector,
        cssModule(
            styles,
            GlobalBaseModalCssSelector,
            size.toLowerCase(),
            renderProps.isEntering && "entering",
            renderProps.isExiting && "exiting",
            hasImage && "image"
        ),
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...style,
        ...stylingProps.style
    };

    return (
        <ModalOverlay
            className={classNames}
            style={mergedStyles}
            slot={slot}
            {...otherProps}
        >
            <HopperProvider {...prevContextProps}>
                <RACModal {...otherProps} ref={ref} className={styles["hop-BaseModal__modal"]}>
                    {children}
                </RACModal>
            </HopperProvider>
        </ModalOverlay>
    );
};

/**
 * A BaseModal is an overlay element which blocks interaction with elements outside it.
 *
 * [View Documentation](https://hopper.workleap.design/components/Modal)
 */
const _BaseModal = forwardRef<HTMLDivElement, BaseModalProps>(BaseModal);
_BaseModal.displayName = "BaseModal";

export { _BaseModal as BaseModal };
