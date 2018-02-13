# Don't Create React App

Don't create React apps with no build configuration.

Don't Create React App works on macOS, Windows, and Linux.

## Quick Overview

```sh
npx dont-create-react-app my-app
cd my-app
vim not-react.js
```

*(npx comes with npm 5.2+ and higher)*

## Undoing React

We all mistakes. Import `dont-create-react-app` to remove React from any
project.

```javascript
require('dont-create-react-app');
```

This will automatically uninstall React for you!

---

Credit to [@Tribex_](https://twitter.com/Tribex_/status/962988894500225024) for
the idea.
