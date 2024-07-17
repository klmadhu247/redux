import React from "react";
import { connect } from "react-redux";

function ReduxChild(props){

    
    return(
        <div>

            ReduxChild 
            <p>'The Name is: ' {props.Name}<br/>
            Age : {props.age}</p> 

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

    //connecting component with state

export default connect (mapStateToProps)  (ReduxChild)