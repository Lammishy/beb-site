import React from "react";
import orderBy from "lodash/orderBy";

// Access Pages
const AuthPage = React.lazy(() => import("components/pages/AuthPage"));

// Error Pages
const AccessDeniedPage = React.lazy(
  () => import("components/pages/AccessDeniedPage")
);
const NotFoundPage = React.lazy(() => import("components/pages/NotFoundPage"));

// Main Content Pages

// Leadup
const FirstPage = React.lazy(() => import("components/pages/FirstPage"));
const SecondPage = React.lazy(() => import("components/pages/SecondPage"));
const ThirdPage = React.lazy(() => import("components/pages/ThirdPage"));
const FourthPage = React.lazy(() => import("components/pages/FourthPage"));
const FifthPage = React.lazy(() => import("components/pages/FifthPage"));
const SixthPage = React.lazy(() => import("components/pages/SixthPage"));
const SeventhPage = React.lazy(() => import("components/pages/SeventhPage"));
const EighthPage = React.lazy(() => import("components/pages/EighthPage"));
const NinthPage = React.lazy(() => import("components/pages/NinthPage"));
const TenthPage = React.lazy(() => import("components/pages/TenthPage"));
const EleventhPage = React.lazy(() => import("components/pages/EleventhPage"));
const TwelvethPage = React.lazy(() => import("components/pages/TwelvethPage"));
const ThirteenthPage = React.lazy(
  () => import("components/pages/ThirteenthPage")
);
const FourteenthPage = React.lazy(
  () => import("components/pages/FourteenthPage")
);

// Food Pages
const JourneyStartPage = React.lazy(
  () => import("components/pages/JourneyStartPage")
);
const ExcitedForFood0 = React.lazy(
  () => import("components/pages/ExcitedForFood0")
);
const ExcitedForFood = React.lazy(
  () => import("components/pages/ExcitedForFood")
);
const ExcitedForFood2 = React.lazy(
  () => import("components/pages/ExcitedForFood2")
);
const ExcitedForFood3 = React.lazy(
  () => import("components/pages/ExcitedForFood3")
);
const ExcitedForFood4 = React.lazy(
  () => import("components/pages/ExcitedForFood4")
);
const ExcitedForFood4Dash5 = React.lazy(() => import("components/pages/ExcitedForFood4-5"));
const ExcitedForFood5 = React.lazy(
  () => import("components/pages/ExcitedForFood5")
);
const ExcitedForFood6 = React.lazy(
  () => import("components/pages/ExcitedForFood6")
);
const ExcitedForFood7 = React.lazy(
  () => import("components/pages/ExcitedForFood7")
);
const ExcitedForFood8 = React.lazy(
  () => import("components/pages/ExcitedForFood8")
);

// Sleep Pages
const Sleep1 = React.lazy(() => import("components/pages/Sleep1"));
const Sleep2 = React.lazy(() => import("components/pages/Sleep2"));
const Sleep3 = React.lazy(() => import("components/pages/Sleep3"));
const Sleep4 = React.lazy(() => import("components/pages/Sleep4"));
const Sleep5 = React.lazy(() => import("components/pages/Sleep5"));
const Sleep6 = React.lazy(() => import("components/pages/Sleep6"));
const Sleep7 = React.lazy(() => import("components/pages/Sleep7"));

