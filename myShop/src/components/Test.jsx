import React, { useEffect, useState } from "react";

export default function Test() {
  const [state, setState] = useState([]);

  async function Fetch() {
    const data = await fetch("http://localhost:5000");
    const response = await data.json();
    console.log(response);
    setState(response);
  }

  useEffect(() => {
    Fetch();
  }, []);
  return (
    <div>
      {state &&
        state.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" />
          </div>
        ))}
    </div>
  );
}
