// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Styles
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const Woa5 = (props: any) => {
  const classes = makeStyles((theme) => ({
    center: {
      textAlign: "center",
      marginBottom: "60px",
      [theme.breakpoints.down("xs")]: {
        marginBottom: "25px"
      }
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
        <b>4</b> She's <b>a great friend</b>
        <Typography variant="body1" className={classes.center}>
          Ties in with sensitivity and extra-feeling!
        </Typography>

        <MotionWrapper transition={{ delay: incrementDuration() }}>
          <Typography variant="h4" className={classes.center}>
            Remember that time when you took a call at my place to check in on
            Felicia?
          </Typography>
        </MotionWrapper>

        <MotionWrapper transition={{ delay: incrementDuration() }}>
          <Typography variant="h4" className={classes.center}>
            I really respect and like that about you.
          </Typography>
        </MotionWrapper>
      </Typography>
    </Page>
  );
};

export default Woa5;
