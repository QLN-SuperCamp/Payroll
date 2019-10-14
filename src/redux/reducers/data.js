const defaultState = {
  siteInformation: null,
  staffInformation: null,
  submitting: false,
  submitted: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_SITE_INFORMATION":
      return { ...state, siteInformation: action.payload.siteInformation };
    case "SET_STAFF_INFORMATION":
      return { ...state, staffInformation: action.payload.staffInformation };
    case "SET_SUBMITTING":
      return { ...state, submitting: action.payload.submitting };
    case "SET_SUBMITTED":
      return { ...state, submitted: action.payload.submitted };
    default:
      return state;
  }
};
