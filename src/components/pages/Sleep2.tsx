// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Common UI Components
import { Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/core/styles";

// Layout
import Page from "components/layout/Page/Page";

const Sleep2 = (props: any) => {
  const classes = makeStyles((theme) => ({
    center: {
      textAlign: "center",
    },
  }))();

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        <b>This girl</b>
        <MotionWrapper transition={{ delay: ANIMATION_DURATION * 4.5 }}>
          also gets way too excited <b><i>every</i></b> morning.
        </MotionWrapper>
      </Typography>
    </Page>
  );
};

export default Sleep2;
