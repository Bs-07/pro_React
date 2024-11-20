import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const PasswordRef = useRef(null);

  const passwdGenerator = useCallback(() => {
    let pwd = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '~!@#$&*.?_-+';

    for (let i = 0; i < length; i++) {
      pwd += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pwd);
  }, [length, numAllowed, charAllowed, setLength]);

  //   const copyPasswordToClipboard = () => {
  //     window.navigator.clipboard.writeText(password);
  //   };

  const copyPasswordToClipboard = useCallback(() => {
    PasswordRef.current?.select();
    // PasswordRef.current?.setSelectionRange(0, 4);
    window.navigator.clipboard.writeText(password);

    const btn = document.querySelector('button');
    btn.style.backgroundColor = '#B53389';
    btn.innerHTML = 'Copied!';
    setTimeout(() => {
      btn.style.backgroundColor = '#1d4ed8';
      btn.innerHTML = 'Copy';
    }, 4000);
  }, [password]);

  useEffect(() => {
    passwdGenerator();
  }, [length, numAllowed, charAllowed, passwdGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 text-orange-500 p-4">
        <h1 className="text-lg font-semibold text-white mb-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full px-3 py-1"
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={PasswordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="flex gap-1">
            <input
              type="range"
              name="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="range">Length({length})</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              id="num"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="num">Number</label>
          </div>
          <div className="flex gap-1">
            <input
              type="checkbox"
              id="char"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="char">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
