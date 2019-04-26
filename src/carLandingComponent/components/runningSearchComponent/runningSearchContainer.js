import React, { useEffect } from "react";
import { useStateValue } from "../../../lib/state";

import { loadRunningSearch } from "./runningSearchMdl";

const RunningSearch = () => {
  const [{ runningSearch }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "RUNNING_SEARCH_REQUEST"
    });

    const fetchResults = loadRunningSearch();

    fetchResults
      .then(fetchResults => fetchResults.json())
      .then(fetchResults => {
        if (fetchResults !== undefined) {
          dispatch({
            type: "RUNNING_SEARCH_SUCCESS",
            payload: fetchResults.data
          });
        }
      });
  }, []);

  if (runningSearch.successful === true) {
    return runningSearch.results.map(searchRes => (
      <div
        className="running row justify-content-md-center"
        key={searchRes.search_id}
      >
        <div className="col">
          <div className="running-row row align-items-center">
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col header">Make</div>
              </div>
              <div className="row align-items-center">
                <div className="col">{searchRes.make_name}</div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col header">Model</div>
              </div>
              <div className="row align-items-center">
                <div className="col">{searchRes.model_name}</div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col header">Status</div>
              </div>
              <div className="row align-items-center">
                <div className="col">
                  {searchRes.status === 0 ? "Running" : "Suspended"}
                </div>
              </div>
            </div>
          </div>
          <div className="running-row row align-items-center">
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col header">Price Range</div>
              </div>
              <div className="row align-items-center">
                {searchRes.min_price == null && searchRes.max_price == null ? (
                  <div className="col">Any</div>
                ) : (
                  <div className="col">
                    ${searchRes.min_price} - ${searchRes.max_price}
                  </div>
                )}
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col header">Location</div>
              </div>
              <div className="row align-items-center">
                <div className="col">{searchRes.location}</div>
              </div>
            </div>
            <div className="col-4">
              <div className="row align-items-center">
                <div className="col">
                  <button
                    className="btn btn-secondary"
                    searchid={searchRes.search_id}
                    onClick={e =>
                      this.handleShow(e.target.getAttribute("searchid"))
                    }
                  >
                    --
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="row justify-content-md-center border">
      <div className="col">Loading...</div>
    </div>
  );
};

export default RunningSearch;
