import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MultipleInput = () => {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    userName: "",
  });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
    setPerson({ ...person, [name]: value });
    // dynamic value, wich ever prop it is on our state
    //= gets the name of that object
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.userName) {
      const newPerson = { ...person, id: uuidv4() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", userName: "" });
    }
  };

  return (
    <div className="sass">
      <h1 className="sass__h1">Form</h1>
      <h2>Controlled Inputs</h2>
      <div>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="userName">User name: </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={person.userName}
              onChange={handleChange}
            />
          </div>
          <button className="form-btn" type="submit" onClick={handleSubmit}>
            Add Person
          </button>
        </form>
        <div style={{ marginTop: "10rem" }}>
          {people.map((person) => {
            const { id, firstName, email, userName } = person;
            return (
              <div className="item" key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
                <p>{userName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MultipleInput;
