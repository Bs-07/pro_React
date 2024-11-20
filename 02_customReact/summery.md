# Create own React

1. select `root` id by querySelector

```js
const mainContainer = document.querySelector('#root');
```

2. create reactElement object which have info about tag because rect also create its own element from jsx

```js
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click to visit Google',
};
```

3. After that we call custom render function to render file

```js
customRender(reactElement, mainContainer);
```

<span style="color: #f88;">**customRender function take reactElement and mainContainer, then get tag name, attributes and innerText to _createElement_. After that it append this into mainContainer.<br>
_Generally all this work is done by React's render function_**</span>

```js
function customRender(reactElement, container) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.setAttribute('href', reactElement.props.href);
  //   domElement.setAttribute('target', reactElement.props.target);
  //   domElement.innerHTML = reactElement.children;

  //* if we have HTML tag which don't have attributes or have more then two attributes, so for that we use iteration

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    console.log(prop);
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
  console.log(container);
}
```
