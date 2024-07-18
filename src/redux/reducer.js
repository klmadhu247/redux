
//initial state
const initialState = {
    Name:'Madhu',
    age:35,
}

//creating reducer
const reducer = (state=initialState, action)=>
{
    switch(action.type) {
        case 'INCREMENT':
            return {...state, age: state.age + 1};
        case 'DECREMENT':
            return {...state, age: state.age - 1};
            case 'INCREMENTBY2':
                return {...state, age:state.age+2}
        default:
            return state;
    }
    
}
export default reducer