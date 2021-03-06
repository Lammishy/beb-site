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
      [theme.breakpoints.down("lg")]: {
        fontSize: "2.4rem"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem"
      }
    },
  }))();

  const imgStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("lg")]: {
        maxHeight: 480
      },
      [theme.breakpoints.down("xs")]: {
        maxHeight: 380
      }
    }
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
      <Typography variant="h2" className={classes.center}>
        She goes ahead and does what{" "}
        <b>
          <i>you</i>
        </b>{" "}
        should've been doing for the past 2 hours.
      </Typography>
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <CardMedia image={bebAsleep} component="img" className={imgStyles.root}/>
      </MotionWrapper>
    </Page>
  );
};

export default Sleep7;
