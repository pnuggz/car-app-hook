import { runningSearchReducer } from "./components/runningSearchComponent/index";

export const initialState = {
  runningSearch: {
    requesting: false,
    successful: false,
    error: null,
    results: []
  }
};

export const carLandingReducer = ({ runningSearch }, action) => ({
  runningSearch: runningSearchReducer(runningSearch, action)
});
