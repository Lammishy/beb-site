import React from "react";



// Components 
import Page from "components/layout/Page/Page";
import SignIn from "components/SignIn/SignIn"
import makeShakeValidationErrorAnimation from "animations/shake-animation";

// Constants
// import { openDeadlineReminder } from "constants/constants";
// import { Button } from "@material-ui/core";

/**
 * Page that serves as authentication. Only allows beb to log in
 * Components
    * Login Form, centered
* Functions:
    * Manages login/logout state
    * 
 */

const ShakeAnimationSignIn = makeShakeValidationErrorAnimation(SignIn);

const AuthPage = (props: any) => {
    return (
        <Page>
            <ShakeAnimationSignIn />
            {/* <Button onClick={openDeadlineReminder} variant="contained" color="secondary"> Deadline </Button> */}
        </Page>
    )
};

export default AuthPage;