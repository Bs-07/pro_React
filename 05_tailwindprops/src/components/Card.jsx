import React from 'react';

function Card({ username = 'Nahh', someObj = {} }) {
  //   console.log(someObj.username);

  return (
    <>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-neutral-950">
        <img
          src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Lorem ipsum dolor
          </h2>
        </div>
        <p className="text-gray-300">{someObj.bio}</p>
      </div>
    </>
  );
}

export default Card;
