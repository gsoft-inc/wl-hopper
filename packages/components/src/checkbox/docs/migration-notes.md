
- The `counter` component is no longer allowed as a specialized slot for Checkbox.
- `reverse` is not currently supported.
- CheckboxGroup does not support `autofocus`. You must put `autofocus` on the actual Checkbox.
- No auto-generating values that are missed on a Checkbox in a CheckboxGroup.
- onChange signature changed
- onValueChanged deleted, use onChange instead
- defaultIndeterminate prop removed.
- indeterminate renamed to isIndeterminate
- checked renamed to isSelected
- disabled renamed to isDisabled
- Checkbox group's default orientation is now vertical instead of horizontal