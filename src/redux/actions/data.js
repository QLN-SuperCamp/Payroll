// * ACTION TYPES
const SET_SITE_INFORMATION = "SET_SITE_INFORMATION";
const SET_STAFF_INFORMATION = "SET_STAFF_INFORMATION";

// * ACTION GENERATORS
export const setSiteInformation = siteInformation => ({
  type: SET_SITE_INFORMATION,
  payload: { siteInformation }
});

export const setStaffInformation = staffInformation => ({
  type: SET_STAFF_INFORMATION,
  payload: { staffInformation }
});

// * PROMISES

// * THUNKS
