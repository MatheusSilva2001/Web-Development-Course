import { AddButton } from "./components/AddButton";
import { CountCard } from "./components/CountCard";
import { ValueProvider } from "./contexts/valueContext";

export function App() {
  return (
    <>
    <ValueProvider />
      <h1>Class 04 Context</h1>

      <AddButton />

      <CountCard />

      <ValueProvider />
    </>
  );
}
