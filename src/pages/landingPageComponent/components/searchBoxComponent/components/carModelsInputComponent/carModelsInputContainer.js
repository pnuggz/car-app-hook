import React, { useEffect } from "react";
import $ from "jquery";
import { useStateValue } from "../../../../../../lib/state";
import { loadCarModels } from "./carModelsInputMdl";

const CarModelsInput = () => {
  const [{ carModels }, dispatchCarModels] = useStateValue();
  const [{ searchForm }, dispatchSearchForm] = useStateValue();

  useEffect(() => {
    dispatchCarModels({
      type: "CAR_MODELS_REQUEST"
    });

    const fetchResult = loadCarModels();

    fetchResult
      .then(response => response.json())
      .then(response => {
        if (response !== undefined) {
          dispatchCarModels({
            type: "CAR_MODELS_SUCCESS",
            payload: response.data
          });
        }
      });
  }, []);

  useEffect(() => {
    renderOptions();
  }, [carModels]);

  const renderOptions = () => {
    const maker_id = searchForm.value.maker;

    if (carModels.successful === true && maker_id !== null) {
      const selectedModelByMaker = carModels.results.filter(
        model => model.make_id === maker_id
      );

      if (selectedModelByMaker.length > 0) {
        const renderOption = selectedModelByMaker.map(model => {
          const key = model.model_id;
          const text = model.model_name;

          return (
            <option key={key} value={key}>
              {text}
            </option>
          );
        });

        renderOption.unshift(
          <option key={0} value={0} id="placeholderModel">
            Select Make...
          </option>
        );

        return renderOption;
      }

      return <option>Not Available</option>;
    }

    return <option>Loading...</option>;
  };

  const handleSelectModelChange = event => {
    if ($(event.target).val() !== 0) {
      $("#placeholderModel").prop("disabled", true);
    }

    const maker = searchForm.value.maker;
    const model = event.target.value;
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
      onChange={event => handleSelectModelChange(event)}
    >
      {renderOptions()}
    </select>
  );
};

export default CarModelsInput;
