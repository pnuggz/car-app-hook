import React from "react";
import { CarMakersInput } from "./components/carMakersInputComponent/index";
import { CarModelsInput } from "./components/carModelsInputComponent/index";
import { CarLocationsInput } from "./components/carLocationsInputComponent/index";
import { CarPriceInput } from "./components/carPriceInputComponent/index";
import { useStateValue } from "../../../../lib/state";

import { searchBoxSubmit } from "./searchBoxMdl";

const SearchBox = () => {
  const [{ searchForm }, dispatchSearchForm] = useStateValue();

  const handleSubmit = event => {
    dispatchSearchForm({
      type: "SEARCH_FORM_SUBMIT_REQUEST"
    });

    const fetchResult = searchBoxSubmit(searchForm);

    fetchResult
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          dispatchSearchForm({
            type: "SEARCH_FORM_SUBMIT_SUCCESS"
          });
        }
      });
  };

  return (
    <div className="search">
      {/* Search Container */}
      <div className="search-header">Search Your Dream Car</div>
      <form id="Search" onSubmit={event => handleSubmit(event)}>
        <div className="row">
          <div className="col">
            <div className="row justify-content-md-center">
              <div className="col">
                <div className="dropdown">
                  <CarMakersInput />
                </div>
              </div>
              <div className="col">
                <div className="dropdown">
                  <CarModelsInput />
                </div>
              </div>
              <div className="col">
                <div className="dropdown">
                  <CarLocationsInput />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <CarPriceInput />
              <div className="col">
                <button className="btn btn-secondary" action="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
