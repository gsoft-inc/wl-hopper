Coming from Orbiter, you should be aware of the following changes:

- `onChange` signature has been changed – no events are passed.
- `onValueChange` has been deleted, use `onChange` instead.
- `checked` has been renamed to `isSelected`.
- `disabled` has been renamed to `isDisabled`.
- The `Counter` component is no longer allowed as a specialized slot.
- `reverse` is not supported, use `flex-direction` or `row-reverse` instead.
- `validationState` has been removed. A `Switch` cannot be invalid.
