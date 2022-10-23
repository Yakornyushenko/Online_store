import {FETCH_PHONE_SUCCESS} from "../actions/actionsTypes";
import * as R from "ramda";

const initialState = {
    id: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONE_SUCCESS:
            // return R.merge(state, {
            //     id: R.prop('id', payload)
            // })
            return state = payload.id
        default:
            return state
    }
}