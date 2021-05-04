import React, { Component } from 'react';
import {tableData} from '../data';
import Search from '../Search/Search';
import moment from 'moment';
import ExcelToTable from '../exelToTable/exeltoTable';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from '../Print/Print';
import { BsFillCaretUpFill ,BsFillCaretDownFill} from "react-icons/bs";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import './Pagination.css'
import img5 from '../img/product-1.png'
import PDFCRA from '../pdfCRA/pdfCRA';
import ReactToPdf  from "react-to-pdf";
import { red } from 'color-name';
import PdfReact from '../pdfReact/pdfReact';


const animatedComponents = makeAnimated();
const ref = React.createRef();
class Pagination extends Component {
 
  constructor(props) {
    super(props);
    this.state = { 
      data: tableData ,
      page: 1,
      rows: 5,
      tabNumBtn:[],
      pages:0,
      dataPage:[],
      firstRef:0,
      lastRef:3,
      tabNumBtns:[1,2,3],
      filter:'',
      tab1:'',
      tab2:'',
      tab3:'',
      colourOptions : [
       { value: 'first_name', label: 'nom', isFixed: true },
       { value: 'last_name', label: 'last_name' },
      { value: 'rank', label: 'rank' },
        
      ],
      selectedOption: [],
      selectedOption1: '',
      tabSelect:[],
      countent:'youssef'
      
    };
    
  }
 
