import { Email, Item, Span, A, renderEmail } from 'react-html-email'

import axios from 'axios';
import React, { Component } from 'react';

class Emaill extends Component {

 
trt=()=>{
   renderEmail(
    <Email title="Hello World!">
      <Item align="center">
        <Span fontSize={20}>
          This is an example email made with:
          <A href="https://github.com/chromakode/react-html-email">react-html-email</A>.
        </Span>
      </Item>
    </Email>
  )
}
    

   
  render() {
    
    return (
      <div>
      <h>email</h>
      {this.trt()}
      </div>
            );
        }
}
export default Emaill;