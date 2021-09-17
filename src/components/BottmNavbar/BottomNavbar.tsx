// Bottom Navigation UI
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import makeStyles from "@material-ui/styles/makeStyles";

// Navigation
import { useHistory, useLocation } from "react-router-dom";
import { ComponentRoute, mainContentRoutes } from "routes/routes";

// Hooks
import { useState, useEffect } from "react";
import { findIndex } from "lodash";

const isOnLastPath = (path: string): boolean => {
  const lastPath = mainContentRoutes[mainContentRoutes.length - 1]; // acceptable because mainCintentRoutes is already sorted
  return path === lastPath.path;
}

const isOnFirstPage = (path: string): boolean => {
  const firstPath = mainContentRoutes[0];
  return path === firstPath.path;
}

const BottomNavbar = (props: any) => {
  const navigationBottomStyles = makeStyles(_ => ({
    root: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-around"
    },
  }))();

  const navButtonStyles = makeStyles(_ => ({
    root: {
      flex: "1 0 50%",
      maxWidth: "none"
    }
  }))();

  const location = useLocation();
  const history = useHistory();

  // State management
  const [isFirstPage, setIsFirstPage] = useState(isOnFirstPage(location.pathname));
  const [isLastPage, setIsLastPage] = useState(isOnLastPath(location.pathname));

  // let useEffect handle whenver location updates
  useEffect(() => {
    // handle isFirstPage
    setIsFirstPage(isOnFirstPage(location.pathname));
    // handle isLastPage
    setIsLastPage(isOnLastPath(location.pathname))

  }, [location.pathname])


  const handleChange = (event: any, typeOfNavButton: any) => {
    const currentPage = location.pathname;

    if (typeOfNavButton === "prev") {
      goToRouteBefore(currentPage);
    }

    if (typeOfNavButton === "next") {
      // using the currentPage, figure out what is the next page after that
      goToRouteAfter(currentPage);
    };
  }

  const goToRouteBefore = (currentPage: string, routes: ComponentRoute[] = mainContentRoutes): void => {
    /**
     * Using currentPage, checks for route before it
     * If exists, navigate to route
     */
    let previousRoute = {path: ""};

    if (!isOnFirstPage(currentPage)) {
      // any code for getting the previous element would already work and not throw error
      // because already checking if it is the first element in the array
      const currentRouteIndex = findIndex(routes, ["path", currentPage]); // find route where it's path is the currentpage
      previousRoute = routes[currentRouteIndex - 1];
      history.push(previousRoute.path);
    }
  }
  
  const goToRouteAfter = (currentPage: string, routes: ComponentRoute[] = mainContentRoutes): void => {
    /**
     * Using currentPage, checks for route after it
     * If exists, navigate to route
     */
    let nextRoute = { path: "" };

    if (!isOnLastPath(currentPage)) {
      // any code for getting next element would not throw error
      // because we already check if element is the last in array
      const currentRouteIndex = findIndex(routes, ["path", currentPage]);
      nextRoute = routes[currentRouteIndex + 1];
      history.push(nextRoute.path);
    }
  }

  return (
    <BottomNavigation
      showLabels
      onChange={handleChange}
      className={navigationBottomStyles.root}
    >
      {!isFirstPage &&
        <BottomNavigationAction
          label="Previous"
          value="prev"
          icon={<ChevronLeftIcon />}
          className={navButtonStyles.root}
        />}
      {!isLastPage &&
        <BottomNavigationAction
          label="Next"
          value="next"
          icon={<ChevronRightIcon />}
          className={navButtonStyles.root}
        />}
    </BottomNavigation>
  );
};

export default BottomNavbar;
