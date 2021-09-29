// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Common UI Components
import { Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/styles";

// Layout
import Page from "components/layout/Page/Page";

const ThirdPage = (props: any) => {
  const classes = makeStyles((_) => ({
    root: {
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "40px",
      overflow: "hidden",
    },
    imageList: {
      width: 500,
      height: 450,
    },
    center: {
      textAlign: "center",
    },
  }))();

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        Don't be fooled.
      </Typography>
      <br/>
      <MotionWrapper transition={{delay: ANIMATION_DURATION * 4}}>
        <Typography variant="h1" className={classes.center}>
          It is a face of <b>PURE EVIL.</b>
        </Typography>
      </MotionWrapper>
    </Page>
  );
};

export default ThirdPage;
