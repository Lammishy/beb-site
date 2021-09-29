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

  const incrementDuration = ((num: number = 4) => {
    return () => {
      const n = num;
      num = num + num;
      return n;
    };
  })();

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        <b>
          Hide your food,
          <MotionWrapper
            transition={{ delay: ANIMATION_DURATION * incrementDuration() }}
          >
            hide your seabasses.
          </MotionWrapper>
        </b>
      </Typography>

      <br />
      <br />
      <br />

      <MotionWrapper
        transition={{ delay: ANIMATION_DURATION * incrementDuration() }}
      >
        <Typography variant="h1" className={classes.center}>
          Because this girl ain't stopping for nobody.
        </Typography>
      </MotionWrapper>
    </Page>
  );
};

export default ThirdPage;
