const defaultState = {
  firstName: "",
  lastName: "",
  site: "",
  camp: "",
  date: ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CAMP":
      return { ...state, camp: action.payload.camp };
    case "SET_DATE":
      return { ...state, date: action.payload.date };
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload.firstName };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload.lastName };
    case "SET_SITE":
      return { ...state, site: action.payload.site };
    default:
      return state;
  }
};
