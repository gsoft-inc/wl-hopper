# @hopper-ui/styled-system

Ideas from PandaCSS
- Patterns/JSX Patterns (HStack VStack Truncate)
    - divider
    - flex
    - gloat
    - grid
    - gridItem
    - hstack
    - stack
    - truncate
    - vstack
    - wrap
- CSS Variables in style
    - either a vars prop, cssVars props, or style={{vars: {}}}
- Negative values for token scale
    -   margin={-2} should be valid
- Pseudos could be generated from usage and added to a style tag dynamically, like the GlobalStyleProvider

changes from Orbit:
- HTML element no longer have the as props
- HTML element no longer have the StyleProvider props, we'll wait until we need it to bring it

tests to write still:
- Padding and Margin specific use cases
- in typescript tests, add at the end of the file test case

- typescript/useStyledSystem.test is not present
- jest/useStyledSystem.test is not present
