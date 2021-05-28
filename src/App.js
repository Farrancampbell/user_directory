import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
class App extends Component {
  state = {
    searchData: "",
  };
  onSearchCallback = (searchValue) => {
    this.setState({ searchData: searchValue });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Body searchData={this.state.searchData} />
      </div>
    );
  }
}
export default App;