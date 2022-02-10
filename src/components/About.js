import Button from "./Button";
import ReusableButton from "./ReusableButton";

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <p>Some text...</p>
      <Button />
      <ReusableButton>About Page Button</ReusableButton>
    </>
  );
};

export default About;
