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

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click to visit Google',
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
