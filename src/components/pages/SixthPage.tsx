// Styles
import { makeStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const SixthPage = (props: any) => {
    const classes = makeStyles({
        center: {
            textAlign: "center"
        }
    })();

    return (
        <Page>
            <Typography variant="h2" className={classes.center}>
                <b>O wait, hang on a sec.</b>
            </Typography>
        </Page>
    )
}

export default SixthPage;