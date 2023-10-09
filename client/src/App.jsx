import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import "./css/App.css";

const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Main appState={props.appState} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
