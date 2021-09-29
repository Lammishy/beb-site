// Styles
import { makeStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const TenthPage = (props: any) => {
    const classes = makeStyles({
        center: {
            textAlign: "center"
        }
    })();

    return (
        <Page>
            <Typography variant="h2" className={classes.center}>
                Pretty sure I had it somewhere
            </Typography>
        </Page>
    )
}

export default TenthPage;