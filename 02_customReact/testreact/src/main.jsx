import React from 'react';
import { createRoot } from 'react-dom/client';
// import { App } from './App';

function App() {
  const username = 'John';
  return (
    <>
      <h1>Namaskaram, {username} 🙏</h1>
      {/* //* this is evaluated expression, it mean that we can only write final outcome which is evaluated*/}
      {/* <h1>Namaskaram, {if(!username) someone} 🙏</h1> */}
      {/* //* Can't write js in evaluate expression like above */}
    </>
  );
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank',
//   },
//   children: 'Click to visit Google',
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    visit google
  </a>
);

const username = 'Shnow';
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'click to visit google',
  username
);

createRoot(document.getElementById('root')).render(
  <App />
  // reactElement
  // anotherElement
  // App()
);
