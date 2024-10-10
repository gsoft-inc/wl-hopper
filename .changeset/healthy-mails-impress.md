---
"@hopper-ui/components": patch
---

We've separated the Button component into two distinct components: Button and LinkButton. This change clarifies their purposes and simplifies their usage. The Button component now focuses solely on traditional button functionality, without any link-related features.

Meanwhile, the new LinkButton component is specifically designed for link-based interactions, visually styled like a button but meant for navigation. Unlike Button, LinkButton does not support loading states (isLoading), as its primary role is to facilitate navigation rather than trigger actions that require loading feedback.
