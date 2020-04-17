import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import mainReducer from '../TestApp/reducers';

const store = createStore(
  mainReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),
);
export default store;
