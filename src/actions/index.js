import {
    FETCH_ALL_PHONES_START,
    FETCH_ALL_PHONES_SUCCESS,
    FETCH_ALL_PHONES_FAILURE,
} from './actionsTypes';
import {fetchPhones} from '../api/index';

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