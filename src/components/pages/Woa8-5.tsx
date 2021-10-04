// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Styles
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const Woa8 = (props: any) => {
  const classes = makeStyles({
    center: {
      textAlign: "center",
    },
  })();

  const h2Styles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem"
      }
    }
  }))();

  const h3Styles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem"
      }
    }
  }))();

  const h1Styles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "3rem"
      }
    }
  }))();

  const incrementDuration = ((
    timesLonger = 5,
    incrementer = 10,
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
      <Typography variant="h2" className={`${classes.center} + ${h2Styles.root}`}>
        <b>If you haven't already noticed</b>
      </Typography>

      <br />
      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h3" className={`${classes.center} + ${h3Styles.root}`}>
          It's a recurring trait <b>you possess</b> that you{" "}
          <b>apply to all aspects of your life.</b>
        </Typography>
      </MotionWrapper>

      <br />
      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h1" className={`${classes.center} + ${h1Styles.root}`}>
          <b>You're doing great.</b>
        </Typography>
      </MotionWrapper>
    </Page>
  );
};

export default Woa8;
