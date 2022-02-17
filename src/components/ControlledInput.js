import { useState } from "react";

const ControlledInput = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("Empty values");
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <h2>Controlled Inputs</h2>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="form-btn" type="submit">
            Add Person
          </button>
        </form>
        <div style={{ marginTop: "10rem" }}>
          {people.map((person) => {
            const { id, firstName, email } = person;
            return (
              <div className="item" key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ControlledInput;
