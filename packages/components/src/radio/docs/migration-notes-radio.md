Coming from Orbiter, you should be aware of the following changes:

- The `Counter` component is no longer allowed as a specialized slot.
- Values are not auto-generated when missed.
- `onChange` is only supported on `RadioGroup`, not on `Radio`.
- `onValueChange` has been deleted, use `onChange` instead.
- `checked` has been renamed to `isSelected`.
- `disabled` has been renamed to `isDisabled`.
- `required` has been renamed to `isRequired`.
- `reverse` is not supported, use `flex-direction` or `row-reverse` instead.
- `validationState` has been removed. Yse `isInvalid` instead. There is no `isValid`.
- `value` is required.
