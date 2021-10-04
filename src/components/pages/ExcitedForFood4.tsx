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
import momentsBeforeDisaster from "assets/img-before-disaster.jpg";

const ThirdPage = (props: any) => {
  const classes = makeStyles((theme) => ({
    center: {
      textAlign: "center",
      marginBottom: "10px",
      [theme.breakpoints.down("lg")]: {
        fontSize: "2rem"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.3rem"
      }
    },
    root: {
      marginBottom: "10px",
      [theme.breakpoints.down("lg")]: {
        maxHeight: 600
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: "auto",
        maxHeight: 550
      },
    },
  }))();

  const incrementDuration = ((num: number = 4) => {
    return () => {
      const n = num;
      num = num + num;
      return n;
    };
  })();

  return (
    <Page>
      <Typography variant="h2" className={classes.center}>
        <b>This.</b>
      </Typography>

      <MotionWrapper
        transition={{ delay: ANIMATION_DURATION * incrementDuration() }}
      >
        <CardMedia
          image={momentsBeforeDisaster}
          component="img"
          className={classes.root}
        />
      </MotionWrapper>

      <MotionWrapper
        transition={{ delay: ANIMATION_DURATION * incrementDuration() }}
      >
        <Typography variant="h2" className={classes.center}>
          <b>This is true terror.</b>
        </Typography>
      </MotionWrapper>
    </Page>
  );
};

export default ThirdPage;
