import React, { Component } from "react";
import TableRow from "./TableRow";
class Table extends Component {
  state = {};
  render() {
    return (
      <table id="aymTable">
        {this.props.lignes.map(e => {
          return <TableRow data={e}></TableRow>;
        })}
      </table>
    );
  }
}

export default Table;
