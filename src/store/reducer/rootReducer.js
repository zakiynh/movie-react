import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import priceReducer from './priceReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    price: priceReducer
});

export default rootReducer;