# Contributing

TODO

### Adding a new icon

1. Add SVGs to Size-Specific Folders
- Get the three versions (16px, 24px, 32px) of the SVG icon you want to add.
- Place each version in the following folders:
  - `packages/svg-icons/src/icons/16px`
  - `packages/svg-icons/src/icons/24px`
  - `packages/svg-icons/src/icons/32px`

2. Manual Generation (Optional)
- If you want to manually generate optimized SVGs and React components, run the following command:

```sh
pnpm generate-icons
```

- This command will optimize the SVGs and create React components in the respective folders.
- Commit the changes to the repository.

3. GitHub Action: Icon Generator (Automatic)
- If you prefer an automated process, simply commit the icons to the repository.
- The GitHub Action named "Icon Generator" will run automatically after the push.
- It will optimize the SVGs and generate React components in the respective folders and commit the code to your branch

4. Run Changeset Command

- After the GitHub Action has completed successfully or after manually generating the icons, run the following command to create release notes for @hopper-ui/svg-icons and @hopper-ui/icons:
```sh
pnpm changeset
```
- Follow the prompts to describe the changes made and choose the appropriate version bump.

### Updating or removing an icon

- Updating or removing an icon is similar to adding a new icon. The only difference is that you will need to delete the SVGs from the following folders:
  - `packages/svg-icons/src/icons/16px`
  - `packages/svg-icons/src/icons/24px`
  - `packages/svg-icons/src/icons/32px`

- Steps 2-4 are the same as adding a new icon.
