import React from 'react';
import ReactToPdf  from "react-to-pdf";
import './pdfCRA.css'

const ref = React.createRef();

const PDFCRA = (props) => {
    return(
      <div>
      <div className="Pagination" ref={ref}>

<p>{props.countent}</p>
      </div>
      <ReactToPdf  targetRef ={ref} filename="Pagination.pdf">
          {({toPdf}) => <button onClick={toPdf}> capture as PDF</button>}
      </ReactToPdf >
  </div>
    )
}
export default PDFCRA;