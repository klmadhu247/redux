import React from "react";
import increment2 from "./increment2";
import { connect } from "react-redux";

function Third_Child ({age,increment2}){
    return(
        <div>
            <h3>This is Accessed by Third_Child</h3>
            <p>The age from  Third Child:  {age}</p>

            <button onClick={increment2}>Increment By 2</button>


        </div>
    )
}

const mapStateToProps = (state) =>
{
    return{
        age:state.age
    }
}

const mapDispatchToProps = (dispatch)=>
{
    return{

        increment2:()=>dispatch(increment2())
    }
}


export default connect (mapStateToProps,mapDispatchToProps) (Third_Child)