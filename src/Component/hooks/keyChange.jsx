import { useState } from "react";
import { Counter } from "./counter";

export const Shirt = () => {
  const [changeShirt, setChangeShirt] = useState(false);

  return (
    <div>
      {changeShirt ? (
        <>
          <h2>Shirt:</h2> <Counter />
        </>
      ) : (
        <div>
          <h2>Shoes:</h2> <Counter />
        </div>
      )}

      <button onClick={() => setChangeShirt(s=>!s)}>Change</button>
    </div>
  );
};
