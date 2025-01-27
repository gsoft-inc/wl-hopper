---
"@hopper-ui/components": patch
---

- Removed `inputClassName` and `inputType` properties from InputGroups
- The TextField should not show the clear button when it's readonly
- Simplified how the click in the input group focuses the input instead
- Created an Input component that centralize input styles
- Removed the `mobile` variant from the NumberInput, as it was untested and broken
- ComboBox now reuses our input styles, instead of duplicating the styles
