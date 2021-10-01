// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Styles
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";
import { CardMedia } from "@material-ui/core";

// Assets
import goddamnSmile from "assets/goddam-smile-2.jpg";

const Woa6 = (props: any) => {
  const classes = makeStyles((theme) => ({
    center: {
      textAlign: "center",
      marginBottom: "20px",
    },
  }))();

  const imgStyle = makeStyles((theme) => ({
    root: {
      width: "100%",
      height: "auto",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: 400
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
      <Typography variant="h1" className={classes.center}>
        <b>5</b> Also, that smile.

        <MotionWrapper transition={{ delay: incrementDuration() }}>
            <CardMedia
              image={goddamnSmile}
              component="img"
              className={imgStyle.root}
            />
        </MotionWrapper>

        <MotionWrapper transition={{ delay: incrementDuration() }}>
          <Typography variant="h4" className={classes.center}>
            K la k la quite cute. Me likey.
          </Typography>
        </MotionWrapper>
      </Typography>
    </Page>
  );
};

export default Woa6;
