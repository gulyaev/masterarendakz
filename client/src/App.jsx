import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./css/App.css";
import { authThunkCreator } from "./redux/auth-reducer";
import { useDispatch } from "react-redux";

const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authThunkCreator())
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Main dispatch={props.dispatch} />
      <Footer />
    </div>
  );
}

export default App;