// WoA Pages
const WoaStart = React.lazy(() => import("components/pages/WoaStart"));
const Woa1 = React.lazy(() => import("components/pages/Woa1"));
const Woa2 = React.lazy(() => import("components/pages/Woa2"));
const Woa3 = React.lazy(() => import("components/pages/Woa3"));
const Woa3Dash5 = React.lazy(() => import("components/pages/Woa3-5"));
const Woa4 = React.lazy(() => import("components/pages/Woa4"));
const Woa5 = React.lazy(() => import("components/pages/Woa5"));
const Woa6 = React.lazy(() => import("components/pages/Woa6"));
const Woa7 = React.lazy(() => import("components/pages/Woa7"));
const Woa8 = React.lazy(() => import("components/pages/Woa8"));
const Woa8Dash5 = React.lazy(() => import("components/pages/Woa8-5"));
const Woa9 = React.lazy(() => import("components/pages/Woa9"));
const Woa10 = React.lazy(() => import("components/pages/Woa10"));
const Woa11 = React.lazy(() => import("components/pages/Woa11"));
const Woa12 = React.lazy(() => import("components/pages/Woa12"));
const Woa13 = React.lazy(() => import("components/pages/Woa13"));
const Woa14 = React.lazy(() => import("components/pages/Woa14"));
const Woa15 = React.lazy(() => import("components/pages/Woa15"));
const Woa16 = React.lazy(() => import("components/pages/Woa16"));
const WoaFriends = React.lazy(() => import("components/pages/WoaFriends"));

// Misc pages for testing
const TodoPage = React.lazy(() => import("components/pages/Todo/Todo"));


const incrementPageNum = ((pageNum: number = 1) => {
  return () => {
    let n = pageNum;
    pageNum = pageNum + 1;
    return n;
  };
})();

export const ROUTE_NAMES = {
  login: "/login",
  firstPage: "/first-page",
  secondPage: "/second-page",
  thirdPage: "/third-page",
  fourthPage: "/fourth-page",
  fifthpage: "/fifth-page",
  sixthPage: "/sixth-page",
  seventhPage: "/seventh-page",
  eighthPage: "/eighth-page",
  ninthPage: "/ninth-page",
  tenthPage: "/tenth-page",
  eleventhPage: "/eleventh-page",
  twelvethPage: "/twelvethPage",
  thirteenthPage: "/thirteenth-page",
  fourteenthPage: "/fourteenth-page",
  journeyStart: "/journey-start",
  excitedForFood0: "/excited-for-food-0",
  excitedForFood: "/excited-for-food",
  excitedForFood2: "/excited-for-food-2",
  excitedForFood3: "/excited-for-food-3",
  excitedForFood4: "/excited-for-food-4",
  excitedForFood4Dash5: "/excited-for-food-4.5",
  excitedForFood5: "/excited-for-food-5",
  excitedForFood6: "/excited-for-food-6",
  excitedForFood7: "/excited-for-food-7",
  excitedForFood8: "/excited-for-food-8",
  sleep1: "/sleep-1",
  sleep2: "/sleep-2",
  sleep3: "/sleep-3",
  sleep4: "/sleep-4",
  sleep5: "/sleep-5",
  sleep6: "/sleep-6",
  sleep7: "/sleep-7",
  woaStart: "/woa-start",
  woa1: "/woa-1",
  woa2: "/woa-2",
  woa3: "/woa-3",
  woa3Dash5: "/woa-3.5",
  woa4: "/woa-4",
  woa5: "/woa-5",
  woa6: "/woa-6",
  woa7: "/woa-7",
  woa8: "/woa-8",
  woa8Dash5: "/woa-8.5",
  woa9: "/woa-9",
  woa10: "/woa-10",
  woa11: "/woa-11",
  woa12: "/woa-12",
  woa13: "/woa-13",
  woa14: "/woa-14",
  woa15: "/woa-15",
  woa16: "/woa-16",
  woaFriends: "/woa-friends",
  eatTooMuch: "/eat-too-much",
  accessDenied: "/access-denied",
  notFound: "/not-found",
  todo: "/todo",
};

