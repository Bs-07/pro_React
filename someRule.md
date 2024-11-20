### Rule or Way to write React

1. If we are returning `HTML`(component), then use `.jsx` extension. For normal js file `.js ` extension.

2. It is good to use uppercase first letter of filename.

3. Always name component function with uppercase letter.

4. We can only wrap one html tag to render, but in that one tag we can wrap as many as tag we want to wrap.
   Syntax-

```jsx
export function Button() {
  return (
    // empty tag known as <Fragment>
    <>
      <h1>Namaskaram, everyone</h1>
      <button>Click me</button>
    </>
  );
}
```

5. To render our function we need to export it first, there'r two way to export:-

- `export default` Syntax

```jsx
export default function Button() {}
// or in the end
export default Button
```

To import default-

```jsx
import Button from './Button.jsx';
//or
import Button from './Button';
```

- `export by name` Syntax

```jsx
export function Button() {}
```

To import -

```jsx
import { Button } from './Button.jsx';
//or
import { Button } from './Button';
```

#### A file can have no more than one default export, but it can have as many named exports as you like.
