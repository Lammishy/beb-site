// Hooks 
import { useSelector } from "react-redux";

// App Navigation
import { ROUTE_NAMES } from "routes/routes";
import { useHistory } from "react-router-dom";

// Layout
import Page from "components/layout/Page/Page";

// Component UI
import { Typography } from "@material-ui/core";
import AlertButton from "components/layout/AlertButton";
import { ImageList, ImageListItem } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/styles";

// Assets
import doubleChinBeb from "assets/double-chin-beb.jpg"

// Data retrival / posting
import { getLoginStatusSelector } from "selectors/selectors";


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
    const isLoggedIn = useSelector(getLoginStatusSelector).isLoggedIn;

    const goBackToHomePageHandler = (event: any) => {
        // sends user back to login page. if already logged in, will send to home page (through redirect in router)
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

            {!isLoggedIn && <Typography variant="h6" className={h2Styles.root}>
                Do you not realize you are not logged in!!
            </Typography>}

            <AlertButton onClick={goBackToHomePageHandler}>
                Go back to whence you came, plebian!!
            </AlertButton>
        </Page>
    )
}

export default AccessDeniedPage;