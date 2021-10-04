import { useEffect, useState } from "react";

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
  const subtitleStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      bottom: 0,
      left: 0,
      padding: "0 20px 20px",
      textAlign: "center",
      width: "100%",
    },
  }))();

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const onResize = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);

  return (
    <Page>
      <ShakeAnimationSignIn />
      {/* <Button onClick={openDeadlineReminder} variant="contained" color="secondary"> Deadline </Button> */}
      <div className={subtitleStyles.root}>
        {height >= 590 && (
          <Typography variant="subtitle1">
            Site has also been optimized for viewing on mobile (well, kinda)
          </Typography>
        )}
      </div>
    </Page>
  );
};

export default AuthPage;
