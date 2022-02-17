import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import ControlledInput from "./components/ControlledInput";
import MultipleInput from "./components/MultipleInput";

const initProfile = {
  publicRepos: null,
  website: null,
};

function App() {
  return (
    <Layout>
      <MultipleInput />
    </Layout>
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
