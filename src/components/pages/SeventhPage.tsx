// Styles
import { makeStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const SeventhPage = (props: any) => {
    const classes = makeStyles({
        center: {
            textAlign: "center"
        }
    })();

    return (
        <Page>
            <Typography variant="h2" className={classes.center}>
                <b>There's something really important we gotta run over first.</b>
            </Typography>
        </Page>
    )
}

export default SeventhPage;