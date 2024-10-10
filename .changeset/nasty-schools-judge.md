---
"@hopper-ui/components": patch
---

In the Badge component, we were using data-variant to be able to add styles in other components based on its variant. Now that we have className render props, we can switch back to using a class for Badge's variant prop.
