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
      [theme.breakpoints.down("xs")]: {
        marginBottom: 0
      }
    },
  }))();

  const h1Styles = makeStyles(theme => ({
    root: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "3rem"
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
        <b>It's even online for the whole world to see.</b>
      </Typography>

      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h3" className={classes.center}>
          Also accessible <b>anytime,</b>{" "}
          <MotionWrapper transition={{ delay: incrementDuration() }}>
            <b>anywhere.</b>
          </MotionWrapper>
        </Typography>
      </MotionWrapper>

      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="subtitle1" className={classes.center}>
          Okthisisgettingtoolongandcringesobye
        </Typography>
      </MotionWrapper>
    </Page>
  );
};

export default Woa6;
