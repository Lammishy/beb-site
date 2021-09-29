import { Typography } from "@material-ui/core";
import Page from "components/layout/Page/Page";
import { makeStyles } from "@material-ui/styles";

const FirstPage = (props: any) => {
    const styles = makeStyles({
        center: {
            textAlign: "center"
        }
    })();
    return (
        <Page>
            <Typography variant="h2" className={styles.center}>
                Since the beginning of time...
            </Typography>

            <br/>
            <br/>

            <Typography variant="h2" className={styles.center}>
                The <b>beb</b> has always <b>complained</b> about having no WoA...
            </Typography>
        </Page>
    )
}

export default FirstPage;