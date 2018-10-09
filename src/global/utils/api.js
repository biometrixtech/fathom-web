/**
 * This is a utility to handle default API requests with the Yote server
 */

import fetch from 'isomorphic-fetch';

const baseUrl = 'https://apis.test.fathomai.com';
let baseHeaders = { 'Content-Type': 'application/json' };

export default function callAPI(route, method = 'GET', body, headers = {}) {
    let newHeaders = { ...baseHeaders, ...headers };
    return new Promise(async (resolve, reject) => {
        return fetch(baseUrl + route, {
            headers: newHeaders,
            method,
            credentials: 'same-origin',
            body: JSON.stringify(body)
        })
        .then(response => {
            if(response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                let error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
}
