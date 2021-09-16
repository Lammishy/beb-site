import Button from "@material-ui/core/Button";
import { alertButtonTheme } from "styles/create-theme";
import { ThemeProvider } from "@material-ui/styles";

const AlertButton = (props: any) => {
    const {onClick, children, ...rest} = props;

    return (
        <ThemeProvider theme={alertButtonTheme}>
            <Button variant="contained" onClick={onClick} color="primary" {...rest} >
                {children}
            </Button>
        </ThemeProvider>
    );
};

export default AlertButton;
