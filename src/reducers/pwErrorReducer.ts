import { PASSWORD } from "constants/constants";
import { PASSWORD_STATE } from "types/types";

import { BEB_CREDENTIALS } from "constants/constants";

const intialState: PASSWORD_STATE = {
    pw: "",
    pwIsValid: false,
    errorMsg: "",
    pwFieldTouched: false
}

const pwErrorReducer = (state: PASSWORD_STATE = intialState, action: any) => {
    switch (action.type) {
        case PASSWORD.PASSWORD_VALID:
            return {
                ...state,
                pwIsValid: BEB_CREDENTIALS.pw === state.pw,
                errorMsg: ""
            }
        case PASSWORD.PASSWORD_INVALID:
            return {
                ...state,
                pwIsValid: BEB_CREDENTIALS.pw === state.pw,
                errorMsg: action.errorMsg
            }
        case PASSWORD.PW_INPUT:
            return {
                ...state,
                pw: action.password
            }
        case PASSWORD.PASSWORDFIELD_TOUCHED:
            return {
                ...state,
                pwFieldTouched: true
            }
        default:
            return state;
    }
}

export default pwErrorReducer;