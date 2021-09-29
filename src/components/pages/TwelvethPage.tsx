// Styles
import { makeStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const TwelvethPage = (props: any) => {
    const classes = makeStyles({
        center: {
            textAlign: "center"
        }
    })();

    return (
        <Page>
            <Typography variant="h1" className={classes.center}>
                <b>Found it.</b>
            </Typography>
        </Page>
    )
}

export default TwelvethPage;