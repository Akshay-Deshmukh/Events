import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './app/layout/App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from './app/store/configureStore';
import ScrollToTop from "./app/common/utli/ScrollToTop";

const store = configureStore();
const rootEl = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop>
    <App />
    </ScrollToTop>
    </BrowserRouter>
    </Provider>
  ,
  rootEl
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
