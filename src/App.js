import React from "react";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export default App;
