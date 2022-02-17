import { useState } from "react";

const ClickerHooks = ({ rand }) => {
  const [num, setNum] = useState(1);
  // useState is a function so we need to init a value
  // this will return an array, and the array has 2 valuse
  // one is a getter and one is a setter

  const genRandom = () => {
    rand = Math.floor(Math.random() * 10) + 1;

    setNum(rand);
    // update state with the new value
    // useState sets the initial value and then gives us two variables by
    // destructuring. num gives us the value and setNum will give us the
    // possibility to update the value.
  };

  return (
    <div className="container">
      <h1>Number is: {num}</h1>
      {num === 7 ? (
        <h2>YOU WIN!</h2>
      ) : (
        <button onClick={genRandom}>Random Number</button>
      )}
    </div>
  );
};

export default ClickerHooks;
