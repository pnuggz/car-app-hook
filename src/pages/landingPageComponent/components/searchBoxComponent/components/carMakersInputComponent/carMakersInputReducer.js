const carMakersReducer = (state, action) => {
  switch (action.type) {
    case "CAR_MAKERS_REQUEST":
      return {
        ...state,
        requesting: true,
        successful: false
      };

    case "CAR_MAKERS_SUCCESS":
      return {
        ...state,
        requesting: false,
        successful: true,
        results: action.payload
      };

    case "CAR_MAKERS_FAIL":
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

export default carMakersReducer;
