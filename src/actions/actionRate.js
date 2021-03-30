import axios from "axios";
import { convertFinalExchangeRate, convertExchangeRate, getExchangeRate } from "./action";
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

export function getConvertRates(fist_rate, second_rate) {
  return dispatch => {
    const result = second_rate / fist_rate;
    dispatch(convertExchangeRate(result));
  };
}

export function getFinalConvertRates(amount, second_rate) {
  return dispatch => {
    const result = amount * second_rate;
    dispatch(convertFinalExchangeRate(result));
  };
}

