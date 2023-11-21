// TODO: This is not an official documentation. This is a placeholder for the real documentation.

# Icon

An icon component allow you to render a custom icon. Thi

Hopper provides multiple ways to use icons in your project:
- Using the [Workleap icon library](https://hopper.workleap.design/icons)
- [Creating your own icons](#creating-your-custom-icons)

## Creating your custom icons

> To use an icon component to create custom icons you must first import your SVG icon as a component by using [`@svgr/webpack`](https://react-svgr.com/docs/getting-started/).

Hopper provides two methods for creating your custom icons:
- Using the createIcon function (recommended)
- Using the Icon component

```jsx
import { Icon, createIcon } from "@hopper-ui/icons"
```

Both `Icon` and `createIcon` enable you to style the icon using the styled system.

### Using the createIcon function

The `createIcon` function is a convenience wrapper around the process of generating icons with Icon, allowing you to achieve the same functionality with less effort.

```jsx
import { ReactComponent as MyIcon16 } from "./path/to/my-icon-16.svg";
import { ReactComponent as MyIcon24 } from "./path/to/my-icon-24.svg";
import { ReactComponent as MyIcon32 } from "./path/to/my-icon-32.svg";
import { createIcon } from "@hopper-ui/icons";

const MyIcon = createIcon(MyIcon16, MyIcon24, MyIcon32, "MyIcon")
```

### Using the Icon component

```jsx
import { ReactComponent as MyIcon16 } from "./path/to/my-icon-16.svg"
import { ReactComponent as MyIcon24 } from "./path/to/my-icon-24.svg"
import { ReactComponent as MyIcon32 } from "./path/to/my-icon-32.svg"
import { Icon, type CreatedIconProps } from "@hopper-ui/icons";

function MyIcon(props: CreatedIconProps) {
  return (
    <Icon
    src16={MyIcon16}
    src24={MyIcon24}
    src32={MyIcon32}
    {...props} />
  )
}
```

## Usage

## Sizing

Icons support t-shirt sizing. When used inside another Hopper component, they'll generally be sized automatically, but if you use icons standalone, you can use the size prop to control the sizing. The default size is "md".

```jsx
<MyIcon size="sm" />
<MyIcon size="md" />
<MyIcon size="lg" />
```

## Styling

The color of the icon can be change using the `color` prop.
All the styled system props are also available.

```jsx
<MyIcon color="primary" />
```

## Guidelines

### Accessibility

- By default, icons are considered decorative, and are hidden from assistive technology. When used within a component like a button that has no label, an aria-label should be provided to the parent component. If used standalone, an aria-label can be provided to the icon itself.

