import Page from "./Page/Page";
import PacmanLoader from "react-spinners/PacmanLoader";
import theme from "styles/create-theme";

/**
 * Intermediary component to show user that website is loading
 */
const LoadingSpinner = (props: any) => {
    console.log("Xj theme: ", theme);
    return (
        <Page>
            <PacmanLoader color={theme.palette.primary.light} size={40}/>
        </Page>
    );
}

export default LoadingSpinner;