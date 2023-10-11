import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "antd/dist/reset.css";
import state from "./redux/state";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App appState={state} />
);
