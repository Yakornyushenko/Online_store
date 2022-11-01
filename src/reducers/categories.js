import {FETCH_CATEGORIES_SUCCESS} from "../actions/actionsTypes";
// import * as R from "ramda";

const initialState = {}

export default (state = initialState, {type, payload}) => {
    let res = {};
    switch (type) {
        case FETCH_CATEGORIES_SUCCESS:
             payload.forEach(item => res[item.id] = item)
            return res
            // const newValue = R.indexBy(R.prop('id'), payload)
            // return R.merge(state, newValue)
        default:
            return state
    }
}