import { LOGIN } from "constants/constants";
import { LOGIN_STATE } from "types/types";

const loginReducer = (
  state: LOGIN_STATE = { isLoggedIn: false },
  action: any
) => {
  switch (action.type) {
    case LOGIN.LOGIN_SUCCESS:
      sessionStorage.setItem("loginStatus", "true");
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGIN.LOGIN_FAIL:
      sessionStorage.setItem("loginStatus", "false");
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;