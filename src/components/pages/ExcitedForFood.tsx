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
import bebBeforeFood from "assets/beb-before-food.jpg";

const ThirdPage = (props: any) => {
  const classes = makeStyles((theme) => ({
    center: {
      textAlign: "center",
    },
  }))();

  return (
    <Page>
      <MotionWrapper>
        <CardMedia image={bebBeforeFood} component="img" />
      </MotionWrapper>

      <MotionWrapper transition={{ delay: ANIMATION_DURATION * 3 }}>
        <Typography variant="h3" className={classes.center}>
          Look at this face. Pleasant, isn't it? Happy and all.
        </Typography>
      </MotionWrapper>
    </Page>
  );
};

export default ThirdPage;
