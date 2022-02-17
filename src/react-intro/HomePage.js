import About from "./About";
import Footer from "./Footer";
import Button from "./Button";
import ReusableButton from "./ReusableButton";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>Some text...</p>
      <ReusableButton>Home Page Button</ReusableButton>
      <About />
      <Button />
      <Footer />
    </div>
  );
};

export default HomePage;
