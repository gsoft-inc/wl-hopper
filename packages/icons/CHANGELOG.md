# @hopper-ui/icons

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

### Patch Changes

- 73037f3: Updated the icons variables to be more consistent with the other components.

  Will need to update the style sheets to use the new CSS variables.

  For example, they will need to replace:

  | Old variable                                   | New variable                            |
  | ---------------------------------------------- | --------------------------------------- |
  | `--hop-richicon-placeholder-surface-color`     | `--hop-Richicon-placeholder-shadow`     |
  | `--hop-richicon-placeholder-icon-color`        | `--hop-Richicon-placeholder-background` |
  | `--hop-richicon-placeholder-icon-strong-color` | `--hop-Richicon-placeholder-fill`       |

- Updated dependencies [c5c6b30]
  - @hopper-ui/styled-system@2.0.0

## 1.10.1

### Patch Changes

- d78aefb: Fix an issue preventing pointer events on icons

## 1.10.0

### Minor Changes

- dc09428: Added MobileIcon

  **Added**

  | Icon Name  |
  | ---------- |
  | MobileIcon |

## 1.9.0

### Minor Changes

- 1b22f66: Added the following icons:

  **Added**

  | Icon Name            |
  | -------------------- |
  | EverythingReportIcon |
  | OpenRoleIcon         |
  | PhoneIcon            |
  | PrintIcon            |
  | UploadIcon           |

## 1.8.1

### Patch Changes

- c54c967: Fix small typo in the newly added RichIcons. GoalIndividiualRichIcon should be GoalIndividualRichIcon

## 1.8.0

### Minor Changes

- 6bb38e1: Modified the following icons:

  **Added**

  | Icon Name               |
  | ----------------------- |
  | ActionListRichIcon      |
  | AnonymousRichIcon       |
  | CautionRichIcon         |
  | ConversationRichIcon    |
  | CustomRichIcon          |
  | DecreasingScoreRichIcon |
  | EmailRichIcon           |
  | FeedbackRichIcon        |
  | GoalIndividiualRichIcon |
  | GoalTeamRichIcon        |
  | GrowthRichIcon          |
  | IdeaRichIcon            |
  | InfoRichIcon            |
  | LikertScaleRichIcon     |
  | MultipleChoiceRichIcon  |
  | OneOnOneRichIcon        |
  | OpinionScaleRichIcon    |
  | OrganizationRichIcon    |
  | PeopleRichIcon          |
  | QuestionRichIcon        |
  | ReminderRichIcon        |
  | ReviewRichIcon          |
  | RisingScoreRichIcon     |
  | RocketRichIcon          |
  | ScriptRichIcon          |
  | SettingsRichIcon        |
  | SparklesRichIcon        |
  | StarRichIcon            |
  | SuccessRichIcon         |
  | SupportRichIcon         |
  | TemplateRichIcon        |
  | TextAnswerRichIcon      |
  | UpsellRichIcon          |

## 1.7.0

### Minor Changes

- 44069dd: Modified the following icons:

  **Added**

  | Icon Name                 | Product    |
  | ------------------------- | ---------- |
  | AlignmentIcon             | Officevibe |
  | AmbassadorshipIcon        | Officevibe |
  | EventIcon                 | Officevibe |
  | FeedbackIcon              | Officevibe |
  | FocusIcon                 | Officevibe |
  | GrowthIcon                | Officevibe |
  | HappinessIcon             | Officevibe |
  | HierarchyIcon             | Officevibe |
  | KeyResultIcon             | Officevibe |
  | OneOnOneIcon              | Officevibe |
  | RelationWithManagerIcon   | Officevibe |
  | RelationshipWithPeersIcon | Officevibe |
  | ReviewIcon                | Officevibe |
  | SatisfactionIcon          | Officevibe |
  | SegmentIcon               | Officevibe |
  | SliderIcon                | Officevibe |
  | WellnessIcon              | Officevibe |
  | BriefcaseIcon             | LMS        |
  | DuplicateIcon             | LMS        |
  | HourglassIcon             | LMS        |
  | InvoiceIcon               | LMS        |
  | KeyIcon                   | LMS        |
  | LearningPathIcon          | LMS        |
  | LearningPathStepIcon      | LMS        |
  | QuizLessonIcon            | LMS        |
  | RequalificationIcon       | LMS        |
  | TextLessonIcon            | LMS        |
  | WebinarLessonIcon         | LMS        |
  | ApplauseIcon              | Pingboard  |
  | AssistantIcon             | Pingboard  |
  | AssistantToIcon           | Pingboard  |
  | BranchesIcon              | Pingboard  |
  | DepartmentIcon            | Pingboard  |
  | DirectReportsIcon         | Pingboard  |
  | DottedLinesIcon           | Pingboard  |
  | GroupsIcon                | Pingboard  |
  | OrgChartIcon              | Pingboard  |
  | PronunciationIcon         | Pingboard  |
  | ReportsToIcon             | Pingboard  |
  | WhosWhoFaceIcon           | Pingboard  |
  | WhosWhoGameIcon           | Pingboard  |

## 1.6.0

### Minor Changes

- bdc3e10: ## @hopper-ui/svg-icons

  **Added**

  | SVG Name             |
  | -------------------- |
  | next-calendar-16.svg |
  | next-calendar-24.svg |
  | next-calendar-32.svg |

  ## @hopper-ui/icons

  **Added**

  | Icon Name        |
  | ---------------- |
  | nextCalendarIcon |

## 1.5.0

### Minor Changes

- 93a1a16: Added a IconContext, allowing the customization of the icons via a Slot Provider

## 1.4.0

### Minor Changes

- 1225e9e: **Added**

  | Icon Name  |
  | ---------- |
  | FolderIcon |

## 1.3.0

### Minor Changes

- 4cef0d7: Added new icons

## 1.2.1

### Patch Changes

- 2639596: Updated some dependencies + move some to peer dependency.
  Fixed a warning that was being thrown in the console regarding SSR.
- Updated dependencies [2639596]
  - @hopper-ui/styled-system@0.2.6

## 1.2.0

### Minor Changes

- 72ebf06: **Added**

  | SVG Name                 |
  | ------------------------ |
  | BoltIcon                 |
  | SettingsNotificationIcon |
  | SettingsWarningIcon      |

## 1.1.0

### Minor Changes

- 2e4a5ad: - Renamed ArrowsUpdownIcon to MaximizeIcon.
  - Added ArrowsOutVerticalIcon.

## 1.0.3

### Patch Changes

- f5729c5: remove fill currentColor values on every path. The value of fill is now driven by the svg, instead of by paths
- Updated dependencies [f5729c5]
  - @hopper-ui/styled-system@0.2.5

## 1.0.2

### Patch Changes

- 7f259c1: Changed build target to target ES2019
- 8ab30e7: - `flex-shrink: 0` as been added to icons by default
- Updated dependencies [7f259c1]
- Updated dependencies [eb5de30]
  - @hopper-ui/styled-system@0.2.3

## 1.0.1

### Patch Changes

- f40a266: Optimized the build output
- Updated dependencies [f40a266]
  - @hopper-ui/styled-system@0.2.2

## 1.0.0

### Major Changes

- 0c4a1c7: Initial release of the icons package

### Patch Changes

- Updated dependencies [0c4a1c7]
  - @hopper-ui/styled-system@0.2.0
