import dance10Fps from "assets/edna-dance-10fps.gif";
import CardMedia from "@material-ui/core/CardMedia";


const EdnaDance10FPSGIF = (props: any) => {
    return (
        <CardMedia image={dance10Fps} component="img" {...props} />
    )
};

export default EdnaDance10FPSGIF;