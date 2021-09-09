import { combineReducers } from "@reduxjs/toolkit";

import loginReducer from "./loginReducer";
import usernameErrorReducer from "./usernameErrorReducer";
import pwErrorReducer from "./pwErrorReducer";

const rootReducer = combineReducers({
    isLoggedIn: loginReducer,
    usernameInfo: usernameErrorReducer,
    pwInfo: pwErrorReducer
});


export default rootReducer;