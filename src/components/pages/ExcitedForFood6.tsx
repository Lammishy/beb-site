// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Common UI Components
import { Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/core/styles";

// Layout
import Page from "components/layout/Page/Page";

const ThirdPage = (props: any) => {
  const classes = makeStyles((theme) => ({
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
      [theme.breakpoints.down("xs")]: {
        fontSize: "3rem"
      }
    },
  }))();

  const createIncrementingDuration = ((num: number = 4, incrementer = 4) => {
    /**
     * Function that serves as a generator that saves and increases a number wheenver it is run again
     */
    return () => {
      const n = num; // to return the first instance of num (number 4)
      num = num + incrementer; // save new value of num, store it in function above.
      return n;
    };
  })();

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        <b>She doesn't even get fat from it.</b>
      </Typography>

      <br />
      <MotionWrapper
        transition={{
          delay: ANIMATION_DURATION * createIncrementingDuration(),
        }}
      >
        <Typography variant="h1" className={classes.center}>
          She will continue to eat
          <MotionWrapper
            transition={{
              delay: ANIMATION_DURATION * createIncrementingDuration(),
            }}
          >
            and eat.
          </MotionWrapper>
        </Typography>
      </MotionWrapper>
    </Page>
  );
};

export default ThirdPage;
