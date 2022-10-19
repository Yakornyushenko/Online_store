import * as R from 'ramda';

import {
    FETCH_ALL_PHONES_SUCCESS
} from "../actions/actionsTypes";

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_ALL_PHONES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, newValues)
        default:
            return state
    }
}