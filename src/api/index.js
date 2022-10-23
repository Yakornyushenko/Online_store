import phones from './mockPhone';

export const fetchPhones = async () => {
    return new Promise((resolve) => {
        resolve(phones)
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