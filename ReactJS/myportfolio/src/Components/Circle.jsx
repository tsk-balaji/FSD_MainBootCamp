import React from "react";

class Circle extends React.Component {
  constructor() {
    super();
    this.state = {
      object: "Circle",
      color: "Red",
    };
  }
  render() {
    return <div className="circle">{this.state.object}</div>;
  }
}

export default Circle;
