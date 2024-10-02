# @hopper-ui/components

## 1.3.16

### Patch Changes

- 82d23a2: Updated Button css to remove unwanted gaps when icons are not there.
- ebe9268: Fixed buttonGroup default alignments

## 1.3.15

### Patch Changes

- c258cc1: Made react aria types as well as internal types available to the users.
- Updated dependencies [c258cc1]
  - @hopper-ui/icons@2.8.2

## 1.3.14

### Patch Changes

- c490240: Updated primary badge selected color

## 1.3.13

### Patch Changes

- 5537941: Added props to customize their DOM elements

## 1.3.12

### Patch Changes

- 0cf5bc0: Removed option to support size in remainingCharacterCount
- 4636333: Update avatar's fallback logic. The avatar image is now loaded if the src changes from undefined to a functional src.

## 1.3.11

### Patch Changes

- 578eccf: Added the slot function to add support to be able to use Hopper components inside Orbiter.
- Updated dependencies [578eccf]
  - @hopper-ui/icons@2.8.1

## 1.3.10

### Patch Changes

- 9f9c735: Updated the necessityIndicator logic for Label and added it to all the fields.

## 1.3.9

### Patch Changes

- 396605b: Added the ComboBox single select component.

## 1.3.8

### Patch Changes

- 7f8b609: Adjusted text-neutral-weakest color
  - @hopper-ui/icons@2.8.0

## 1.3.7

### Patch Changes

- 1e29a8e: Removed support for dividers in Listbox as this is not accessible

## 1.3.6

### Patch Changes

- aad6ff0: Accessibility fix
- 9daeca0: Simplify import of CSS

## 1.3.5

### Patch Changes

- 2a87664: Added DecorativeCheckbox and DecorativeRadio to be used as visual checkboxes and radio buttons inside other interactive components.
- 9d2abdd: Remove placeholder from NumberField

## 1.3.4

### Patch Changes

- 8ca74b4: Fixed an accesibility issue with input char count contrast
  - @hopper-ui/icons@2.8.0

## 1.3.3

### Patch Changes

- 46406ef: Added isSquare for EmbeddButton & Used it in InputGroup.

## 1.3.2

### Patch Changes

- d1f29f2: Added character count overflow option to TextField.

## 1.3.1

### Patch Changes

- 2e845a1: Added FloatingBadge component.

## 1.3.0

### Minor Changes

- e503a1f: Added the select component and made fixes to other components.

## 1.2.1

### Patch Changes

- Updated dependencies [8ddaae0]
  - @hopper-ui/icons@2.8.0

## 1.2.0

### Minor Changes

- 58de004: Added an avatar slot to ListBox and Tag components.

### Patch Changes

- Updated dependencies [58de004]
  - @hopper-ui/icons@2.7.0

## 1.1.0

### Minor Changes

- 63d9572: Added the TextArea component.

## 1.0.13

### Patch Changes

- 6c2e4bb: Adjusted the ghost secondary text/icon color

## 1.0.12

### Patch Changes

- Updated dependencies [90401be]
  - @hopper-ui/icons@2.6.2

## 1.0.11

### Patch Changes

- 4c517c1: update @hopper-ui/styled-system package
- Updated dependencies [4c517c1]
  - @hopper-ui/icons@2.6.1

## 1.0.10

### Patch Changes

- Updated dependencies [cdb7b7c]
  - @hopper-ui/icons@2.6.0

## 1.0.9

### Patch Changes

- Updated dependencies [584339c]
  - @hopper-ui/icons@2.5.0

## 1.0.8

### Patch Changes

- 6e4307e: Added exports to the package.json for the css file like we have in the icons package.

## 1.0.7

### Patch Changes

- ab07424: build the `index.ts` file so that the package is correctly resolved

## 1.0.6

### Patch Changes

- 9cf3058: pre-release of the components

## 1.0.5

### Patch Changes

- Updated dependencies [339c517]
  - @hopper-ui/icons@2.4.0

## 1.0.4

### Patch Changes

- Updated dependencies [1dc67e4]
  - @hopper-ui/icons@2.3.0

## 1.0.3

### Patch Changes

- Updated dependencies [e94a3e0]
  - @hopper-ui/icons@2.2.0

## 1.0.2

### Patch Changes

- Updated dependencies [a92e653]
  - @hopper-ui/icons@2.1.1

## 1.0.1

### Patch Changes

- Updated dependencies [75db68e]
  - @hopper-ui/icons@2.1.0

## 1.0.0

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

### Patch Changes

- Updated dependencies [73037f3]
- Updated dependencies [c5c6b30]
  - @hopper-ui/icons@2.0.0
  - @hopper-ui/styled-system@2.0.0

## 0.1.1

### Patch Changes

- Updated dependencies [bdc3e10]
  - @hopper-ui/icons@1.6.0

## 0.1.0

### Minor Changes

- 93a1a16: Added Button, Grid, Inline, Flex, Stack, Label, Text, IconList, Spinner and localization

### Patch Changes

- Updated dependencies [93a1a16]
  - @hopper-ui/icons@1.5.0

## 0.0.11

### Patch Changes

- Updated dependencies [aa5d10b]
  - @hopper-ui/styled-system@0.3.0

## 0.0.10

### Patch Changes

- Updated dependencies [2f18e75]
  - @hopper-ui/styled-system@0.2.8

## 0.0.9

### Patch Changes

- Updated dependencies [7717443]
  - @hopper-ui/styled-system@0.2.7

## 0.0.8

### Patch Changes

- 2639596: Updated some dependencies + move some to peer dependency.
  Fixed a warning that was being thrown in the console regarding SSR.
- Updated dependencies [2639596]
  - @hopper-ui/styled-system@0.2.6

## 0.0.7

### Patch Changes

- Updated dependencies [f5729c5]
  - @hopper-ui/styled-system@0.2.5

## 0.0.6

### Patch Changes

- Updated dependencies [20515b9]
  - @hopper-ui/styled-system@0.2.4

## 0.0.5

### Patch Changes

- 7f259c1: Changed build target to target ES2019
- Updated dependencies [7f259c1]
- Updated dependencies [eb5de30]
  - @hopper-ui/styled-system@0.2.3

## 0.0.4

### Patch Changes

- f40a266: Optimized the build output
- Updated dependencies [f40a266]
  - @hopper-ui/styled-system@0.2.2

## 0.0.3

### Patch Changes

- Updated dependencies [a31b7e2]
  - @hopper-ui/styled-system@0.2.1

## 0.0.2

### Patch Changes

- Updated dependencies [0c4a1c7]
  - @hopper-ui/styled-system@0.2.0

## 0.0.1

### Patch Changes

- Updated dependencies [7ef9681]
  - @hopper-ui/styled-system@0.1.0
