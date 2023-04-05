import React, { useState } from 'react'
import CalculateTable from './CalculateTable'

const Table = () => {
    let [num, setNum]=useState();
  return (
    <div>
     <label> Number<input onChange={(e)=>setNum(e)}></input></label> 
     <button>print</button>
      <CalculateTable nums={num} />
    </div>
  )
}

export default Table
