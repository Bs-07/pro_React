import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/hiteshchoudhary')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  return (
    <>
      <div className="bg-gray-600 flex justify-center text-white font-bold gap-4">
        <img
          className="rounded-full"
          src={data.avatar_url}
          width={200}
          height={200}
        />
        <div>
          <p>{data.name}</p>
          <p>Github followers: {data.followers}</p>
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  return response.json();
};
