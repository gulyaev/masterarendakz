import ReactDOM from 'react-dom/client';
import App from './App';
import {addMessage, onMessageChange} from './redux/state';

export let rerenderEntireTree = (state_var) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App appState={state_var} addMessage={addMessage} onMessageChange={onMessageChange}/>
    );
}