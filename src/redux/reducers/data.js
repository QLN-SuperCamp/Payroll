const defaultState = {
  siteInformation: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_SITE_INFORMATION":
      return { ...state, siteInformation: action.payload.siteInformation };
    default:
      return state;
  }
};
