import dance25Fps from "assets/edna-dance-25fps.gif";
import CardMedia from "@material-ui/core/CardMedia";


const EdnaDance25FPSGIF = (props: any) => {
    return (
        <CardMedia image={dance25Fps} component="img" {...props} />
    )
};

export default EdnaDance25FPSGIF;