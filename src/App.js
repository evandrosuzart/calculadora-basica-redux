import React from "react";
import { Provider } from "react-redux";
import Operacoes from "./Operacoes";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Operacoes />
    </Provider>
  );
};
export default App;
