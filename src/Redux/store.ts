import {createStore, combineReducers, applyMiddleware} from 'redux';
import calculator from './Calculadora/reducer';
import thunk from 'redux-thunk';

export const store: any = createStore(
  combineReducers({calculator}),
  applyMiddleware(thunk),
);