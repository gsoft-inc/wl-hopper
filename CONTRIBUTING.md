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

### Updating or removing an icon

- Updating or removing an icon is similar to adding a new icon. The only difference is that you will need to delete or replace the SVGs from the following folders:
  - `packages/svg-icons/src/icons/16px`
  - `packages/svg-icons/src/icons/24px`
  - `packages/svg-icons/src/icons/32px`

- Steps 2-4 are the same as adding a new icon.
