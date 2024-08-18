import React from "react";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  );
};

export default App;
