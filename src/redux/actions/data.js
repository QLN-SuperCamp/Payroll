// * ACTION TYPES
const SET_CAMP = "SET_CAMP";
const SET_DATE = "SET_DATE";
const SET_FIRST_NAME = "SET_FIRST_NAME";
const SET_LAST_NAME = "SET_LAST_NAME";
const SET_SITE = "SET_SITE";

// * ACTION GENERATORS
export const setCamp = camp => ({ type: SET_CAMP, payload: { camp } });

export const setDate = date => ({ type: SET_DATE, payload: { date } });

export const setFirstName = firstName => ({
  type: SET_FIRST_NAME,
  payload: { firstName }
});

export const setLastName = lastName => ({
  type: SET_LAST_NAME,
  payload: { lastName }
});

export const setSite = site => ({ type: SET_SITE, payload: { site } });

// * PROMISES

// * THUNKS