const leadUpRoutes: ComponentRoute[] = [
  {
    path: ROUTE_NAMES.firstPage,
    Component: FirstPage,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.secondPage,
    Component: SecondPage,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.thirdPage,
    Component: ThirdPage,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.fourthPage,
    Component: FourthPage,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.fifthpage,
    Component: FifthPage,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.sixthPage,
    Component: SixthPage,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.seventhPage,
    Component: SeventhPage,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.eighthPage,
    Component: EighthPage,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.ninthPage,
    Component: NinthPage,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.tenthPage,
    Component: TenthPage,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.eleventhPage,
    Component: EleventhPage,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.twelvethPage,
    Component: TwelvethPage,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.thirteenthPage,
    Component: ThirteenthPage,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.fourteenthPage,
    Component: FourteenthPage,
    pageNum: incrementPageNum(),
  },
];

const stealFoodRoutes: ComponentRoute[] = [
  {
    path: ROUTE_NAMES.journeyStart,
    Component: JourneyStartPage,
    pageNum: incrementPageNum(),
  },
  // {
  //   path: ROUTE_NAMES.excitedForFood0,
  //   Component: ExcitedForFood0,
  //   pageNum: incrementPageNum(),
  // },
  {
    path: ROUTE_NAMES.excitedForFood,
    Component: ExcitedForFood,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.excitedForFood2,
    Component: ExcitedForFood2,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.excitedForFood3,
    Component: ExcitedForFood3,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.excitedForFood4,
    Component: ExcitedForFood4,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.excitedForFood4Dash5,
    Component: ExcitedForFood4Dash5,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.excitedForFood5,
    Component: ExcitedForFood5,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.excitedForFood6,
    Component: ExcitedForFood6,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.excitedForFood7,
    Component: ExcitedForFood7,
    pageNum: incrementPageNum(),
  },
  {
    path: ROUTE_NAMES.excitedForFood8,
    Component: ExcitedForFood8,
    pageNum: incrementPageNum(),
  },
];

const sleepingOnBeebRoutes: ComponentRoute[] = [
  {
    path: ROUTE_NAMES.sleep1,
    Component: Sleep1,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.sleep2,
    Component: Sleep2,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.sleep3,
    Component: Sleep3,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.sleep4,
    Component: Sleep4,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.sleep5,
    Component: Sleep5,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.sleep6,
    Component: Sleep6,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.sleep7,
    Component: Sleep7,
    pageNum: incrementPageNum()
  },
];

const woaStartRoutes: ComponentRoute[] = [
  {
    path: ROUTE_NAMES.woaStart,
    Component: WoaStart,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa1,
    Component: Woa1,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa2,
    Component: Woa2,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa3,
    Component: Woa3,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa3Dash5,
    Component: Woa3Dash5,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa4,
    Component: Woa4,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa5,
    Component: Woa5,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa6,
    Component: Woa6,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa7,
    Component: Woa7,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa8,
    Component: Woa8,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa8Dash5,
    Component: Woa8Dash5,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa9,
    Component: Woa9,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa10,
    Component: Woa10,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa11,
    Component: Woa11,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woaFriends,
    Component: WoaFriends,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa12,
    Component: Woa12,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa13,
    Component: Woa13,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa14,
    Component: Woa14,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa15,
    Component: Woa15,
    pageNum: incrementPageNum()
  },
  {
    path: ROUTE_NAMES.woa16,
    Component: Woa16,
    pageNum: incrementPageNum()
  },
]

const routes: ComponentRoute[] = [
  {
    path: ROUTE_NAMES.login,
    Component: AuthPage,
  },
  ...leadUpRoutes,
  ...stealFoodRoutes,
  ...sleepingOnBeebRoutes,
  ...woaStartRoutes,
  // {
  //   path: ROUTE_NAMES.todo,
  //   Component: TodoPage,
  //   pageNum: 6,
  // }
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

  const sortedMainContentRoutes = orderBy(
    mainContentRoutes,
    ["pageNum"],
    ["asc"]
  );
  return sortedMainContentRoutes;
};

export const mainContentRoutes = getMainContentRoutes();

export interface ComponentRoute {
  path: string;
  Component: React.ElementType;
  pageNum?: number;
}
