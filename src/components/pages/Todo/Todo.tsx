import map from "lodash/map";
// Layout
import Page from "components/layout/Page/Page";

// Material UI Components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const generateListItem = (item: taskItem) => {
    return (
        <ListItem key={item.key} divider>
            <ListItemText
                primary={`Task ${item.key}`}
                secondary={item.task}
            />
        </ListItem>
    );
};

interface taskItem {
    key: string;
    task: string;
}

const TodoPage = (props: any) => {
    const allItems: taskItem[] = [
        {
            key: "1",
            task: `Finish up beb slides today`,
        },
        {
            key: "2",
            task: "Call up car rental companies"
        }
    ];

    return (
        <Page>
            <List>
                {map(allItems, generateListItem)}
            </List>
        </Page>
    );
};

export default TodoPage;
