# @hopper-ui/styled-system

## 2.5.0

### Minor Changes

- 2506f03: Added support to React 19

## 2.4.1

### Patch Changes

- d098c47: Updated all dependencies.

## 2.4.0

### Minor Changes

- 6b443bd: Added hop-dataviz-categorical-sequence-category11-hover token

## 2.3.3

### Patch Changes

- 7f8b609: Adjusted text-neutral-weakest color

## 2.3.2

### Patch Changes

- 41cbec0: Fixed a token typo

## 2.3.1

### Patch Changes

- 2f8f383: Patched neutral-border-press token color

## 2.3.0

### Minor Changes

- 47cb86f: Added space-10 token (1px)

## 2.2.0

### Minor Changes

- a3ee503: Added two tokens / updated one token

## 2.1.2

### Patch Changes

- a16cf30: Fixed wrong token

## 2.1.1

### Patch Changes

- 3cbbcf4: Fix mapping of borderColor

## 2.1.0

### Minor Changes

- d689dd8: Added new status tokens - updated some status tokens

## 2.0.2

### Patch Changes

- ac53639: Added slot method to utilities for Orbiter's interoperability

## 2.0.1

### Patch Changes

- 8ad853b: Retro fitted active color tokens to ease with migrations, these will be deprecated eventually.

## 2.0.0

### Major Changes

- c5c6b30: ## @hopper-ui/tokens

  **Added**

  | Token                                 |
  | ------------------------------------- |
  | danger-text-selected                  |
  | danger-border-selected                |
  | danger-icon-selected                  |
  | danger-icon-weak-hover                |
  | danger-icon-weak-press                |
  | danger-surface-selected               |
  | danger-surface-weak-hover             |
  | danger-surface-weak-press             |
  | danger-text-weak-hover                |
  | danger-text-weak-press                |
  | decorative-option5-surface-weak-hover |
  | neutral-surface-weak-selected         |
  | neutral-surface-weakest-selected      |
  | neutral-border-selected               |
  | neutral-icon-selected                 |
  | neutral-icon-strong-hover             |
  | neutral-icon-weak-press               |
  | neutral-surface-selected              |
  | neutral-text-weak-hover               |
  | neutral-text-weak-press               |
  | primary-border-selected               |
  | primary-icon-selected                 |
  | primary-surface-selected              |
  | primary-surface-strong-selected       |
  | primary-surface-weak-hover            |
  | primary-surface-weak-press            |
  | primary-text-selected                 |
  | upsell-border-selected                |
  | upsell-icon-selected                  |
  | upsell-icon-hover                     |
  | upsell-icon-weak-hover                |
  | upsell-icon-weak-press                |
  | upsell-surface-selected               |
  | upsell-surface-weak-hover             |
  | upsell-surface-weak-press             |
  | upsell-text-selected                  |
  | upsell-text-weak                      |
  | upsell-text-weak-hover                |
  | upsell-text-weak-press                |

  **Renamed**

  Use this as a reference to fix all breaking changes.

  | Old Token name                | New Token name               |
  | ----------------------------- | ---------------------------- |
  | danger-border-active          | danger-border-press          |
  | danger-icon-active            | danger-icon-press            |
  | danger-text-active            | danger-text-press            |
  | danger-surface-active         | danger-surface-press         |
  | neutral-border-active         | neutral-border-press         |
  | neutral-icon-active           | neutral-icon-press           |
  | neutral-surface-active        | neutral-surface-press        |
  | neutral-surface-weak-active   | neutral-surface-weak-press   |
  | neutral-text-active           | neutral-text-press           |
  | primary-border-active         | primary-border-press         |
  | primary-icon-active           | primary-icon-press           |
  | primary-surface-active        | primary-surface-press        |
  | primary-text-active           | primary-text-press           |
  | primary-surface-strong-active | primary-surface-strong-press |
  | upsell-border-active          | upsell-border-press          |
  | upsell-icon-active            | upsell-icon-press            |
  | upsell-surface-active         | upsell-surface-press         |
  | upsell-text-active            | upsell-text-press            |

  **Updated**

  | Token                        |
  | ---------------------------- |
  | danger-surface-hover         |
  | danger-surface-strong        |
  | danger-surface-strong-hover  |
  | danger-text-weak             |
  | status-progress-text         |
  | status-progress-icon         |
  | primary-surface-strong-hover |
  | primary-text                 |
  | primary-surface-hover        |
  | upsell-surface-hover         |
  | upsell-surface-weak          |
  | upsell-text                  |
  | upsell-icon                  |
  | upsell-text-hover            |

  ## @hopper-ui/components

  - Added a press state to Links
  - Added a press state to Buttons
  - Added a press state to Checkbbox
  - Added a press state to Switch
  - Added a press state to Radio
  - Added numerous tests to test Pressed States of components

## 1.2.0

### Minor Changes

- c6004a4: #### Changed

  **Semantic dark**

  | Token                           | Value   | Status |
  | ------------------------------- | ------- | ------ |
  | --hop-primary-text-strong-hover | samoyed | update |

## 1.1.0

### Minor Changes

- 6a2fe45: Added offset tokens to semantic Typographic composite tokens

## 1.0.0

### Major Changes

- 93a1a16: - Changed the useStyledSystem hook to return an object containing the className and the style, instead of merging it with the input props.
  - Added some sizing options while we wait for the sizing tokens

## 0.3.0

### Minor Changes

- aa5d10b: Added font fallback to font tokens

## 0.2.8

### Patch Changes

- 2f18e75: - Upsell disabled surface value has been set to treasure-25
  - Upsell surface value has been set to treasure-75

## 0.2.7

### Patch Changes

- 7717443: StyledSystemProvider now accepts a ref

## 0.2.6

### Patch Changes

- 2639596: Updated some dependencies + move some to peer dependency.
  Fixed a warning that was being thrown in the console regarding SSR.

## 0.2.5

### Patch Changes

- f5729c5: Modified the isStyledSystemProps to returns true when the UNSAFE\_ props are passed

## 0.2.4

### Patch Changes

- 20515b9: Modify the breakpoint context to not throw, so components can render even if no provider has been declared

## 0.2.3

### Patch Changes

- 7f259c1: Changed build target to target ES2019
- eb5de30: Updated neutral surface strong value in dark mode

## 0.2.2

### Patch Changes

- f40a266: Optimized the build output

## 0.2.1

### Patch Changes

- a31b7e2: Updated the heading small line height token to the right core token

## 0.2.0

### Minor Changes

- 0c4a1c7: Added main, types and style to the package.json

## 0.1.0

### Minor Changes

- 7ef9681: Updated styled system exports
