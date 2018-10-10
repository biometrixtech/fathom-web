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

/**
  * Forgot Password
  */
const forgotPassword = (email) => {
    return AppAPI.forgot_password.post(false, email)
        .then(response => {
            return Promise.resolve(response);
        })
        .catch(err => Promise.reject(err));
};

/**
  * Reset Password
  */
const resetPassword = (payload) => {
    return AppAPI.reset_password.post(false, payload)
        .then(response => {
            return Promise.resolve(response);
        })
        .catch(err => Promise.reject(err));
};

export default {
    createUser,
    forgotPassword,
    loginUser,
    resetPassword,
};
