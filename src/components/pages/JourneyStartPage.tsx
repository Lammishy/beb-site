import Page from "components/layout/Page/Page";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

const JourneyStartPage = (props: any) => {
    const classes = makeStyles({
        center: {
            textAlign: "center"
        }
    })();

    return <Page>
        <Typography variant="h1" className={classes.center}>
            <b>Top reasons</b> 
            <MotionWrapper transition={{delay: ANIMATION_DURATION * 7}}>
                for why the beb should stop stealing the beeb's food
            </MotionWrapper>
        </Typography>
    </Page>
}


export default JourneyStartPage;