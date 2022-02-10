import { useState } from "react";
import HomePage from "./components/HomePage";
import ClickerHooks from "./components/ClickerHooks";
import ClickerClass from "./components/ClickerClass";
import AgeCount from "./components/AgeCount";
import NameTag from "./components/NameTag";

const initialNames = [
  { firstName: "Helena", lastName: "Johansson" },
  { firstName: "Tore", lastName: "Toresson" },
  { firstName: "Doris", lastName: "Dorisson" },
];

function App() {
  const [names, setNames] = useState(initialNames);

  return (
    <div className="container">
      {names.map((n, i) => {
        return (
          <NameTag key={i} firstName={n.firstName} lastName={n.lastName} />
        );
      })}
    </div>
  );
}

export default App;

/*

const nameStyle = {
  color: "green",
  border: "1px solid green",
};

const nameStyleTitle = {
  borderStyle: "dotted",
  letterSpacing: "1px",
};

 <NameTag firstName={names[0].firstName} lastName={names[0].lastName} />
      <NameTag firstName={names[1].firstName} lastName={names[1].lastName} />
      <NameTag firstName={names[2].firstName} lastName={names[2].lastName} />

<div className="container">
      <h1 style={{ ...nameStyle, ...nameStyleTitle }}>Name List</h1>
      <h3 style={{ color: "magenta", border: "1p solid black" }}>Hej hej</h3>
      <h3 style={nameStyle}>Hej hej</h3>
      <NameTag
        style={{ color: "pink" }}
        firstName="Helena"
        lastName="Johansson"
      />
      <NameTag firstName="Nisse" lastName="Johansson" />
      <NameTag firstName="Sara" lastName="Johansson" />
    </div>
*/
