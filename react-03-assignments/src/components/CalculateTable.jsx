import React, { useState } from "react";

const CalculateTable = (props) => {
    let arr=[]
 
 for(let i=1; i<11; i++){
    let ele= i*props.nums
    arr.push(ele)
 }
  return (
    <div>
     {arr.map((item, index)=>{
        return (<li>{item}</li>)
     })}
    </div>
  );
};

export default CalculateTable;
