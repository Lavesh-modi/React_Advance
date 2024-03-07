import "./App.css";
import { useState, useRef } from "react";
import { Input } from "./Component/hooks/inputBox";
function App() {
  // const [display, setDisplay] = useState(false);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e, "Form submitted!");

    console.log(inputRef.current.value, "inputRef");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input ref={inputRef} />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
