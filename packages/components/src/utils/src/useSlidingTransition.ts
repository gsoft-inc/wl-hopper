import { type RefObject, useCallback, useEffect, useReducer } from "react";

import { isNil } from "./assertion.ts";
import { match } from "./match.ts";
import { useCommittedRef } from "./useCommittedRef.ts";
import { useDisposables } from "./useDisposables.ts";
import { useIsInitialRender } from "./useIsInitialRender.ts";

type ActionType = "slideDown" | "slideUp" | "completeTransition";

type TransitionState = "transitioning" | "completed";

type SlidingDirection = "down" | "up";

export interface SlidingTransitionState {
    direction: SlidingDirection;
    transitionState: TransitionState;
}

function reducer(state: SlidingTransitionState, action: ActionType) {
    return match<ActionType, SlidingTransitionState>(action, {
        "completeTransition": () => ({
            direction: state.direction,
            transitionState: "completed"
        }),
        "slideDown": () => ({
            direction: "down",
            transitionState: "transitioning"
        }),
        "slideUp": () => ({
            direction: "up",
            transitionState: "transitioning"
        })
    });
}

export interface SlidingTransition {
    transitionClasses: string;
    transitionProps: {
        onTransitionEnd?: () => void;
    };
}

// For a better understanding of the techniques behind this animation, read https://css-tricks.com/using-css-transitions-auto-dimensions/#technique-3-javascript
// and have a look at https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Collapse.tsx
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useSlidingTransition(isOpen: boolean, ref: RefObject<any>): SlidingTransition {
    const [{ direction, transitionState }, dispatch] = useReducer(reducer, {
        direction: isOpen ? "down" : "up",
        transitionState: "completed"
    });

    const disposables = useDisposables();

    const slideDown = useCallback(() => { dispatch("slideDown"); }, [dispatch]);
    const slideUp = useCallback(() => { dispatch("slideUp"); }, [dispatch]);
    const completeTransition = useCallback(() => { dispatch("completeTransition"); console.log("yes"); }, [dispatch]);

    const isInitialRender = useCommittedRef(useIsInitialRender());

    useEffect(() => {
        if (!isInitialRender.current) {
            if (isOpen) {
                slideDown();
            } else {
                slideUp();
            }
        }
    }, [isOpen, isInitialRender, slideDown, slideUp]);

    useEffect(() => {
        match(transitionState, {
            "completed": () => {
                disposables.nextFrame(() => {
                    if (!isNil(ref.current)) {
                        ref.current.style.height = null;
                    }
                });
            },
            "transitioning": () => {
                match(direction, {
                    "down": () => {
                        disposables.nextFrame(() => {
                            if (!isNil(ref.current)) {
                                ref.current.style.height = "0px";
                                ref.current.style.opacity = "0";

                                disposables.nextFrame(() => {
                                    if (!isNil(ref.current)) {
                                        ref.current.style.height = `${ref.current.scrollHeight}px`;
                                        ref.current.style.opacity = "1";
                                    }
                                });
                            }
                        });
                    },
                    "up": () => {
                        if (!isNil(ref.current)) {
                            ref.current.style.height = `${ref.current.scrollHeight}px`;

                            disposables.nextFrame(() => {
                                if (!isNil(ref.current)) {
                                    ref.current.style.height = "0px";
                                    ref.current.style.opacity = "0";
                                }
                            });
                        }
                    }
                });
            }
        });
    }, [transitionState, direction, disposables, ref]);

    return match(transitionState, {
        "completed": () => ({
            transitionClasses: direction === "down" ? "expanded" : "collapsed",
            transitionProps: {}
        }),
        "transitioning": () => ({
            transitionClasses: direction === "down" ? "expanding" : "collapsing",
            transitionProps: { onTransitionEnd: completeTransition }
        })
    });
}

