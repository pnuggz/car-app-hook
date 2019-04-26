import React from "react";
import { useStateValue } from "../../../../../../lib/state";

const CarPriceInput = () => {
  const [{ searchForm }, dispatchSearchForm] = useStateValue();

  const handleInputMinPriceChange = event => {
    const maker = searchForm.value.maker;
    const model = searchForm.value.model;
    const location = searchForm.value.location;
    const minPrice = event.target.value;
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

  const handleInputMaxPriceChange = event => {
    const maker = searchForm.value.maker;
    const model = searchForm.value.model;
    const location = searchForm.value.location;
    const minPrice = searchForm.value.minPrice;
    const maxPrice = event.target.value;

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

  const renderOptions = () => {
    return (
      <React.Fragment>
        <option value={1000}>$1,000</option>
        <option value={3000}>$3,000</option>
        <option value={5000}>$5,000</option>
        <option value={7500}>$7,500</option>
        <option value={10000}>$10,000</option>
        <option value={15000}>$15,000</option>
        <option value={20000}>$20,000</option>
        <option value={25000}>$25,000</option>
        <option value={30000}>$30,000</option>
        <option value={35000}>$35,000</option>
        <option value={40000}>$40,000</option>
        <option value={45000}>$45,000</option>
        <option value={50000}>$50,000</option>
        <option value={60000}>$60,000</option>
        <option value={70000}>$70,000</option>
        <option value={80000}>$80,000</option>
        <option value={90000}>$90,000</option>
        <option value={100000}>$100,000</option>
        <option value={150000}>$150,000</option>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className="col">
        <select
          name="minPrice"
          className="min-price form-control col"
          placeholder="Min Price"
          onChange={event => handleInputMinPriceChange(event)}
        >
          <option value={null}>Min Price</option>
          {renderOptions()}
        </select>
      </div>
      <div className="col">
        <select
          name="maxPrice"
          className="max-price form-control col"
          placeholder="Max Price"
          onChange={event => handleInputMaxPriceChange(event)}
        >
          <option value={null}>Max Price</option>
          {renderOptions()}
        </select>
      </div>
    </React.Fragment>
  );
};

export default CarPriceInput;
