/**
 * User Actions
 */

import { AppAPI, } from '../global/utils';

/**
  * Get My User Data
  */
const loginUser = (email, password) => {
    return AppAPI.login.post(false, { personal_data: { email }, password })
        .then(response => {
            return Promise.resolve(response);
        })
        .catch(err => Promise.reject(err));
};

/**
  * Create User
  */
const createUser = (payload) => {
    return AppAPI.create_user.post(false, payload)
        .then(response => {
            return Promise.resolve(response);
        })
        .catch(err => Promise.reject(err));
};

export default {
    createUser,
    loginUser,
};
