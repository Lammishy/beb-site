// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Styles
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const Woa3 = (props: any) => {
  const classes = makeStyles((theme) => ({
    center: {
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem"
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
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h2" className={classes.center}>
          <b>
            I don't know in <i>what universe</i> would that wouldn't be
            considered amazing.
          </b>
        </Typography>
      </MotionWrapper>

      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h3" className={classes.center}>
          And even more so, <b>especially</b> in Singapore's / Asian context.
        </Typography>
      </MotionWrapper>

      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h3" className={classes.center}>
          <b>And look at where she is now.</b>
          <br />
          <MotionWrapper transition={{ delay: incrementDuration() }}>
            <b>Independent, and with a place of her own.</b>
          </MotionWrapper>
        </Typography>
      </MotionWrapper>
    </Page>
  );
};

export default Woa3;
