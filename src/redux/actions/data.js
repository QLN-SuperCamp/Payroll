// * ACTION TYPES
const SET_SITE_INFORMATION = "SET_SITE_INFORMATION";

// * ACTION GENERATORS
export const setSiteInformation = siteInformation => ({
  type: SET_SITE_INFORMATION,
  payload: { siteInformation }
});

// * PROMISES

// * THUNKS
