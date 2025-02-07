import { type StyledComponentProps, useStyledSystem } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, type ForwardedRef, forwardRef } from "react";
import { ModalOverlay, type ModalOverlayProps, type ModalRenderProps, Modal as RACModal, useContextProps } from "react-aria-components";

import { cssModule } from "../../utils/index.ts";

import { BaseModalContext } from "./BaseModalContext.ts";

import styles from "./BaseModal.module.css";

export const GlobalBaseModalCssSelector = "hop-BaseModal";

export interface BaseModalProps extends StyledComponentProps<ModalOverlayProps> {
    /**
     * The size of the modal.
     * @default "md"
     */
    size?: "sm" | "md" | "lg" | "xl" | "fullscreen" | "fullscreenTakeover";
}

const BaseModal = (props: BaseModalProps, ref: ForwardedRef<HTMLDivElement>) => {
    [props, ref] = useContextProps(props, ref, BaseModalContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        style,
        slot,
        size = "md",
        ...otherProps
    } = ownProps;

    const classNames = (renderProps: ModalRenderProps) => clsx(
        GlobalBaseModalCssSelector,
        cssModule(
            styles,
            GlobalBaseModalCssSelector,
            size.toLowerCase(),
            renderProps.isEntering && "entering",
            renderProps.isExiting && "exiting"
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
            <RACModal ref={ref} className={styles["hop-BaseModal__modal"]} />
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
