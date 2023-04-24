import * as types from './actionType'

const initialState = {
    forecastDetails: {}
}

const forecastDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_FORECAST_DETAILS:
            return {
                ...state,
                forecastDetails: action.payload,
            }
        default:
            return state
    }
}

export default forecastDetailsReducer