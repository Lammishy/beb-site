// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Styles
import { makeStyles } from "@material-ui/core/styles";

// Component UI
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

// Assets
import TouchAppIcon from "@mui/icons-material/TouchApp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// Constants
const COLLAGE_LINK: string = `https://www.kudoboard.com/boards/bBMtmt2i#view`;

const WoaFriends = (props: any) => {
  const classes = makeStyles({
    center: {
      textAlign: "center",
    },
  })();

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
        <b>The thing is -</b>
      </Typography>

      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="h3" className={classes.center}>
          It's not just me who thinks that way.
        </Typography>
      </MotionWrapper>

      <br />
      <br />
      <br />
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ padding: "15px 30px", borderRadius: "12px" }}
        >
          <a
            href={COLLAGE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="h5">
              {/* Would be pretty cool if you gave me a... <b>"clickity click"</b> */}
              {/* wdym dude */}
              Wot ?
            </Typography>
          </a>
        </Button>
      </MotionWrapper>

      <br/>
      <MotionWrapper transition={{ delay: incrementDuration() }}>
        <Typography variant="subtitle2">
          Give me a lil... "clickity click"
        </Typography>
      </MotionWrapper>
      {/* 
      <Typography variant="h1" className={classes.center}>
        INCLUDE COLLAGE CARD HERE: https://www.kudoboard.com/boards/bBMtmt2i
      </Typography> */}
    </Page>
  );
};

export default WoaFriends;
