import Page from "components/layout/Page/Page";
import { withRouter } from "react-router";

import { Typography } from "@material-ui/core";

const JourneyStartPage = (props: any) => {
    return <Page>
        <Typography variant="h1">
            Why beb should stop stealing beeb's food
        </Typography>
    </Page>
}


export default withRouter(JourneyStartPage);