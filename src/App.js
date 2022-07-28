import { Component } from "react";
import "./App.css";

import Character from "./components/Character";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true,
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <Character />
      </div>
    );
  }
}

export default App;
