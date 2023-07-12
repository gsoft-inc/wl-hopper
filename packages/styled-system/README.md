# @hopper-ui/styled-system

TODO:
- make sure 0/none works for all tokens
- normalize css elements

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
