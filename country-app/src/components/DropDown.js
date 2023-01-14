import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React from 'react'

export default function DropDown() {
    const options = [
    'one', 'two', 'three'
    ];
    const defaultOption = options[0];
    function xyz(event){
        console.log(event);
    }
  return (
    
        <Dropdown options={options} onChange={xyz}  value={defaultOption} placeholder="Select an option" placeholderClassName='myPlaceholderClassName'/>
  )
}
