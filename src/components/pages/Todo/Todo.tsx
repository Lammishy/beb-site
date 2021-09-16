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
            task: `Yesterday was working on the number throttle button. Working with devops to resolve some issues regarding deployment. 
            So this task will take abit longer than expected. Once devops has confirmed on their end then will continue to work on this task.`,
        },
        {
            key: "2",
            task: "So today I will be focusing on completing AQA",
        },
        {
            key: "3",
            task: "Continue with working on migrating a test case from old webfront to new webfront",
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
