/**
 * API Config
 */

// what {version} are we on?
const usersAPIVersion = '/users/2_0';

export default {
    APIs: {
        DEV:  'https://apis.dev.fathomai.com',
        TEST: 'https://apis.test.fathomai.com',
        QA:   'https://apis.qa.fathomai.com',
        PROD: 'https://apis.production.fathomai.com'
    },
    // The URL we're connecting to
    // hostname: 'https://apis.production.fathomai.com', // deployment
    // hostname: 'https://apis.qa.fathomai.com', // qa
    // hostname: 'https://apis.test.fathomai.com', // test
    hostname: 'https://apis.dev.fathomai.com', // development

    // Map shortnames to the actual endpoints, so that we can
    // use them like so: AppAPI.ENDPOINT_NAME.METHOD()
    //  NOTE: They should start with a /
    //    eg.
    //    - AppAPI.recipes.get()
    //    - AppAPI.users.post()
    //    - AppAPI.favorites.patch()
    //    - AppAPI.blog.delete()
    endpoints: new Map([
        ['create_user',     `${usersAPIVersion}/user`],
        ['forgot_password', `${usersAPIVersion}/user/forgot_password`],
        ['login',           `${usersAPIVersion}/user/login`],
        ['resend_email',    `${usersAPIVersion}/user/resend_email`],
        ['reset_password',  `${usersAPIVersion}/user/confirm_forgot_password`],
    ]),
};
