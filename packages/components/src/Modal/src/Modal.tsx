import { type ResponsiveProp, type StyledComponentProps, useResponsiveValue, useStyledSystem } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, type ForwardedRef, forwardRef } from "react";
import { composeRenderProps, Dialog, type DialogProps, DialogTrigger, OverlayTriggerStateContext, Provider, useContextProps } from "react-aria-components";

import { ButtonContext, ButtonGroupContext, CloseButton } from "../../buttons/index.ts";
import { HeaderContext } from "../../Header/index.ts";
import { ImageContext } from "../../Image/index.ts";
import { ContentContext, FooterContext } from "../../layout/index.ts";
import { HeadingContext } from "../../typography/index.ts";
import { cssModule, useSlot } from "../../utils/index.ts";

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
    size?: ResponsiveProp<"sm" | "md" | "lg" | "xl">;
    /**
     * Whether the modal is open.
     */
    isOpen?: boolean;
}

const Modal = (props: ModalProps, ref: ForwardedRef<HTMLDivElement>) => {
    [props, ref] = useContextProps(props, ref, ModalContext);
    const [imageRef, hasImage] = useSlot();
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        style,
        slot,
        isDismissible,
        isKeyboardDismissDisabled,
        size: sizeProp,
        isOpen,
        children: childrenProp,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

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

    return (
        <BaseModal
            hasImage={hasImage}
            isOpen={isOpen}
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
                {composeRenderProps(childrenProp, children => (
                    <OverlayTriggerStateContext.Provider value={null}>
                        {isDismissible && <CloseButton className={styles["hop-Modal__close"]} />}
                        <Provider
                            values={[
                                [ImageContext, {
                                    className: styles["hop-Modal__image"],
                                    ref: imageRef
                                }],
                                [HeadingContext, { isHidden: true }],
                                [HeaderContext, { isHidden: true }],
                                [ContentContext, { isHidden: true }],
                                [FooterContext, { isHidden: true }],
                                [ButtonContext, { isHidden: true }],
                                [ButtonGroupContext, { isHidden: true }]
                            ]}
                        >
                            {children}
                        </Provider>
                        <div className={styles["hop-Modal__container"]}>
                            <div className={styles["hop-Modal__container-header"]}>
                                <Provider
                                    values={[
                                        [ImageContext, { isHidden: true }],
                                        [HeadingContext, {
                                            slot: "title",
                                            size: "lg"
                                        }],
                                        [HeaderContext, { }],
                                        [ContentContext, { isHidden: true }],
                                        [FooterContext, { isHidden: true }],
                                        [ButtonContext, { isHidden: true }],
                                        [ButtonGroupContext, { isHidden: true }]
                                    ]}
                                >
                                    {children}
                                </Provider>
                            </div>
                            <div className={styles["hop-Modal__container-body"]}>
                                <Provider
                                    values={[
                                        [ImageContext, { isHidden: true }],
                                        [HeadingContext, { isHidden: true }],
                                        [HeaderContext, { isHidden: true }],
                                        [ContentContext, {
                                            className: styles["hop-Modal__container-body-content"]
                                        }],
                                        [FooterContext, { isHidden: true }],
                                        [ButtonContext, { isHidden: true }],
                                        [ButtonGroupContext, { isHidden: true }]
                                    ]}
                                >
                                    {children}
                                </Provider>
                            </div>
                            <div className={styles["hop-Modal__container-footer"]}>
                                <Provider
                                    values={[
                                        [ImageContext, { isHidden: true }],
                                        [HeadingContext, { isHidden: true }],
                                        [HeaderContext, { isHidden: true }],
                                        [ContentContext, { isHidden: true }],
                                        [FooterContext, {}],
                                        [ButtonContext, {
                                            className: styles["hop-Modal__container-footer-button"]
                                        }],
                                        [ButtonGroupContext, {
                                            className: styles["hop-Modal__container-footer-button-group"]
                                        }]
                                    ]}
                                >
                                    {children}
                                </Provider>
                            </div>
                        </div>
                    </OverlayTriggerStateContext.Provider>
                ))}
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
