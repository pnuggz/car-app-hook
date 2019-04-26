const runningSearchReducer = (state, action) => {
  switch (action.type) {
    case "RUNNING_SEARCH_REQUEST":
      return {
        ...state,
        requesting: true,
        successful: false
      };

    case "RUNNING_SEARCH_SUCCESS":
      return {
        ...state,
        requesting: false,
        successful: true,
        results: action.payload
      };

    case "RUNNING_SEARCH_FAIL":
      return {
        ...state,
        requesting: false,
        successful: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default runningSearchReducer;
