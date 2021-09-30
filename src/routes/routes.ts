import React from "react";
import orderBy from "lodash/orderBy";

// Pages
const AuthPage = React.lazy(() => import("components/pages/AuthPage"));
const TodoPage = React.lazy(() => import("components/pages/Todo/Todo"));
const Intro = React.lazy(() => import("components/pages/Intro"));
const AccessDeniedPage = React.lazy(() => import("components/pages/AccessDeniedPage"));
const JourneyStartPage = React.lazy(() => import("components/pages/JourneyStartPage"));
const SecondPage = React.lazy(() => import("components/pages/SecondPage"));
const ThirdPage = React.lazy(() => import("components/pages/ThirdPage"));
const ExcitedForFood0 = React.lazy(
  () => import("components/pages/ExcitedForFood0")
);

export const ROUTE_NAMES = {
  login: "/login",
  journeyStart: "/journey-start",
  secondPage: "/second-page",
  thirdPage: "/third-page",
  excitedForFood0: "/excited-for-food-0",
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
  // {
  //   path: ROUTE_NAMES.excitedForFood0,
  //   Component: ExcitedForFood0,
  //   pageNum: incrementPageNum(),
  // },
  },
  {
    path: ROUTE_NAMES.secondPage,
    Component: SecondPage,
    pageNum: 2,
  },
  {
    path: ROUTE_NAMES.thirdPage,
    Component: ThirdPage,
    pageNum: 3,
  },
  {
    path: ROUTE_NAMES.todo,
    Component: TodoPage,
    pageNum: 4,
  },
  {
    path: ROUTE_NAMES.intro,
    Component: Intro,
    pageNum: 5
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
const getMainContentRoutes = () => {
  /**
   * Retrieves Pages that are the main content of the site
   * These pages are sorted according to page number
   */
  const pageException = ROUTE_NAMES.login;
  const pageException2 = ROUTE_NAMES.notFound;
  const pageException3 = ROUTE_NAMES.accessDenied;

  const mainContentRoutes = routes.filter((route: ComponentRoute) => {
    return (
      route.path !== pageException &&
      route.path !== pageException2 &&
      route.path !== pageException3
    );
  });

  const sortedMainContentRoutes = orderBy(mainContentRoutes, ["pageNum"], ["asc"]);
  return sortedMainContentRoutes;
};

export const mainContentRoutes = getMainContentRoutes();

export interface ComponentRoute {
  path: string;
  Component: React.ElementType;
  pageNum?: number;
}
