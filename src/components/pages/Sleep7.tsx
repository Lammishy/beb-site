// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Common UI Components
import { Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

// Styles
import { makeStyles } from "@material-ui/core/styles";

// Layout
import Page from "components/layout/Page/Page";

// Assets
import bebAsleep from "assets/beb-asleep-2.jpg";

const Sleep7 = (props: any) => {
  const classes = makeStyles((theme) => ({
    center: {
      textAlign: "center",
      marginBottom: "30px",
    },
  }))();

  const incrementDuration = ((
    num: number = 5,
    increment: number = 2,
    baseDuration: number = ANIMATION_DURATION
  ) => {
    return () => {
      const n = baseDuration * num;
      num = num + increment;
      return n;
    };
  })();

  return (
    <Page>
      <Typography variant="h3" className={classes.center}>
        She goes ahead and does what{" "}
        <b>
          <i>you</i>
        </b>{" "}
        should've been doing for the past 2 hours.
      </Typography>
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <CardMedia image={bebAsleep} component="img" />
      </MotionWrapper>
    </Page>
  );
};

export default Sleep7;
