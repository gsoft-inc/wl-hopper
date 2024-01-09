# @hopper-ui/icons-react16

A set of icons handcrafted by Workleap. This package is meant to be temporary, to allow teams that are still using React 16 to be able to have access to the shared icons.

> This package assumes that you are importing the CSS tokens from Hopper in your application. If you are not, icon colors will not be applied.

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](../../LICENSE)
[![npm version](https://img.shields.io/npm/v/@hopper-ui/icons-react16)](https://www.npmjs.com/package/@hopper-ui/icons-react16)

## Installation

### Install packages

**With pnpm**

```shell
pnpm add @hopper-ui/icons-react16
```

**With yarn**

```shell
yarn add -D @hopper-ui/icons-react16
```

**With npm**

```shell
npm install -D @hopper-ui/icons-react16
```

### Import Styles
```css
/* in your root css */
@import "@hopper-ui/icons-react16/index.css";
```


https://wl-hopper.netlify.app/icons/react-icons/standalone-installation#import-styles

### Start using icons

```tsx
    import { AddIcon } from "@hopper-ui/icons-react16";

    export const App = () => (
        <div>
            <span>Hello World!</span>
            <AddIcon size="sm" />
        </div>
    );
```

## Available Icons

View the [library](https://wl-hopper.netlify.app/icons/react-icons/library).

## 🤝 Contributing

View the [contributor's documentation](https://github.com/gsoft-inc/wl-hopper/blob/main/CONTRIBUTING.md).

## License

Copyright © 2023, Workleap. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/gsoft-inc/workleap-license/blob/master/LICENSE.
