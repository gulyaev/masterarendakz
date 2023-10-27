import ReactDOM from 'react-dom/client';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "antd/dist/reset.css";
import App from './App';
import store from './redux/state'

let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App appState={state} dispatch={store.dispatch.bind(store)} />
    );
}

rerenderEntireTree(store.getState())
  
store.subscribe(rerenderEntireTree)