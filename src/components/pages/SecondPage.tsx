import { Typography } from "@material-ui/core";
import Page from "components/layout/Page/Page";
import { makeStyles } from "@material-ui/styles";

const SecondPage = (props: any) => {
    const hugeFont = makeStyles({
        xl: {
            fontSize: "7rem"
        }
    })();
    return (
        <Page>
            <Typography variant="h1" className={hugeFont.xl}>
                <b>NOW</b>
            </Typography>
        </Page>
    )
}

export default SecondPage;