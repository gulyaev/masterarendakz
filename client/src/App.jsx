import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./css/App.css";
import { initializeAppThunkCreator } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeAppThunkCreator();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="wrapper">
        <Header />
        <Main dispatch={this.props.dispatch} />
        <Footer />
      </div>
    );
  }
}

let mapStateToProps = (state) => (
  { initialized: state.app.initialized }
);

export default connect(mapStateToProps, { initializeAppThunkCreator })(App);
