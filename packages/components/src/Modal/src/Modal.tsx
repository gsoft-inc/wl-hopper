import { type StyledComponentProps, useStyledSystem } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, type ForwardedRef, forwardRef } from "react";
import { composeRenderProps, Dialog, type DialogProps, DialogTrigger, OverlayTriggerStateContext, Provider, useContextProps } from "react-aria-components";

import { ButtonContext, ButtonGroupContext } from "../../buttons/index.ts";
import { HeaderContext } from "../../Header/index.ts";
import { ImageContext } from "../../Image/index.ts";
import { ContentContext, FooterContext } from "../../layout/index.ts";
import { HeadingContext } from "../../typography/index.ts";
import { cssModule } from "../../utils/index.ts";

import { BaseModal } from "./BaseModal.tsx";
import { ModalContext } from "./ModalContext.ts";

import styles from "./Modal.module.css";

export const GlobalModalCssSelector = "hop-Modal";

export interface ModalProps extends StyledComponentProps<DialogProps> {
    /**
     * Whether the Modal is dismissible.
     */
    isDismissible?: boolean;
    /**
     * Whether pressing the escape key to close the dialog should be disabled.
     */
    isKeyboardDismissDisabled?: boolean;
    /**
     * The size of the modal.
     * @default "md"
     */
    size?: "sm" | "md" | "lg" | "xl";
}

const Modal = (props: ModalProps, ref: ForwardedRef<HTMLDivElement>) => {
    [props, ref] = useContextProps(props, ref, ModalContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        style,
        slot,
        isDismissible,
        isKeyboardDismissDisabled,
        size = "md",
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        GlobalModalCssSelector,
        cssModule(
            styles,
            GlobalModalCssSelector,
            size
        ),
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...style,
        ...stylingProps.style
    };

    const children = composeRenderProps(otherProps.children, prev => {
        return prev;
    });

    return (
        <BaseModal
            size={size}
            isDismissable={isDismissible}
            isKeyboardDismissDisabled={isKeyboardDismissDisabled}
        >
            <Dialog
                {...otherProps}
                ref={ref}
                className={classNames}
                style={mergedStyles}
                slot={slot}
            >
                {renderProps => (
                    <OverlayTriggerStateContext.Provider value={null}>
                        <Provider
                            values={[
                                [ImageContext, {
                                    className: styles["hop-Modal__image"]
                                }],
                                [HeadingContext, {
                                    className: styles["hop-Modal__heading"]
                                }],
                                [HeaderContext, {
                                    className: styles["hop-Modal__header"]
                                }],
                                [ContentContext, {
                                    className: styles["hop-Modal__content"]
                                }],
                                [FooterContext, {
                                    className: styles["hop-Modal__footer"]
                                }],
                                [ButtonContext, {
                                    className: styles["hop-Modal__button"]
                                }],
                                [ButtonGroupContext, {
                                    className: styles["hop-Modal__buttonGroup"]
                                }]
                            ]}
                        >
                            {children(renderProps)}
                        </Provider>
                    </OverlayTriggerStateContext.Provider>
                )}
            </Dialog>
        </BaseModal>
    );
};

/**
 * Modals focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content.
 *
 * [View Documentation](https://hopper.workleap.design/components/Modal)
 */
const _Modal = forwardRef<HTMLDivElement, ModalProps>(Modal);
_Modal.displayName = "Modal";

export { _Modal as Modal };

export const ModalTrigger = DialogTrigger;
