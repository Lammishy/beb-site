import { format, differenceInDays, compareAsc } from "date-fns";

export const DATE_FORMAT = "dd-MM-yyyy";

export const BEB_CREDENTIALS = {
  user: "edna",
  pw: "stealfood",
};

export const openDeadlineReminder = () => {
  const deadline = new Date(2021, 8, 19); // month is 0-indexed
  const today = new Date();

  if (compareAsc(deadline, today) !== 1) {
    alert("You passed your deadline boi!");
  } else {
    const daysLeft = differenceInDays(deadline, today);
    alert(
      `You have your deadline is ${format(
        deadline,
        DATE_FORMAT
      )} and you have ${daysLeft} days left.`
    );
  }
};

// Actions
export const LOGIN = {
  LOGIN_TRY: "LOGIN_TRY",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
};

// Username-related
export const USERNAME = {
  USER_INPUT: "USER_INPUT",
  USERNAME_VALID: "USERNAME_VALID",
  USERNAME_INVALID: "USERNAME_INVALID",
  USERFIELD_TOUCHED: "USERFIELD_TOUCHED"
};

// Pw-related
export const PASSWORD = {
  PW_INPUT: "PW_INPUT",
  PASSWORD_VALID: "PASSWORD_VALID",
  PASSWORD_INVALID: "PASSWORD_INVALID",
  PASSWORDFIELD_TOUCHED: "PASSWORDFIELD_TOUCHED"
};
