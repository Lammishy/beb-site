// Styles
import { makeStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const EighthPage = (props: any) => {
    const classes = makeStyles({
        center: {
            textAlign: "center"
        }
    })();

    return (
        <Page>
            <Typography variant="h2" className={classes.center}>
                <b>We will be right back after this short, interjectory message.</b>
            </Typography>
        </Page>
    )
}

export default EighthPage;