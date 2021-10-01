// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Styles
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const WoaStart = (props: any) => {
  const classes = makeStyles({
    center: {
      textAlign: "center",
    },
  })();

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        <b>But the thing is</b>
        <br/>
        <MotionWrapper transition={{ delay: ANIMATION_DURATION * 5 }}>
          In spite of all of that
        </MotionWrapper>
      </Typography>
    </Page>
  );
};

export default WoaStart;
