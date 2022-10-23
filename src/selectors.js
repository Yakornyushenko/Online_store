import * as R from "ramda";

export const getPhoneById = (state, id) => state.phones[id]

export const getPhones = state => {
    return R.map(id => getPhoneById(state, id), state.phonesPage.ids)
}

export const getRenderPhonesLength = state => state.phonesPage.ids.length

export const getTotalBasketCount = state => state.basket.length

export const getTotalPrice = state => {
    return R.compose(
        R.sum,
        R.pluck('price'),
        R.map(id => getPhoneById(state, id))
    )(state.basket)
}