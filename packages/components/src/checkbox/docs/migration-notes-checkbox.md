Coming from Orbiter, you should be aware of the following changes:

- `onChange` signature has been changed (no event are passed).
- `onValueChange` has been deleted, use `onChange` instead.
- `checked` has been renamed to `isSelected`.
- `disabled` has been renamed to `isDisabled`.
- `required` has been renamed to `isRequired`.
- `indeterminate` has been renamed to `isIndeterminate`.
- `defaultIndeterminate` prop has been removed.
- The `Counter` component is no longer allowed as a specialized slot.
- `reverse` is not supported, use `flex-direction` or `row-reverse` instead.
- `validationState` has been removed. Use `isInvalid` instead. There is no `isValid`.
- Values are not auto-generated when missed.
