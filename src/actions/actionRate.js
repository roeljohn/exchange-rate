import axios from "axios";
import { convertExchangeRate, getExchangeRate } from "./action";
import { GET_EXCHANGE_RATE } from "./actionType";

export function getRates() {
    return dispatch => {
    //dispatch(fetchDataRequest());
    axios
      .get(
        "https://api.exchangeratesapi.io/latest"
      )
      .then(response => {
        dispatch(getExchangeRate(response.data.rates));
      })
      .catch(error => {
        //dispatch(fetchDataError(error));
      });
  };
}

export function getConvertRates(first_rate, second_rate) {
  return dispatch => {
    const result = first_rate * second_rate;
    console.log(result);
    dispatch(convertExchangeRate(result));
  };
}