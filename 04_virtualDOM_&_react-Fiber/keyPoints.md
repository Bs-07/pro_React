## Reconciliation

React algorithm which diff one tree with another to determine which parts need to be changed.

These two trees are:

- <span style="color: Orange">Browser DOM tress</span>
- <span style="color:Orange">Virtual DOM tress</span>

## Update

A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

# Virtual Dom

### 1. Initial Render:

- When you first load your React app, React creates a Virtual DOM that represents the UI based on the initial state and props of the components(using jsx or js).

  React uses this Virtual DOM to instruct the browser on how to create the real DOM, and the browser renders the UI.

### 2. State or Props Change:

- When the state or props of a component change, React creates a new Virtual DOM that represents the updated UI based on the new data.

### 3. Diffing Algorithm:

- React compares the newly created Virtual DOM with the previous Virtual DOM (from memory) using its diffing algorithm.
  The diffing algorithm identifies the parts of the Virtual DOM that have changed (i.e., the differences between the old and new Virtual DOMs).

### 4. Reconciliation:

- Once React identifies the changes, it reconciles these changes by figuring out the minimal set of updates needed.
- Instead of re-rendering the entire real DOM, React generates a list of specific changes that need to happen in the real DOM.

### 5. Updating the Real DOM:

- React efficiently applies these changes to the real DOM, which results in the updated UI without having to reload or re-render the whole page.

  This selective updating is what makes React fast and efficient, because interacting with the real DOM directly is slow, and React minimizes those interactions.

## Old Synchronous Rendering Problem

Problem was that when state or props change occurred, react have to re-render the whole component tree to find out what had changed. During this process, React couldn't pause to handle more urgent tasks (like user input or animations), causing the app to become unresponsive.

```HTML
<App>
  <Header />
  <Main>
    <Sidebar />
    <Content />
  </Main>
  <Footer />
</App>
```

- If a change happened in the `Content` component:

  - React would rebuild the entire Virtual DOM.
  - It would traverse the entire tree (`App` → `Header` →` Main` → `Sidebar` → `Content` → `Footer`) to find the differences.
  - It would eventually find that only `Content` changed, and efficiently update the real DOM for `Content`.

**The problem was not in updating the real DOM; it was in how React handled the <span style="color:orange">_Synchronous rendering and reconciliation_</span> process itself to create a new virtual DOM.**

### <span style="color:#DE3163">**_So what's the point of using the virtual DOM, if it work like an real DOM._**</span>

### _That's why react come up with <span style="font-size:1.6rem; color:#EF9B0F">--React Fiber--_</span>

<span style="border:2px solid #0000"></span>

# What is Fiber?

Fiber just not solve the **_Syncronous rendering_** problem, but it make the react more efficient.

### Core features of Fiber

    1. pause
    2. assign priority
    3. reuse
    4. abort

### 1. Pause Work and Come Back to It Later

- Fiber breaks down the rendering process into small units of work called "fibers".

 Example: Imagine you have a large data table with 1000 rows. If React tries to render all 1000 rows at once, the app might freeze for a moment. With Fiber, React can pause rendering the table after a few rows, handle other urgent tasks (like a button click), and then come back to continue rendering the rest of the rows in small chunks, making the UI smooth and responsive.

### 2. Assign Priority to Different Types of Work

- High-priority tasks (like user input) are handled first, while low-priority tasks (like background updates) can be scheduled to run later.
- This means React can interrupt low-priority work if something more important comes up, ensuring that critical interactions are never blocked by less important updates.

 Example: If a user is typing in a text field (high priority) while a background image is loading (low priority), React will pause the image loading and prioritize rendering the text changes to provide a better user experience.

### 3. Reuse Previously Completed Work

- If React pauses work in the middle of rendering and comes back later, it doesn’t need to start over from the beginning. Instead, it can pick up where it left off.
- Also, if some parts of the component tree haven’t changed, Fiber can skip those parts and reuse the previous work, making the rendering process more efficient.

  Example: If a component tree has 100 child components and only one child has updated, Fiber can reuse the work it did on the other 99 children, instead of recalculating all of them. This drastically improves performance.

### 4. Abort Work If It’s No Longer Needed

- For example, if React is rendering a large component and the user navigates to a new page, React can stop rendering that component immediately and move on to the new work.

  Example: Imagine a search bar that updates the search results as you type. If React starts rendering the results for "React" but you quickly type "React Fiber," React can abort rendering the results for "React" and start working on the new search query instead, reducing unnecessary work.
