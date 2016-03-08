# Seed
Help Scout's CSS Framework

![](/seed.png)

## Quick framework overview

### "Build" code
aka. Sass stuff that doesn't actually get generated into the CSS

- Variables
- Functions
- Mixins
- Generators

(Order matters!)

**Variables**
The "config" files if you will. The variable files store all the properties that will be used throughout the framework.

**Functions**
Custom sass functions that take advantage of the sass maps used in variables.
An example of a default sass function is `lighten()` or `percentage()`.

**Mixins**
Helpful predefined methods that help generate CSS properties.

**Generators**
This are mixins that help (auto) create CSS classes. These serve a different purpose compared to `mixins`.

Mixins create attributes
```
Example:
color: black;
```
Generators create classes
```
Example:
.some-class {
  color: black;
}
```

### "Style" code
aka. Code that actually compiles into the .css

- Base
- Components
- Objects
- Utilities

(Again, order matters!)

**Base**
These are the bare-bones base styles, such as `html`, `img`, headings, etc...

**Components**
Styling for components such as badges and buttons live here.

**Objects**
These are utility classes, but are used mainly for layout / composition. A great example is a grid system. Grid classes aren't components. They help arrange things on the page.

**Utilities**
These are helper classes with added omph to them. Most of them have `!important` on them, and are used to tweak + override styles.

### Vendors

The vendor code currently lives in the project. Ideally, we'd want them brought in via `bower install` or `npm install`. However, this doesn't really work when the Seed framework itself is going to be bower installed.

**Bourbon**
Used to handle all vendor prefixing.

**Normalize**
HTML Reset code :)
