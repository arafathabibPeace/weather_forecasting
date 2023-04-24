import * as types from './actionType'

const initialState = {
    userDetails: {}
}

const userDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload,
            }
        default:
            return state
    }
}

export default userDetailsReducer