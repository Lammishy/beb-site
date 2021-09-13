import AuthPage from "components/pages/AuthPage";
import TodoPage from "components/pages/Todo/Todo";

const ROUTE_NAMES = {
    login: "/login",
    todo: "/todo"
}

export const routes = [
    {
        path: ROUTE_NAMES.login,
        Component: AuthPage
    },
    {
        path: "todo",
        Component: TodoPage
    }
]