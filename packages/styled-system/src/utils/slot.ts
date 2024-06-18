/**
 * THIS FILE IS MEANT TO BE TEMPORARY. This function's only utility is to allow us to use Hopper components in Orbiter.
 * TODO: Once Orbiter is gone, this file and function should be removed.
 */

const SlotKey = "__slot__";

/**
 * This methods allows us to define a slot name for a component. This is useful for Orbiter to know where to place the component.
 * @example
 * // In Orbiter's codebase, they load slot's content using the useSlots hook.
 *   const { button } = useSlots(children, useMemo(() => ({
 *       button: {
 *           className: "o-ui-dialog-button"
 *       },
 *   }), [sizeValue, disabled, loading]));
 *
 * // In Hopper, our button component should  be wrapped in the slot function.
 * const _Button = slot("button", forwardRef(Button));
 */
export function slot<P>(slotName: string, ElementType: P) {
    (ElementType as Record<string, unknown>)[SlotKey] = slotName;

    return ElementType;
}
