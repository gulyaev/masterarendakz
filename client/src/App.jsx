import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./css/App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Main postsData={props.postsData} dialogsData={props.dialogsData} messagesData={props.messagesData} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
