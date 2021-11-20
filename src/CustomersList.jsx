import React, { Component } from "react";

class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "John",
        phone: "123-456",
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Peter",
        phone: "333-456",
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 3,
        name: "Mark",
        phone: "222-456",
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 4,
        name: "Kyle",
        phone: null,
        photo: "https://picsum.photos/id/1015/60",
      },
      {
        id: 5,
        name: "Ellen",
        phone: null,
        photo: "https://picsum.photos/id/1000/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4>
          {this.state.pageTitle}
          <span> {this.state.customersCount}</span>
          <button className="m-2 btn btn-primary" onClick={this.refreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  refreshClick = () => this.setState({ customersCount: 7 });

  getCustomerPhone = (phone) => {
    return phone ? phone : <span className="text-danger">No Phone</span>;
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="N/A" className="px-2"></img>
            <button
              onClick={() => {
                this.onClickChangePic(cust, index);
              }}
            >
              Change Photo
            </button>
          </td>
          <td className={this.getCustomerNameStyle(cust.name)}>{cust.name}</td>
          <td>{this.getCustomerPhone(cust.phone)}</td>
        </tr>
      );
    });
  };
  getCustomerNameStyle = (name) => {
    return name.startsWith("J")
      ? "red-bg"
      : name.startsWith("P")
      ? "blue-bg"
      : "";
  };
  onClickChangePic = (cust, index) => {
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/1005/60";

    this.setState({ customers: custArr });
  };
}

export default MainContent;
