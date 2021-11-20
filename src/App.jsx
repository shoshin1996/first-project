import React, { Component } from "react";
// import CustomersList from "./CustomersList";
import NavBar from "./Navbar";
import ShoppingCart from "./ShoppingCart";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ShoppingCart />
      </React.Fragment>
    );
  }
}

export default App;
