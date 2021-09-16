import AuthPage from "components/pages/AuthPage";
import TodoPage from "components/pages/Todo/Todo";
import Intro from "components/pages/Intro";
import AccessDeniedPage from "components/pages/AccessDeniedPage";
import JourneyStartPage from "components/pages/JourneyStartPage";
import NotFoundPage from "components/pages/NotFoundPage";
import React from "react";

export const ROUTE_NAMES = {
  login: "/login",
  journeyStart: "/journey-start",
  todo: "/todo",
  intro: "/intro",
  accessDenied: "/access-denied",
  notFound: "/not-found",
};

const routes: ComponentRoute[] = [
  {
    path: ROUTE_NAMES.login,
    Component: AuthPage,
  },
  {
    path: ROUTE_NAMES.journeyStart,
    Component: JourneyStartPage,
  },
  {
    path: ROUTE_NAMES.todo,
    Component: TodoPage,
  },
  {
    path: ROUTE_NAMES.intro,
    Component: Intro,
  },
  {
    path: ROUTE_NAMES.accessDenied,
    Component: AccessDeniedPage,
  },
  {
    path: ROUTE_NAMES.notFound,
    Component: NotFoundPage,
  },
];

export default routes;

/**
 * 
 * Helpers
 */
export const getMainContentRoutes = () => {
  /**
   * Retrieves Pages that are the main content of the site
   */
  const pageException = ROUTE_NAMES.login;
  const pageException2 = ROUTE_NAMES.notFound;
  const pageException3 = ROUTE_NAMES.accessDenied;

  return routes.filter((route: ComponentRoute) => {
    return (
      route.path !== pageException &&
      route.path !== pageException2 &&
      route.path !== pageException3
    );
  });
};

export interface ComponentRoute {
    path: string;
    Component: React.ElementType;
  }


