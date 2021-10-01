// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Styles
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const Woa6 = (props: any) => {
  const classes = makeStyles((theme) => ({
    center: {
      textAlign: "center",
      marginBottom: "20px",
    },
  }))();

  const incrementDuration = ((
    timesLonger = 5,
    incrementer = 7,
    baseDuration = ANIMATION_DURATION
  ) => {
    return () => {
      const duration = baseDuration * timesLonger;
      timesLonger = timesLonger + incrementer;
      return duration;
    };
  })();

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        <b>7</b> You're passionate about dance.
      </Typography>

      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h3" className={classes.center}>
          And lmao, don't let anyone make you stop.
        </Typography>
      </MotionWrapper>

      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h3" className={classes.center}>
          Fok the haters!!!
        </Typography>
      </MotionWrapper>
    </Page>
  );
};

export default Woa6;
