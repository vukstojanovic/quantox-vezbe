import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import loginReducer from './reducers/loginReducer';
import { combineReducers } from 'redux';

const store = createStore(combineReducers({cartReducer: cartReducer, loginReducer: loginReducer}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Suspense fallback={<h1>Loading...</h1>}> */}
        <App />
      {/* </Suspense> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
