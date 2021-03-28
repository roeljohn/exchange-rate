import { CONVERT_EXCHANGE_RATE, GET_EXCHANGE_RATE } from "./actionType";

export function getExchangeRate(payload){
    return {
        type: GET_EXCHANGE_RATE,
        payload: payload
    }
}

export function convertExchangeRate(payload){
    return {
        type: CONVERT_EXCHANGE_RATE,
        payload: payload
    }
}