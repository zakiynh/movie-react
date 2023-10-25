import { PRICE } from "../actions/actionType";

const initialState = {
    price: null
};

export default function priceReducer(state = initialState, action) {
    switch (action.type) {
        case PRICE:
            return {
                ...state,
                price: action.payload,
            };
        default:
            return state;
    }
}