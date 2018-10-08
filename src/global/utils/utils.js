const utils = {

    androidStoreUrl() {
        return 'https://play.google.com/store/apps/details?id=com.fathom.fathomai';
    },

    iosStoreUrl() {
        return 'https://itunes.apple.com/us/app/fathom-ai/id1281800840?ls=1&mt=8';
    },

    isEmailValid(email) {
        /*eslint no-useless-escape: 0*/
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    },

    isPasswordValid(password) {
        // Password Validation
        // - 8-16 characters
        // - Must include uppercase letter, lowercase letter, and a number
        const numbersRegex = /[0-9]/g;
        const upperCaseLettersRegex = /[A-Z]/g;
        const lowerCaseLettersRegex = /[a-z]/g;
        if (!password || password.length < 8
            || password.length > 16
            || !numbersRegex.test(password)
            || !upperCaseLettersRegex.test(password)
            || !lowerCaseLettersRegex.test(password))
        {
            return false;
        }
        return true;
    },

    isPinValid(pin) {
        return pin.length > 0;
    },

    isLoginJoinFormValid(email, password, pin) {
        let isValid = true;
        let errorMsg = false;
        if(!utils.isEmailValid(email)) {
            isValid = false;
            errorMsg = 'PLEASE ENTER A VALID EMAIL ADDRESS';
        }
        if(!utils.isPasswordValid(password)) {
            isValid = false;
            errorMsg = 'PLEASE ENTER A VALID PASSWORD';
        }
        if(!utils.isPinValid(pin)) {
            isValid = false;
            errorMsg = 'PLEASE ENTER A VALID PINs';
        }
        return {
            errorMsg,
            isValid,
        };
    },

    tmpLoginFunction(email) {
        let errorMsg = '';
        let nextPage = false;
        let success = false;
        if(email === 'test1@fathomai.com') {
            success = true;
            nextPage = '/success_login';
        } else if(email === 'test2@fathomai.com') {
            errorMsg = 'INVALID PIN';
        } else if(email === 'test3@fathomai.com') {
            success = true;
            nextPage = '/no_seats';
        } else {
            errorMsg = 'EMAIL NOT VALID';
        }
        return {
            errorMsg,
            nextPage,
            success,
        };
    },

    tmpJoinFunction(email) {
        let errorMsg = '';
        let success = false;
        if(email === 'test4@fathomai.com') {
            success = true;
        } else {
            errorMsg = 'EMAIL NOT VALID';
        }
        return {
            errorMsg,
            success,
        };
    },

}

export default utils;
