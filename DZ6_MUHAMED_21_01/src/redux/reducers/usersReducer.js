import {types} from "../types";

const initialState = {
    users: [],
    successMessageVisible: false
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case types.SHOW_SUCCESS_MESSAGE:
            return {
                ...state,
                successMessageVisible: true
            }
        case types.HIDE_SUCCESS_MESSAGE:
            return {
                ...state,
                successMessageVisible: false
            }
        default:
            return state
    }
}