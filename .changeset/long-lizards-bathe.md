---
"@hopper-ui/components": patch
---

Instead of having slots for Label, HelperMessage and ErrorMessage, we removed them in favor of props: label, description and errorMessage. CheckboxList and RadioList are no longer needed and have been removed due to this change.
