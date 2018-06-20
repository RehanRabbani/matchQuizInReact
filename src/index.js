import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  // guessNum(){
  //   let compterNumber;
  //   compterNumber =this.setState( parseInt(Math.random() * 100));
  //   console.log(compterNumber);
  // }
  myfunc() {
    let num;
    //let num1 ={this.State.guessNum};
      let  compterNumber = 75;
    num = parseInt(document.querySelector("input").value);
    if (num === compterNumber) {
      alert("congratz!!you won");
    } else if (num > compterNumber) {
      alert("too high!!");
    } else {
      alert("too low");
    }
  }

  render() {
    return (
      <section>
        <p>enter number</p>
        <input type="number" />
        <button onClick={this.myfunc}>click</button>
        <button onClick={this.guessNum}>change Number</button>
      </section>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
