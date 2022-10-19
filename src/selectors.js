import * as R from "ramda";

export const getPhoneById = (state, id) => state.phones[id]

export const getPhones = state => {
    return R.map(id => getPhoneById(state, id), state.phonesPage.ids)
}