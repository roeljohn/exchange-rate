const defaultState = {
    rates: {}
}

const rateReducer = (state = defaultState, action) => {
    switch(action.type){
        case "GET_EXCHANGE_RATE":
            return {
                rates: {...action.payload}
            }
        default: return state
    }
}

export default rateReducer