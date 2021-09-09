import { USERNAME } from "constants/constants";
import { USERNAME_STATE } from "types/types";
import { BEB_CREDENTIALS } from "constants/constants";

const intialState: USERNAME_STATE = {
    username: "",
    usernameIsValid: false,
    errorMsg: "",
    userFieldTouched: false
}

const usernameErrorReducer = (state: USERNAME_STATE = intialState, action: any) => {
    switch (action.type) {
        case USERNAME.USERNAME_VALID: 
            return {
                ...state,
                usernameIsValid: BEB_CREDENTIALS.user === state.username,
                errorMsg: ""
            }
        case USERNAME.USERNAME_INVALID:
            return {
                ...state,
                usernameIsValid: BEB_CREDENTIALS.user === state.username,
                errorMsg: action.errorMsg
            }
        case USERNAME.USER_INPUT:
            return {
                ...state,
                username: action.username
            }
        case USERNAME.USERFIELD_TOUCHED:
            return {
                ...state,
                userFieldTouched: true
            }
        default:
            return state;
    }
}

export default usernameErrorReducer;