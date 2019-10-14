const defaultState = {
  siteInformation: null,
  staffInformation: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_SITE_INFORMATION":
      return { ...state, siteInformation: action.payload.siteInformation };
    case "SET_STAFF_INFORMATION":
      return { ...state, staffInformation: action.payload.staffInformation };
    default:
      return state;
  }
};
