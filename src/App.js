import React from "react";
import {createStore} from 'redux';
import reducer from "./redux/reducer";
import { Provider } from "react-redux";
import ReduxChild from "./redux/reduxChild";


const store = createStore(reducer)


function App() {
  return (

    <Provider store={store}>
    <div>

      App

     <ReduxChild />
      
    </div>
    </Provider>
  );
}

export default App;
