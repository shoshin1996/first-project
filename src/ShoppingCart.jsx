import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "Iphone", price: 8900, quantity: 23 },
      { id: 2, productName: "Samsung", price: 540, quantity: 25 },
      { id: 3, productName: "Sony Camera", price: 1200, quantity: 23 },
      { id: 4, productName: "Motorola", price: 890, quantity: 25 },
      { id: 5, productName: "Blackberry", price: 180, quantity: 31 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div>ShoppingCart</div>
        <div>
          {this.state.products.map((prod) => {
            return <Product />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
