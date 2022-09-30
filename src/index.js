import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { customerReducer } from "./redux/reducers/customers.reducer";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));

const customersStore = createStore(customerReducer, applyMiddleware(thunk))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={customersStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
