import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducer";
import NumberInput from "./redux/NumberInput";
import NumberList from "./redux/NumberList";

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Number List</h1>
        <NumberInput />
        <NumberList />
      </div>
    </Provider>
  );
};

export default App;
