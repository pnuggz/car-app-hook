import React, { useEffect } from "react";
import $ from "jquery";
import { useStateValue } from "../../../../../../lib/state";
import { loadCarLocations } from "./carLocationsInputMdl";

const CarLocationsInput = () => {
  const [{ carLocations }, dispatchCarLocations] = useStateValue();
  const [{ searchForm }, dispatchSearchForm] = useStateValue();

  useEffect(() => {
    dispatchCarLocations({
      type: "CAR_LOCATIONS_REQUEST"
    });

    const fetchResult = loadCarLocations();

    fetchResult
      .then(response => response.json())
      .then(response => {
        if (response !== undefined) {
          dispatchCarLocations({
            type: "CAR_LOCATIONS_SUCCESS",
            payload: response.data
          });
        }
      });
  }, []);

  useEffect(() => {
    renderOptions();
  }, [carLocations]);

  const renderOptions = () => {
    if (carLocations.successful === true) {
      const renderOptions = carLocations.results.map(location => {
        const key = location.location_id;
        const text = location.location;

        return (
          <option key={key} value={key}>
            {text}
          </option>
        );
      });
      return renderOptions;
    }

    return <option>Loading...</option>;
  };

  const handleSelectLocationChange = event => {
    const maker = searchForm.value.maker;
    const model = searchForm.value.model;
    const location = event.target.value;
    const minPrice = searchForm.value.minPrice;
    const maxPrice = searchForm.value.maxPrice;

    dispatchSearchForm({
      type: "SEARCH_FORM_VALUE_UPDATE",
      payload: {
        maker: maker,
        model: model,
        location: location,
        minPrice: minPrice,
        maxPrice: maxPrice
      }
    });
  };

  return (
    <select
      className="btn btn-secondary dropdown-toggle"
      name="selectLocation"
      onChange={event => handleSelectLocationChange(event)}
    >
      {renderOptions()}
    </select>
  );
};

export default CarLocationsInput;
