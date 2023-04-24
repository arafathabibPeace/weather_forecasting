import * as types from './actionType'

const initialState = {
    userCityDetails: {}
}

const cityDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CITY_DETAILS:
            return {
                ...state,
                cityDetails: action.payload,
            }
        default:
            return state
    }
}

export default cityDetailsReducer