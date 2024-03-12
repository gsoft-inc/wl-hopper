# Contributing

TODO

### Adding a new icon

1. Add SVGs to Size-Specific Folders
- Get the three versions (16px, 24px, 32px) of the SVG icon you want to add. Having 3 versions of the icon is mandatory.
- Place each version in the following folders:
  - `packages/svg-icons/src/icons/16px`
  - `packages/svg-icons/src/icons/24px`
  - `packages/svg-icons/src/icons/32px`

2. Test the source SVGs
- Run the following command to test the source SVGs:
```sh
pnpm test
```
- If one or more of the source SVGs fail the test, you will need to fix the SVGs before proceeding to the next step.

3. Optimization and Generation of icons
- To generate optimized SVGs and React components, run the following command:

```sh
pnpm generate-icons
```

- This command will optimize the SVGs and create React components in the respective folders.
- Commit the changes to the repository.

4. Run Changeset Command

- After manually generating the icons, run the following command to create release notes for @hopper-ui/svg-icons and @hopper-ui/icons:
```sh
pnpm changeset
```
- Follow the prompts to describe the changes made and choose the appropriate version bump.
- A template for the release notes of svg-icons and icons is available in the `.changeset` folder [here](./.changeset/templates/svg-icons-release.md).

5- Go update the react16 icons from this [github repo](https://github.com/gsoft-inc/wl-hopper-react16/blob/main/CONTRIBUTING.md)

### Updating or removing an icon

- Updating or removing an icon is similar to adding a new icon. The only difference is that you will need to delete or replace the SVGs from the following folders:
  - `packages/svg-icons/src/icons/16px`
  - `packages/svg-icons/src/icons/24px`
  - `packages/svg-icons/src/icons/32px`

- Steps 2-5 are the same as adding a new icon.

## Developing a new component

### Checklist:

- [ ] Every component should have a GlobalCssSelector that is unique to the component. This allows the targetting of the component in the global CSS file.
```
export const GlobalIconCssSelector = "hop-icon";
```

- [ ] Every component should make sure to merge their props and ref with the context props and ref.
```
// with a default slot:
[props, ref] = useContextProps({ ...props, slot: props.slot || DefaultIconListSlot }, ref, IconListContext);

// without a default slot
[props, ref] = useContextProps(props, ref, IconListContext);
```
- [ ] Every component should then remove the styling props from the props object and then add the other ones to the ownProps obj.
```
const { stylingProps, ...ownProps } = useStyledSystem(props);
```

- [ ] You can now deconstruct the ownProps object to get the props you need.
```
const { children, style, className, slot, ...otherProps } = ownProps;
```

- [ ] make sure to merge the classnames and styles from the props with the classnames and styles from the style system.
Make sure that the style from the props have higher priority than the style from the style system.
```
    const classNames = clsx(
        className,
        GlobalIconCssSelector,
        cssModule(
            styles,
            "hop-icon"
        ),
        stylingProps.className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };
```

## Questions:
is `{...filterDOMProps(otherProps)}` required when passing props to a DOM element?
