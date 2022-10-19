import * as R from 'ramda';

import {
    FETCH_ALL_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS
} from "../actions/actionsTypes";

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_ALL_PHONES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, newValues)
        case LOAD_MORE_PHONES_SUCCESS:
            const moreValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, moreValues)
        default:
            return state
    }
}