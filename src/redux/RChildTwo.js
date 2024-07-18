import React from "react";
import { connect } from "react-redux";
import decrementCount from "./decrement";

function RChildTwo ({age, decrementCount})
{
    return(
        <div>

            <h3>ReduxChild2</h3>

            <p>The age accessed from RChildTwo: {age}</p>

            <button onClick={decrementCount}>Decrement</button>

        </div>
    )
}

const mapStateToProps = (state)=>
{
    return{
        age:state.age
    }
}

const mapDispatchToProps = (dispatch)=>
{
    return {decrementCount:()=> dispatch(decrementCount())}
}



export default connect (mapStateToProps,mapDispatchToProps) (RChildTwo)