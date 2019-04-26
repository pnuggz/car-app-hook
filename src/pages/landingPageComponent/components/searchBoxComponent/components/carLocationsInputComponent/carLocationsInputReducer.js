const carLocationsReducer = (state, action) => {
  switch (action.type) {
    case "CAR_LOCATIONS_REQUEST":
      return {
        ...state,
        requesting: true,
        successful: false
      };

    case "CAR_LOCATIONS_SUCCESS":
      return {
        ...state,
        requesting: false,
        successful: true,
        results: action.payload
      };

    case "CAR_LOCATIONS_FAIL":
      return {
        ...state,
        requesting: false,
        successful: true,
        error: action.payload
      };

    default:
      return state;
  }
};

export default carLocationsReducer;
