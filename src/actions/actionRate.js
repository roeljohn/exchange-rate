import axios from "axios";
import { getExchangeRate } from "./action";
import { GET_EXCHANGE_RATE } from "./actionType";

export function getRates() {
    return dispatch => {
    //dispatch(fetchDataRequest());
    dispatch({ type: GET_EXCHANGE_RATE });
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