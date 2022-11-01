import phones from './mockPhone';
import categories from './mockCategories';

export const fetchPhones = async () => {
    return new Promise((resolve) => {
        resolve(phones)
    })
};

export const fetchCategoriesApi = async () => {
    return new Promise((resolve) => {
        resolve(categories)
    })
};

export const loadMorePhones = async () => {
    return new Promise((resolve) => {
        resolve(phones)
    })
};

export const fetchPhoneById = async (id) => {
    return new Promise((resolve) => {
        const phone = phones.find(el => el.id === id)
        resolve(phone)
    })
};