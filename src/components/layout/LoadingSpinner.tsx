import Page from "./Page/Page";
import PacmanLoader from "react-spinners/PacmanLoader";
import { darkTheme } from "styles/create-theme";

/**
 * Intermediary component to show user that website is loading
 */
const LoadingSpinner = (props: any) => {
    return (
        <Page>
            <PacmanLoader color={darkTheme.analogousOne} size={40}/>
        </Page>
    );
}

export default LoadingSpinner;