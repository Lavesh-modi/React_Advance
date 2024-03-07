import { useState } from "react";

export const Counter = () => {
  const [state, setState] = useState({ count: 0 });
  console.log(state)

  return (
    <>
      {/* <button onClick={() => setState((prevState) => prevState.count + 1)}>+</button> */}
      <button onClick={() => setState((prevState) => ({ count: prevState.count + 1 }))}>+</button>
      {state.count}
      <button onClick={() => setState((prevState) => ({ count: prevState.count - 1 }))}>-</button>
    </>
  );
};
