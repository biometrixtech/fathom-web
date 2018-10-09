/**
 * User Actions
 */

import { AppAPI, } from '../global/utils';

/**
  * Get My User Data
  */
const loginUser = (email, password) => {
    return AppAPI('/users/2_0/user/login', 'POST', { personal_data: { email }, password })
        .then(response => {
            return Promise.resolve(response);
        })
        .catch(err => Promise.reject(err));
};

/**
  * Create User
  */
const createUser = (payload) => {
    return AppAPI('/user', 'POST', payload)
        .then(response => {
            return Promise.resolve(response);
        })
        .catch(err => Promise.reject(err));
};

export default {
    createUser,
    loginUser,
};
