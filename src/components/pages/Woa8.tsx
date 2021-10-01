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

  const incrementDuration = ((
    timesLonger = 5,
    incrementer = 8,
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
      <Typography variant="h3" className={classes.center}>
        Those issues spill over, even to your bday celebrations.
      </Typography>

      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h3" className={classes.center}>
          But you just <b>press on</b>,{" "}
          <MotionWrapper transition={{ delay: incrementDuration() }}>
            and <b>move forward.</b>
          </MotionWrapper>
        </Typography>
      </MotionWrapper>

      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h3" className={classes.center}>
          <b>Even though</b>{" "}
          <MotionWrapper transition={{ delay: incrementDuration() }}>
            it's difficult and painful.
          </MotionWrapper>{" "}
        </Typography>
      </MotionWrapper>
    </Page>
  );
};

export default Woa8;
