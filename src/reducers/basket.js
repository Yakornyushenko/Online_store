import {
    ADD_PHONE_TO_BASKET,
    CLEAN_BASKET,
    REMOVE_PHONE_FROM_BASKET} from "../actions/actionsTypes";

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PHONE_TO_BASKET:
            return [...state, payload]
        case REMOVE_PHONE_FROM_BASKET:
            return state.filter(el => el !== payload) || []
        case CLEAN_BASKET:
            return state = []
        default:
            return state
    }
}

