import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/discover.css';
import Editbtn from '../components/Editbtn.jsx';



const filterBtn =({setItem, menuItems}) => {
  const Data = "http://localhost:4000/api/animals";
  const filterCategory = [...new Set(Data.map((Val) => Val.category))];
  return (
    <div>
    {menuItems.map((Val, category) =>{
      return(
        <button key={category}>{Val}All</button>
      )
    })}
    <button onClick={() => setItem(Data)}>ALL</button>
    </div>
  )
}


export default filterBtn