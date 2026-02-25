import React, { useState } from "react";

export default function Listrendering()
{
  const Color = ["red","blue","orange","gray","yellow","black","white","brown"];

  const [count, setCount] = useState(0);

  return(
    <div class="Listrendering">
      <h2>List Rendering</h2>

      <ul>
        {Color.map((name, ind) => (
          <li key={ind}>{name}</li>
        ))}
      </ul>

      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
      <button onClick={() => setCount(0)}>Reset</button>
      

    </div>
  )
}
