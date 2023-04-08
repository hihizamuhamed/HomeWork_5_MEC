import { combineReducers } from "redux";
import usersReducer from "./reducers/usersReducer";
import userReducer from "./reducers/usersReducer";


export const rootReducer = combineReducers({
    usersReducer,
    userReducer
})