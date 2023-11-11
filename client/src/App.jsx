import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./css/App.css";
import { setUserData } from "./redux/auth-reducer";
import axios from 'axios';

const App = (props) => {

  const auth = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/me`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      )
      props.dispatch(setUserData(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      //alert(e.response.data.message + "123")
      localStorage.removeItem('token')
    }
  }

  useEffect(() => {
    auth()
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
