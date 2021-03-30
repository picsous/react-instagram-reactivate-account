import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Layout from "./Layout";

const App = () => (
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <switch>
                    <Layout/>
                </switch>
            </Router>
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
