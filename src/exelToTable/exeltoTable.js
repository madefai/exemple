import React, { Component } from "react";
import readXlsxFile from "read-excel-file";
import Table from "./Table";

class excelToTable extends Component {
  state = {
    lignes: []
  };
  handleChange(FileList) {
    let newLignes = [];
    readXlsxFile(FileList[0]).then(rows => {
      rows.map(x => {
        newLignes.push(x);
        this.setState({ lignes: newLignes });
        console.log("_______________________________");
        console.log(this.state.lignes);
        return newLignes;
      });
    });
  }
  render() {
    return (
      <div>
        <input
          type="file"
          onChange={e => this.handleChange(e.target.files)}
          
        ></input>
        <Table lignes={this.state.lignes}></Table>
      </div>
    );
  }
}

export default excelToTable;
