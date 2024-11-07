Coming from Orbiter, you should be aware of the following changes:

- `outline` variant has been renamed `main`.
- `elevated` variant has been renamed `second-level`. You shouldn't use a `second-level` variant without a parent `main` variant.
- `orientation` has been removed.
- `slot` has been removed.
- `fluid` prop has been removed. If you need a fluid Card use an appropriate technique using CSS or StyleProps.
- `size` has been removed.
    - In order to facilitate migrating toward Hopper here's the size mapping of Orbiter:
        - `xs` `16rem / 256px`
        - `sm` `20rem / 320px`
        - `md` `30rem / 480px`
        - `lg` `35rem / 560px`
        - `xl` `40rem / 640px`
- The Hopper Card component does not feature custom layouts, you are responsible for implementing the needed layouts.
