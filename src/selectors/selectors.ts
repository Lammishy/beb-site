import { RootState } from "store/store";
import { USERNAME_STATE, PASSWORD_STATE, LOGIN_STATE } from "types/types";

export const getLoginStatusSelector = (state: RootState): LOGIN_STATE => state.isLoggedIn; // return latest login state

export const getUsernameStatusSelector = (state: RootState): USERNAME_STATE => state.usernameInfo; // return latest username-related information

export const getPasswordStatusSelector = (state: RootState): PASSWORD_STATE => state.pwInfo; // return latest password-related information
