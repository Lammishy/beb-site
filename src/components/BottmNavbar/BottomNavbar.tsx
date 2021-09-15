// Bottom Navigation
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import makeStyles from "@material-ui/styles/makeStyles";

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

  const handleChange = (event: any, newValue: any) => {
    console.log("XJ: ", event.target);
    console.log("XJ newValue: ", newValue);
  }

  return (
    <BottomNavigation
      showLabels
      onChange={handleChange}
      className={navigationBottomStyles.root}
    >
      {/* ROUTER TO USE
      1. router.history.goBack(), https://stackoverflow.com/a/32509845
      2. find a way to implement "next" button to go to the next without having to add the path manually to each next button.
      - need a way to:
        - Reference a list of routes
        - Track what element (page in the list of routes) we are currently on
        - Ability to go back (try react router history.goBack()) ?
        - Ability to go to the next element in the list
        
        - Suggestion: To reference store
        - reducer will hold list of routes
        - reducer will keep track of two variables: currentRoute and index of that route
        - 
      - All of this will be responsibility of navigation component
      - Actual routing will be handled by Router -> Switch 
    */}
      <BottomNavigationAction
        label="Previous"
        value="prev"
        icon={<ChevronLeftIcon />}
        className={navButtonStyles.root}
      />
      <BottomNavigationAction
        label="Next"
        value="next"
        icon={<ChevronRightIcon />}
        className={navButtonStyles.root}
      />
    </BottomNavigation>
  );
};

export default BottomNavbar;
