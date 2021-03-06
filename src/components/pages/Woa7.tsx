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
        marginBottom: 0,
        fontSize: "2.7rem"
      }
    },
  }))();

  const h4Styles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem"
      }
    }
  }))();

  const incrementDuration = ((
    timesLonger = 8,
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
        <b>6</b> Thinks she isn't but is <b>actually really strong.</b>
      </Typography>

      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h4" className={`${classes.center} + ${h4Styles.root}`}>
          I understand that you have difficulties with your family.
        </Typography>
      </MotionWrapper>

      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h4" className={`${classes.center} + ${h4Styles.root}`}>
          Actually, no. I'd never be able to fully understand.
        </Typography>
      </MotionWrapper>      
    </Page>
  );
};

export default Woa6;
