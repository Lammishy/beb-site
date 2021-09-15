import Button from "@material-ui/core/Button";
import { alertButtonTheme } from "styles/create-theme";
import { ThemeProvider } from "@material-ui/styles";

const AlertButton = ({ onClick, children }: {onClick: any, children: any}) => {
    return (
        <ThemeProvider theme={alertButtonTheme}>
            <Button variant="contained" onClick={onClick}>
                {children}
            </Button>
        </ThemeProvider>
    );
};

export default AlertButton;