  filterUpdate(value){
    this.setState({
     filter: value
    })}
  changePage(number){
   
    this.setState({
      page:number
    })
    
    if(number>1 && number<this.state.tabNumBtn.length){
      var x=parseInt(number)
      this.state.lastRef=x+1
      this.state.firstRef=x-2
    }
  }
  numberBtn(data,page,rows){
    this.state.pages = data.length /rows ;
    for(var i=0;i<this.state.pages;i++){
    if(this.state.tabNumBtn[i]!==i+1)
      this.state.tabNumBtn.push(i+1)
    }
    
    
    this.state.tabNumBtnn = this.state.tabNumBtn.slice(this.state.firstRef, this.state.lastRef)
    
    var first = (page - 1) * rows
    var last = first + rows

    this.state.dataPage = data.slice(first, last)
  
  }
 
filterNomSec(){
  
this.setState({
     
     data : this.state.data.sort((a, b) => a.first_name.localeCompare(b.first_name))
    });
  
}
filterNomDes(){
  const reversed= this.state.data.sort((a, b) => a.first_name.localeCompare(b.first_name))
  this.setState({
       
       data : reversed.reverse()
      });
    
  }
  filterPrenomSec(){
    this.setState({
     
      data : this.state.data.sort((a, b) => a.last_name.localeCompare(b.last_name))
     });
  }
  filterPrenomDes(){
    const reversed= this.state.data.sort((a, b) => a.last_name.localeCompare(b.last_name))
  this.setState({
       
       data : reversed.reverse()
      });
  }
  filterRankSec(){
    this.setState({
     
      data : this.state.data.sort((a, b) => a.rank-b.rank)
     });
  }
  filterRankDes(){
    const reversed= this.state.data.sort((a, b) => a.rank-b.rank)
    this.setState({
         
         data : reversed.reverse()
        });
  }
  filterDateDes(){
    const reserved=this.state.data.sort((a, b) => new moment(a.date[6]+a.date[7]+a.date[8]+a.date[9]+"-"+a.date[3]+a.date[4]+"-"+a.date[0]+a.date[1])-new moment(b.date[6]+b.date[7]+b.date[8]+b.date[9]+"-"+b.date[3]+b.date[4]+"-"+b.date[0]+b.date[1]))
      this.setState({
      
       data : reserved.reverse()
       });
  }
  filterDateSec(){
      this.setState({
      
       data : this.state.data.sort((a, b) => new moment(a.date[6]+a.date[7]+a.date[8]+a.date[9]+"-"+a.date[3]+a.date[4]+"-"+a.date[0]+a.date[1])-new moment(b.date[6]+b.date[7]+b.date[8]+b.date[9]+"-"+b.date[3]+b.date[4]+"-"+b.date[0]+b.date[1]))
   
       });
  }
  printPdf(){
 
    const doc = new jsPDF();
    doc.autoTable({html: '#my-table1'});
   doc.autoTable({html: '#my-table'});
  
   doc.text("Hello world!", 10, 10);
    doc.save('SolErp.pdf');
    
    
  }
  
 
handleChangeSelect = selectedOption => {
  this.setState({ selectedOption });
  
  this.setState({ selectedOption1: selectedOption[selectedOption.length-1].value});
  console.log('selectedOption1',this.state.selectedOption1);
  this.state.tabSelect.push(selectedOption[selectedOption.length-1].value)
  
  console.log("this.state.tabSelect",this.state.tabSelect);
  
  
}
changeTd(e,x){
  
  console.log("e",x);
this.setState({
  tab1:e
})
console.log("tab1",this.state.tab1);

} 
selectTd(a,x){
  console.log("x",x);
  console.log("a",a);
}
 render() {
    const { selectedOption } = this.state;
   const CaseTab1=this.state.tabSelect[0]
    var valueselectedOption=''
    var arrayJoin=[this.state.selectedOption1];
    console.log("arrayjoin",arrayJoin[0]);
    var arrayJoin1=arrayJoin[0];
    console.log("arrayjoin1",arrayJoin1);
   
    
        return (

      <div ref={el => (this.componentRef = el)}>
        
        
        {this.numberBtn(this.state.data,this.state.page,this.state.rows)}
        <ExcelToTable />
        <div id="pdftest">
        
        <Search 
        filter={this.filter}
        filterUpdate={this.filterUpdate.bind(this)}
        
        /> 
        
        


      
            <ReactToPdf  targetRef ={ref} filename="Pagination.pdf">
                {({toPdf}) => <button onClick={toPdf}> capture as PDF</button>}
            </ReactToPdf >
        

        <button onClick={()=>this.printPdf()}>Generate pdf</button>
        {/* <ComponentToPrint countent={this.state.countent} ref={el => (this.componentRef = el)} /> */}


        <ReactToPrint
          trigger={() => <button>imprimer</button>}
          content={() => this.componentRef}
          
        />
            <table id="my-table" >
                <thead>
                    <tr>
                        <th>Nom <BsFillCaretUpFill onClick={()=>this.filterNomSec()}/><BsFillCaretDownFill onClick={()=>this.filterNomDes()}/></th>
                        <th>Prenom <BsFillCaretUpFill onClick={()=>this.filterPrenomSec()}/><BsFillCaretDownFill onClick={()=>this.filterPrenomDes()}/></th>
                        <th>Numero <BsFillCaretUpFill onClick={()=>this.filterRankSec()}/><BsFillCaretDownFill onClick={()=>this.filterRankDes()}/></th>
                        <th>Date <BsFillCaretUpFill onClick={()=>this.filterDateSec()}/><BsFillCaretDownFill onClick={()=>this.filterDateDes()}/></th>
                    </tr>
                </thead>
                <tbody>
                  {
                this.state.dataPage
                 
                 //.filter(user=>{return (user.first_name[0].toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0||user.last_name[0].toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0 ||user.rank[0].toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0)||user.date.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0})
                 
                 .filter(user=>{return (
                
                    
                    arrayJoin1==='first_name'?
                    user.first_name.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0:arrayJoin1===''?
                    user.first_name.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0:arrayJoin1==='last_name'?
                    user.last_name.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0:user.rank.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0
                   )})
                  
                  .map(user=><tr><td>{user.first_name}</td><td>{user.last_name}</td><td>{user.rank}</td><td>{user.date}</td></tr>)
               }
                </tbody>
            </table>
            <table id="my-table1" >
                <thead>
                    <tr>
                        <th>Nom </th>
                        <th>Prenom </th>
                        <th>Numero </th>
                        <th>Date </th>
                    </tr>
                </thead>
                <tbody>
                  {
                this.state.dataPage.map((user,index)=><tr>
                 
                 <td className={index} onClick={()=>this.selectTd(this.setState.tab1,index)}><input type="text" name={user.rank} value={user.rank} onChange={(e)=>this.changeTd(e.target.value,user.rank)}/></td>
                <td><input type="text" name={user.rank} value={user.rank} onChange={(e)=>this.changeTd(e.target.value,user.rank)}/></td>
                <td><input type="text" name={user.date} value={user.date} onChange={(e)=>this.changeTd(e.target.value,user.rank)}/></td>
                </tr>)
                  }
                </tbody>
            </table>
        </div>

        <div>
            <div></div>
        </div>
        <button value="1" onClick={(e)=>this.changePage(e.target.value)}>First</button>

        {this.state.tabNumBtnn.map(user=>
        <button value={user} onClick={(e)=>this.changePage(e.target.value)}>{user}</button>
        )}
        <button value={this.state.tabNumBtn.length} onClick={(e)=>this.changePage(e.target.value)}>Last</button>


       
        <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[this.state.colourOptions[0]]}
      isMulti
      options={this.state.colourOptions}
      id="selectPopover"
      value={selectedOption}
      onChange={this.handleChangeSelect}
      
      />
      <Search 
        filter={this.filter}
        filterUpdate={this.filterUpdate.bind(this)}
        
        /> 

<p id="pyoussef">youssef</p>

    <PDFCRA countent={this.state.countent}/>
        </div>
    );
  }
}

export default Pagination;

// icons => npm install react-icons --save
// imprimer => npm install --save react-to-print
// pdf autotable => npm install jspdf jspdf-autotable
// pdf => npm install jspdf --save
// importer excel => npm install read-excel-file --save
// moment => npm install --save moment react-moment
// react select => npm i react-select