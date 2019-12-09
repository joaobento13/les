import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

import Router from "./Router";
import reducers from "./Reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducers, composeWithDevTools(applyMiddleware(sagaMiddleware, ReduxThunk))
);

export default props => (
    <Provider store={store}>
        <Router />
    </Provider>
);