import React from 'react';
const toggledrawer=(props)=>{
  return(
   <div onClick={props.toggle}><span className="glyphicon glyphicon-th-list" style={{color:'white',height:'100%'}}></span></div>
  )  
}
export default toggledrawer;