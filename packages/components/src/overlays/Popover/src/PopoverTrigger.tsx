import { PressResponder } from "@react-aria/interactions";
import { DialogTrigger, type DialogTriggerProps, type PopoverProps } from "react-aria-components";

import { PopoverContext } from "./PopoverContext.ts";

type PropsToPick = "placement" | "shouldFlip" | "isKeyboardDismissDisabled" | "containerPadding" | "offset" | "crossOffset";

export interface PopoverTriggerProps extends DialogTriggerProps, Pick<PopoverProps, PropsToPick> {}

export const PopoverTrigger = (props: PopoverTriggerProps) => {
    const {
        children,
        containerPadding,
        crossOffset,
        isKeyboardDismissDisabled,
        offset,
        placement,
        shouldFlip,
        ...otherProps
    } = props;

    return (
        <DialogTrigger {...otherProps}>
            <PopoverContext.Provider
                value={{
                    placement: placement,
                    shouldFlip: shouldFlip,
                    isKeyboardDismissDisabled: isKeyboardDismissDisabled,
                    containerPadding: containerPadding,
                    offset: offset,
                    crossOffset: crossOffset
                }}
            >
                {/* RAC sets isPressed via PressResponder when the dialog is open.
                We don't want press to appear to get "stuck", so override this. */}
                <PressResponder isPressed={false}>
                    {children}
                </PressResponder>
            </PopoverContext.Provider>
        </DialogTrigger>
    );
};
