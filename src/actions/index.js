import {
    FETCH_ALL_PHONES_START,
    FETCH_ALL_PHONES_SUCCESS,
    FETCH_ALL_PHONES_FAILURE,

    LOAD_MORE_PHONES_START,
    LOAD_MORE_PHONES_FAILURE,
    LOAD_MORE_PHONES_SUCCESS
} from './actionsTypes';
import {fetchPhones, loadMorePhones} from '../api/index';
import {getRenderPhonesLength} from "../selectors";

export const fetchAllPhones = () => async dispatch => {
    dispatch({
        type: FETCH_ALL_PHONES_START
    })
    try {
        const allPhones = await fetchPhones()
        dispatch({
            type: FETCH_ALL_PHONES_SUCCESS,
            payload: allPhones
        })
    } catch (err) {
        dispatch({
            type: FETCH_ALL_PHONES_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const loadAllPhones = () => async (dispatch, getState) => {
    const offset = getRenderPhonesLength(getState());
    dispatch({
        type: LOAD_MORE_PHONES_START
    })
    try {
        const allPhones = await loadMorePhones({offset})
        dispatch({
            type: LOAD_MORE_PHONES_SUCCESS,
            payload: allPhones
        })
    } catch (err) {
        dispatch({
            type: LOAD_MORE_PHONES_FAILURE,
            payload: err,
            error: true
        })
    }
}