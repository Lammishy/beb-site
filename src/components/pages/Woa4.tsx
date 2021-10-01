// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Styles
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const Woa4 = (props: any) => {
  const classes = makeStyles({
    center: {
      textAlign: "center",
    },
  })();

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
        <b>3</b> She's <b>resourceful</b> 

        <br/> 
        and 
        <br/>
        <b>perseverant</b>

        <br />
        <br />
        <MotionWrapper transition={{ delay: incrementDuration() }}>
          <Typography variant="h4" className={classes.center}>
            She's great at figuring things out on her own.
          </Typography>
        </MotionWrapper>
      </Typography>
    </Page>
  );
};

export default Woa4;
