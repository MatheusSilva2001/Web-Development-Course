import { useContext } from "react";
import { ValueContext } from "../contexts/valueContext";

export function AddButton() {
  const { setUpValue, setDownValue } = useContext(ValueContext);
  return (
    <>
      <button onClick={setUpValue}>Add+</button>
      <button onClick={setDownValue}>Add-</button>
    </>
  );
}
