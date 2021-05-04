import React, { Component } from 'react';





class Search extends Component {
   
 filterUpdate(){
     const val = this.myValue.value
     this.props.filterUpdate(val)
 } 
 


  render() {


    return(

                  <div className="inputFiltre">
                       
                        <input type="text" 
                              ref={(value)=>{this.myValue=value}}
                              placeholder="  Rechercher"
                              onChange={this.filterUpdate.bind(this)}
                        />
                        
                  </div>
        
  );
   
  }
}

export default Search;