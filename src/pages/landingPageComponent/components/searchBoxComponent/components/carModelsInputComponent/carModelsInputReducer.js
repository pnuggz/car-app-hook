const carModelsReducer = (state, action) => {
  switch (action.type) {
    case "CAR_MODELS_REQUEST":
      return {
        ...state,
        requesting: true,
        successful: false
      };

    case "CAR_MODELS_SUCCESS":
      return {
        ...state,
        requesting: false,
        successful: true,
        results: action.payload
      };

    case "CAR_MODELS_FAIL":
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

export default carModelsReducer;
