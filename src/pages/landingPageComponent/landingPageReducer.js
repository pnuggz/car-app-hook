import { runningSearchReducer } from "./components/runningSearchComponent/index";
import { carMakersReducer } from "./components/searchBoxComponent/components/carMakersInputComponent/index";
import { carModelsReducer } from "./components/searchBoxComponent/components/carModelsInputComponent/index";
import { carLocationsReducer } from "./components/searchBoxComponent/components/carLocationsInputComponent/index";
import { searchFormReducer } from "./components/searchBoxComponent/index";

export const initialState = {
  runningSearch: {
    requesting: false,
    successful: false,
    error: null,
    results: []
  },
  carMakers: {
    requesting: false,
    successful: false,
    error: null,
    results: []
  },
  carModels: {
    requesting: false,
    successful: false,
    error: null,
    results: []
  },
  carLocations: {
    requesting: false,
    successful: false,
    error: null,
    results: []
  },
  searchForm: {
    requesting: false,
    successful: false,
    error: null,
    value: {
      maker: null,
      model: null,
      location: null,
      minPrice: null,
      maxPrice: null
    }
  }
};

export const landingReducer = (
  { runningSearch, carMakers, carModels, carLocations, searchForm },
  action
) => ({
  runningSearch: runningSearchReducer(runningSearch, action),
  carMakers: carMakersReducer(carMakers, action),
  carModels: carModelsReducer(carModels, action),
  carLocations: carLocationsReducer(carLocations, action),
  searchForm: searchFormReducer(searchForm, action)
});
