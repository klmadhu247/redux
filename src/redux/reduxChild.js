import React from "react";
import { connect } from "react-redux";
import incermentCount from "./incrementCount";

function ReduxChild({age,Name,incermentCount}){ // function ReduxChild(props) we can also mention like this but we are destructuring as age,Name,incrementcount
    
    return(
        <div>

            ReduxChild 
            <p>'The Name is: {Name}<br/> 
            Age : {age}</p> 
            <button onClick={incermentCount}>Increment</button>

        </div>
    )
}
//to move state present in store to props
const mapStateToProps = (state)=>
    {
        return{
            Name:state.Name,
            age:state.age
        }

    }

    const mapDispatchToProps = (dispatch)=>
    {
        return{
            incermentCount:()=>dispatch(incermentCount())

        }
    }

    //connecting component with state

export default connect (mapStateToProps,mapDispatchToProps)  (ReduxChild)