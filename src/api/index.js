import phones from './mockPhone';

export const fetchPhones = async () => {
    return new Promise((resolve) => {
        resolve(phones)
    })
};