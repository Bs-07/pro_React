import { useState } from 'react';

function App() {
  const [color, setColor] = useState('lavender');

  return (
    <div>
      <div
        className="w-full h-screen duration-500"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-8 flex flex-wrap justify-center inset-x-0  p-2">
          <div className="flex flex-wrap justify-between gap-3 px-3 py-2 bg-white rounded-3xl">
            <button
              onClick={() => setColor('red')}
              className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg hover:scale-105 hover:-translate-y-0 duration-150 ..."
              style={{ backgroundColor: 'red' }}
            >
              Red
            </button>
            <button
              onClick={() => setColor('green')}
              className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg hover:scale-105 hover:-translate-y-0 duration-150"
              style={{ backgroundColor: 'green' }}
            >
              Green
            </button>
            <button
              onClick={() => setColor('blue')}
              className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg hover:scale-105 hover:-translate-y-0 duration-150"
              style={{ backgroundColor: 'blue' }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor('olive')}
              className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg hover:scale-105 hover:-translate-y-0 duration-150"
              style={{ backgroundColor: 'olive' }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor('gray')}
              className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg hover:scale-105 hover:-translate-y-0 duration-150"
              style={{ backgroundColor: 'gray' }}
            >
              Gray
            </button>
            <button
              onClick={() => setColor('yellow')}
              className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg hover:scale-105 hover:-translate-y-0 duration-150"
              style={{ backgroundColor: 'yellow' }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor('pink')}
              className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg hover:scale-105 hover:-translate-y-0 duration-150"
              style={{ backgroundColor: 'pink' }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor('purple')}
              className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg hover:scale-105 hover:-translate-y-0 duration-150"
              style={{ backgroundColor: 'purple' }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor('lavender')}
              className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg hover:scale-105 hover:-translate-y-0 duration-150"
              style={{ backgroundColor: 'lavender' }}
            >
              Lavender
            </button>
            <button
              onClick={() => setColor('white')}
              className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg hover:scale-105 hover:-translate-y-0 duration-150"
              style={{ backgroundColor: 'white' }}
            >
              White
            </button>
            <button
              onClick={() => setColor('black')}
              className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg hover:scale-105 hover:-translate-y-0 duration-150"
              style={{ backgroundColor: 'black' }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
