import React, { Component } from "react";
class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <tr>
        {this.props.data.map(el => {
          return <td>{el}</td>;
        })}
      </tr>
    );
  }
}

export default TableRow;
