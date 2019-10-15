// * ACTION TYPES
const SET_SITE_INFORMATION = "SET_SITE_INFORMATION";
const SET_STAFF_INFORMATION = "SET_STAFF_INFORMATION";
const SET_SUBMITTING = "SET_SUBMITTING";
const SET_SUBMITTED = "SET_SUBMITTED";

// * ACTION GENERATORS
export const setSiteInformation = siteInformation => ({
  type: SET_SITE_INFORMATION,
  payload: { siteInformation }
});

export const setStaffInformation = staffInformation => ({
  type: SET_STAFF_INFORMATION,
  payload: { staffInformation }
});

export const setSubmitting = submitting => ({
  type: SET_SUBMITTING,
  payload: { submitting }
});

export const setSubmitted = submitted => ({
  type: SET_SUBMITTED,
  payload: { submitted }
});

// * PROMISES

// * THUNKS
