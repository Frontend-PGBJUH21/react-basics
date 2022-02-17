import { Component } from "react";

class ClickerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
    this.genRandom = this.genRandom.bind(this);
  }

  genRandom() {
    let rand = Math.floor(Math.random() * 10) + 1;

    //update state
    this.setState({ num: rand });
  }

  render() {
    return (
      <div className="container">
        <h1>Number is: {this.state.num}</h1>
        {this.state.num === 7 && <h2>YOU WIN!</h2>}
        {this.state.num !== 7 && (
          <button onClick={this.genRandom}>Random Number</button>
        )}
      </div>
    );
  }
}

export default ClickerClass;
