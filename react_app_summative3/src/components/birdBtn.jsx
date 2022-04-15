import React, {useState} from 'react';
import '../css/discover.css';


const birdBtn
 =({setItem, menuItems}) => {
  const Data = "http://localhost:4000/api/animals";
  const filterCategory = [...new Set(Data.map((Val) => Val.category))];
  return (
    <div>
    {menuItems.map((Val, category) =>{
      return(
        <button key={category}>{Val}Bird</button>
      )
    })}
    <button onClick={() => setItem(Data)}>Birds</button>
    </div>
  )
}


export default birdBtn
