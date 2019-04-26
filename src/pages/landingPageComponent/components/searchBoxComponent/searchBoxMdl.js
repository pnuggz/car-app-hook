import { searchBoxSubmitApi } from "./searchBoxApi";

export function searchBoxSubmit(searchForm) {
  var make = searchForm.value.maker;
  var model = searchForm.value.model;
  var location = searchForm.value.location;
  var minPrice = searchForm.value.minPrice;
  var maxPrice = searchForm.value.maxPrice;

  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const token = userInfo.token;

  try {
    const fetch = searchBoxSubmitApi(
      make,
      model,
      location,
      minPrice,
      maxPrice,
      token
    );

    return fetch;
  } catch (error) {
    return error;
  }
}
