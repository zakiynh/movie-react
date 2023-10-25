import { applyMiddleware, createStore } from 'redux';
import rootRedcuer from './reducer/rootReducer';
import logger from './middleware/logger';
import thunk from 'redux-thunk';

let store = createStore(rootRedcuer, applyMiddleware(logger, thunk));

export default store;