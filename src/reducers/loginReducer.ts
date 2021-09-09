import { LOGIN } from "constants/constants";
import { LOGIN_STATE } from "types/types";

const loginReducer = (
  state: LOGIN_STATE = { isLoggedIn: false },
  action: any
) => {
  switch (action.type) {
    case LOGIN.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGIN.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;