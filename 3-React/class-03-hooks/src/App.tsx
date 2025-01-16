import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  console.log(count);

  function add() {
    setCount(count + 1);
  }

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  return (
    <>
      <h1>Class 03 Hooks</h1>

      <p>count: {count} </p>

      <button onClick={add}>add</button>

      <p>name: {name} </p>
      <input type="text" onInput={handleName} />
    </>
  );
}
