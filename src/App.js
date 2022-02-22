import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import Layout from "./components/Layout";
import ControlledInput from "./components/ControlledInput";
import MultipleInput from "./components/MultipleInput";

/*
I ert projekt skulle ni kunna använda er av mockdata, alltså "låtsas" data. 
Det går bra att skapa tex en array med objekt inne i samma komponent som ni vill 
ska rendera arrayen. Se till att lägga den utanför själva komponenten för att undvika
problem.
*/

const initialNames = [
  { firstName: "Helena", lastName: "Johansson" },
  { firstName: "Tore", lastName: "Toresson" },
  { firstName: "Doris", lastName: "Dorisson" },
  { firstName: "Janne", lastName: "Jannesson" },
];

function App() {
  const [names, setNames] = useState(initialNames);
  // names = array med object
  // return an array with 2 values, one is getter and one is setter

  return (
    <div className="container">
      {names.map((v, i) => {
        // names = array med object
        // loopar igenom array, för varje namn som är i arrayen
        // så ska vi visa en NameTag komponent
        return (
          <NameTag key={i} firstName={v.firstName} lastName={v.lastName} />
        );
      })}
    </div>
  );
}

export default App;

/*
const [profile, setProfile] = useState(initProfile);

  // get users from github API
  async function getProfile() {
    const response = await fetch("https://api.github.com/users/pickadolly");
    const json = await response.json();

    setProfile({
      publicRepos: json.public_repos,
      website: json.blog,
    });
  }

  // Load github profile data from API when page mounts
  useEffect(() => {
    getProfile();
    //only load this one time when page is mounted
  }, []);
  
    <h2>Fetch Data useEffect Example</h2>
      <h3>{`Public repos:  ${profile.publicRepos}`}</h3>
      <h3>{`Website:  ${profile.website}`}</h3>*/
