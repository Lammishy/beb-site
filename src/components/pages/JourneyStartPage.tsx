import Page from "components/layout/Page/Page";
import { withRouter } from "react-router";

import { Typography } from "@material-ui/core";

const JourneyStartPage = (props: any) => {
    console.log("XJ Homepage rendered");
    return <Page>
        <Typography variant="h1">
            Home Page
        </Typography>
    </Page>
}


export default withRouter(JourneyStartPage);