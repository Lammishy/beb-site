export interface USERNAME_STATE {
    username: string,
    usernameIsValid: boolean,
    errorMsg: string,
    userFieldTouched: boolean
}

export interface PASSWORD_STATE {
    pw: string,
    pwIsValid: boolean,
    errorMsg: string,
    pwFieldTouched: boolean
}

export interface LOGIN_STATE {
    isLoggedIn: boolean
}

