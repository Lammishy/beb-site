import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Components
import Page from "components/layout/Page/Page";
import SignIn from "components/SignIn/SignIn";
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
  const subtitleStyles = makeStyles({
    root: {
      position: "fixed",
      padding: "0 20px",
      bottom: "20px",
      left: 0,
      textAlign: "center",
      width: "100%"
    },
  })();
  return (
    <Page>
      <ShakeAnimationSignIn />
      {/* <Button onClick={openDeadlineReminder} variant="contained" color="secondary"> Deadline </Button> */}
      <div className={subtitleStyles.root}>
        <Typography variant="subtitle1">
          Site has also been optimized for viewing on mobile (well, kinda). 
        </Typography>
      </div>
    </Page>
  );
};

export default AuthPage;
