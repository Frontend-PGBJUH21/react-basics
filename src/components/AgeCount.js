import { useState } from "react";

const AgeCount = () => {
  const [age, setAge] = useState(24);

  const handleAgeUp = () => {
    setAge(age + 1);
  };

  const handleAgeDown = () => {
    setAge(age - 1);
  };

  return (
    <div className="container">
      <h1>Use State Hook</h1>
      <h2>Age: {age}</h2>
      <button onClick={handleAgeUp}>Age Up</button>
      <button onClick={handleAgeDown}>Age Down</button>
    </div>
  );
};

export default AgeCount;
