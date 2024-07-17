import React, { useState } from "react";
import CustomerView from "./CustomerView";

function CustomerAdd (){

const [input,setInput] = useState('');

const [customers ,setCustomers]= useState([])

const handleChange =(e)=>
{
    setInput(e.target.value)
}

const handleAdd =()=>
{

    if(input)
    {
        setCustomers((previousState)=> [...previousState, input]);
    setInput('')

    }
    
    console.log(customers)

}



    return(
      <>    <div>
            <h3>Add New CustomerAdd </h3>
            <input value={input} type="text" onChange={handleChange}/>
            <button onClick={handleAdd}>Add</button>

        </div>

        <CustomerView customers={customers}/>

        </>
    )
}
export default CustomerAdd