import React from "react";
import {createStore} from 'redux';
import reducer from "./redux/reducer";
import { Provider } from "react-redux";
import ReduxChild from "./redux/reduxChild";
import RChildTwo from './redux/RChildTwo'
import Third_Child from "./redux/Third_Child";


const store = createStore(reducer)


function App() {
  return (

    <Provider store={store}>
    <div>

      App

     <ReduxChild />

     <RChildTwo/>
     <Third_Child/>
      
    </div>
    </Provider>
  );
}

export default App;
