import React from "react";

// Constants
import { openDeadlineReminder } from "constants/constants";

// Components 
import Page from "components/layout/Page/Page";
import SignIn from "components/SignIn/SignIn"
import { Button } from "@material-ui/core";

/**
 * Page that serves as authentication. Only allows beb to log in
 * Components
    * Login Form, centered
* Functions:
    * Manages login/logout state
    * 
 */

const AuthPage = (props: any) => {
    const { handleLoginStatus } = props;
    return (
        <Page>
            <SignIn handleLoginStatus={handleLoginStatus}/>
            <Button onClick={openDeadlineReminder} variant="contained" color="secondary"> Deadline </Button>
        </Page>
    )
};

export default AuthPage;