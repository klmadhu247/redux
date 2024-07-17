import React from "react";
function CustomerView ({customers}){
    return(
        <div>
            <h3>Customers List</h3>

            <ul style={{listStyle:'none'}}>
                {customers.map((customer)=>
                <li>{customer}</li>)}
            </ul>

        </div>
    )

}
export default CustomerView