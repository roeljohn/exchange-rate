import { GET_EXCHANGE_RATE } from "./actionType";

export function getExchangeRate(payload){
    return {
        type: GET_EXCHANGE_RATE,
        payload: payload
    }
}