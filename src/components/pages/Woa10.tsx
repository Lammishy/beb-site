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

  const h1Styles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.8rem"
      }
    }
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
      <Typography variant="h1" className={`${classes.center} + ${h1Styles.root}`}>
        <b>8</b> You're also the <b>most invigorating</b> ball of energy.
      </Typography>

      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h3" className={classes.center}>
          And cooking always becomes 69x more fun with you.
        </Typography>
      </MotionWrapper>

      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="subtitle1" className={classes.center}>
          And also takes 69x longer.
        </Typography>
      </MotionWrapper>
    </Page>
  );
};

export default Woa6;
