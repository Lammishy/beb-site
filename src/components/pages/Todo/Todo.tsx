import React, { ReactElement } from "react";
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
            task: "Yesterday was working on AQA and number throttle button",
        },
        {
            key: "2",
            task: "Number Button throttle task has been approved, will merge to staging, do the necessary tests on all the affected flows and then create a PR to develop",
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
