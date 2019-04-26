const searchFormReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_FORM_VALUE_UPDATE":
      return {
        ...state,
        value: action.payload
      };

    case "SEARCH_FORM_SUBMIT_REQUEST":
      return {
        ...state,
        requesting: true,
        successful: false
      };

    case "SEARCH_FORM_SUBMIT_SUCCESS":
      return {
        ...state,
        requesting: false,
        successful: true
      };

    case "SEARCH_FORM_SUBMIT_RESET":
      return {
        ...state,
        requesting: false,
        successful: false
      };

    case "SEARCH_FORM_SUBMIT_FAIL":
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

export default searchFormReducer;
