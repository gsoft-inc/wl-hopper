Coming from Orbiter, you should be aware of the following changes:

- `Item` has been renamed to `Select.Option`.
- The selected value only includes text. If an icon or avatar is needed, customize it using the `renderValue` function.
- There is no `align` prop. Use `placement` inside `popoverProps`.
- There is no `allowFlip`. Use `shouldFlip` inside `popoverProps`.
- There is no `allowPreventOverflow`. This is done automatically.
- There is no `allowResponsiveMenuWidth`. Use `isAutoMenuWidth`.
- There is no `direction`. Use `placement` inside `popoverProps`.
- `disabled` is renamed to `isDisabled`.
- `fluid` is renamed to `isFluid`.
- `open` is renamed to `isOpen`..
- `required` is renamed to `isRequired`.
- A select cannot be read only.
- `overlayProps` is removed. Use `popoverProps` instead.
- Use `isInvalid` instead of `validationState`.
- `variant` is removed.
- `zIndex` is removed.
- Custom tooltips are not supported.