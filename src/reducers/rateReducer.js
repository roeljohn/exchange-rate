const defaultState = {
    rates: {},
    convertRate: 0
}

const rateReducer = (state = defaultState, action) => {
    switch(action.type){
        case "GET_EXCHANGE_RATE":
            return {
                rates: {...action.payload}
            }
        case "CONVERT_EXCHANGE_RATE":
            return {
                convertRate: action.payload
            }
        default: return state
    }
}

export default rateReducer