import { ROUTE_NAMES } from "routes/routes";
import { useHistory } from "react-router-dom";

import Page from "components/layout/Page/Page";
import { Typography } from "@material-ui/core";
import AlertButton from "components/layout/AlertButton";
import { ImageList, ImageListItem } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

// Assets
import doubleChinBeb from "assets/double-chin-beb.jpg"


const AccessDeniedPage = (props: any) => {
    // Styles 
    const h2Styles = makeStyles(_ => ({
        root: {
            textAlign: "center",
            marginBottom: "50px",
            fontWeight: 700
        }
    }))();
    
    const classes = makeStyles(_ => ({
        root: {
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "40px",
            overflow: "hidden"
        },
        imageList: {
            width: 500,
            height: 450
        },
    }))();

    let history = useHistory();

    const goBackToHomePageHandler = (event: any) => {
        // sends user back to login page. if already logged in, will send to home page (through redirect in router)
        console.log("XJ goback is run");
        // console.log("XJ history: ", history);
        history.push(ROUTE_NAMES.login);
    };

    

    return (
        <Page>
            <Typography variant="h2" className={h2Styles.root}>
                You are NOT allowed to view this page!!
                <br />
                <br />
                LEAVE AT ONCE!!
            </Typography>

            <div className={classes.root}>
                <ImageList rowHeight={200} gap={1} className={classes.imageList}>
                    <ImageListItem key={69} cols={2} rows={2}>
                        <img src={doubleChinBeb} alt="double-chin" />
                    </ImageListItem>
                </ImageList>
            </div>

            <AlertButton onClick={goBackToHomePageHandler}>
                Go back to whence you came, plebian!!
            </AlertButton>
        </Page>
    )
}

export default AccessDeniedPage;