import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReduxHistoryContext, reachify } from "redux-first-history";
import { createWouterHook } from "redux-first-history/wouter";
import { createBrowserHistory } from 'history';
import createSagaMiddleware from '@redux-saga/core';
import { compose } from "redux";
import { createSagaInjector } from "./saga-injector";
import { createReducerInjector } from "./reducer-injector";
import rootReducer from "./reducer";
import logger  from 'redux-logger';

import { sagaWatcher as userSagaWatcher} from "../container/user/saga";
import { sagaWatcher as workItemSagaWatcher } from "../container/work-item";
import { reducer as workItemReducer } from "../container/work-item";

import { sagaWatcher as layoutSagaWatcher } from "../container/layout";
import { reducer as layoutReducer } from "../container/layout";


const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ 
  history: createBrowserHistory(),
  //other options if needed 
});

const sagaMiddleware = createSagaMiddleware();

const rootReducers = {router: routerReducer, 
  rootReducer, 
  workItemReducer, 
  layoutReducer,
};
const combinedRootReducers = combineReducers(rootReducers);

let enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware, logger, routerMiddleware));

function configureStore() {
  const store = createStore(combinedRootReducers, enhancer);

  store.injectReducer = createReducerInjector(store, rootReducers);
	store.injectSaga = createSagaInjector(sagaMiddleware.run, [
    { key: "userSaga", value: userSagaWatcher }, 
    { key: "workItemSaga", value: workItemSagaWatcher },
    { key: "layoutSaga", value: layoutSagaWatcher },
  ]);
  return store;
}

export const store = configureStore();

export const history = createReduxHistory(store);
//if you use @reach/router 
export const reachHistory = reachify(history);
//if you use wouter
export const wouterUseLocation = createWouterHook(history);


