Coming from Orbiter, you should be aware of the following changes:

- `disabled` has been renamed `isDisabled`.
- `fluid` has been renamed `isFluid`.
- `readOnly` has been renamed `isReadOnly`.
- There is no longer a loading state.
- `icon` prop have been renamed to `prefix`.
- Button props have been removed. To add a clear button, use the `isClearable` prop. For a more complex use case, create your own input using InputGroup.
- `wrapperProps` no longer exists.
- `validationState` has been changed to `isInvalid`.
- `showCharacterCount` has been added.
