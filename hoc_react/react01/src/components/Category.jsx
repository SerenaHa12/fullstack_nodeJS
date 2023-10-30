import { Component } from "react";
import Product from "./Product";

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleToggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        {this.state.show && <Product />}
        <button onClick={this.handleToggle}>click</button>
      </div>
    );
  }
}
