import { Typography } from "@material-ui/core";
import Page from "components/layout/Page/Page";
import { makeStyles } from "@material-ui/core/styles";

const SecondPage = (props: any) => {
    const hugeFont = makeStyles((theme) => ({
        xl: {
            fontSize: "14rem",
            [theme.breakpoints.down("xs")]: {
                fontSize: "7rem"
            }
        }
    }))();
    return (
        <Page>
            <Typography variant="h1" className={hugeFont.xl}>
                <b>NOW</b>
            </Typography>
        </Page>
    )
}

export default SecondPage;