import { LOGIN } from "constants/constants";
import { USERNAME } from "constants/constants";
import { PASSWORD } from "constants/constants";

// Login-related
export const loginSuccess = () => ({
    type: LOGIN.LOGIN_SUCCESS,
});

export const loginFail = () => ({
    type: LOGIN.LOGIN_FAIL
});


// Username-related
export const setUsernameSuccess = () => ({
    type: USERNAME.USERNAME_VALID
})

export const setUsernameFail = (errorMsg: string) => ({
    type: USERNAME.USERNAME_INVALID,
    errorMsg
})

export const setUsername = (username: string) => ({
    type: USERNAME.USER_INPUT,
    username
})

export const setUserFieldTouched = () => ({
    type: USERNAME.USERFIELD_TOUCHED
})

// Password-related
export const setPassword = (password: string) => ({
    type: PASSWORD.PW_INPUT,
    password
})

export const setPasswordSuccess = () => ({
    type: PASSWORD.PASSWORD_VALID
})

export const setPasswordFail = (errorMsg: string) => ({
    type: PASSWORD.PASSWORD_INVALID,
    errorMsg
})

export const setPasswordFieldTouched = () => ({
    type: PASSWORD.PASSWORDFIELD_TOUCHED
})