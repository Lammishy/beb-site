// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Common UI Components
import { Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/core/styles";

// Layout
import Page from "components/layout/Page/Page";

const Sleep3 = (props: any) => {
  const classes = makeStyles((theme) => ({
    center: {
      textAlign: "center",
    },
  }))();

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        <b>Imagine working from 8am</b>
        <MotionWrapper transition={{ delay: ANIMATION_DURATION * 4.5 }}>
          and finally going to bed at 3
        </MotionWrapper>
      </Typography>
    </Page>
  );
};

export default Sleep3;
