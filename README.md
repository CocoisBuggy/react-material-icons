# Google Material Icons in React

All [Google material icons](https://fonts.google.com/icons) wrapped up into a simple componet library for React.

## Why?

There is a popular and well thought out library already out there called [material-icons](https://www.npmjs.com/package/@mui/icons-material) which does more or less the same job as this library, but will cause [@mui/material](https://www.npmjs.com/package/@mui/material) to be added to your project as an indirect dependency.

## Installation

After installing the package, you will need the following reference added somewhere in your react html `<head>`.

```html
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

This should be all you need to do. If the style sheets aren't loading, you'll see the name of the icon, rather than the icon itself.

## Usage

Using an icon is as simple as importing it and using it as a component.

```tsx
import { Password } from "@cocobugs/react-material-icons";

<Password />;
```

You can pass the normal props to the component, and it'll accept all html props for `<i>` elements. The icons are totally unstyled by default, and are really flexible for plugging in to your own styling framework.

```tsx
import { Password } from "@cocobugs/react-material-icons";

// Tailwind
<Password className="text-lg text-green-500" />;
// Other classes
<Password className="custom-class" />;
// styles
<Password style={{ color: "green", fontSize: "2rem" }} />;
```
