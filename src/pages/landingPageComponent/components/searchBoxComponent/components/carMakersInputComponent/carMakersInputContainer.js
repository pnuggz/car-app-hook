import React, { useEffect } from "react";
import $ from "jquery";
import { useStateValue } from "../../../../../../lib/state";
import { loadCarMakers } from "./carMakersInputMdl";

const CarMakersInput = () => {
  const [{ carMakers }, dispatchCarMakers] = useStateValue();
  const [{ searchForm }, dispatchSearchForm] = useStateValue();

  useEffect(() => {
    dispatchCarMakers({
      type: "CAR_MAKERS_REQUEST"
    });

    const fetchResult = loadCarMakers();

    fetchResult
      .then(response => response.json())
      .then(response => {
        if (response !== undefined) {
          dispatchCarMakers({
            type: "CAR_MAKERS_SUCCESS",
            payload: response.data
          });
        }
      });
  }, []);

  useEffect(() => {
    renderOptions();
  }, [carMakers]);

  const renderOptions = () => {
    if (carMakers.successful === true) {
      const renderOptions = carMakers.results.map(maker => {
        const key = maker.make_id;
        const text = maker.make_name;

        return (
          <option key={key} value={key}>
            {text}
          </option>
        );
      });
      renderOptions.unshift(
        <option key={0} value={0} id="placeholderMake">
          Select Make...
        </option>
      );
      return renderOptions;
    }

    return <option>Loading...</option>;
  };

  const handleSelectMakerChange = event => {
    if ($(event.target).val() !== 0) {
      $("#placeholderMake").prop("disabled", true);
    }

    const maker = event.target.value;
    const model = searchForm.value.model;
    const location = searchForm.value.location;
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
      name="selectMake"
      onChange={event => handleSelectMakerChange(event)}
    >
      {renderOptions()}
    </select>
  );
};

export default CarMakersInput;
