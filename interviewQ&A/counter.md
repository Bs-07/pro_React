## React Batching behavior

**In this code `useState` set at 10 and we are calling setCounter 4 times, so after clicking the btn `useState` should be at 14. But it not, it only increase by 1. Why is that?**

<span style="color:#3E8EDE">**_When you call setCounter multiple times in a single function, React batches these updates to optimize rendering. This batching means that the state doesn’t update immediately after each setCounter call. Instead, React processes all the updates together_**<span/>

```js
import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="App">
        <button onClick={addValue}>Count: {counter}</button>
      </div>
    </>
  );
}
```

<span style="color:#B53389">**_To prevent this batching behavior, we can use functional form of `setCounter`_**<span/>

```js
setCounter((preCounter) => preCounter + 1);
```
