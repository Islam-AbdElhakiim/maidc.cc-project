import { createReducer, on } from "@ngrx/store";
import { UsersDataState } from "../types";
import *  as UsersActions from './actions';


export const initialState: UsersDataState = {
    data: null,
    loading: false,
    error: null
}

export const usersReducers = createReducer(initialState,
    //* Get Users Start */
    on(UsersActions.getUsers, (state) => ({
        ...state,
        loading: true
    })),
    on(UsersActions.getUsersSuccess, (state, { data }) => ({
        ...state,
        data,
        loading: false,
        error: false
    })),
    on(UsersActions.getUsersFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    })),
    //* Get Users End */

    //* Get User Details Start */
    // on(UsersActions.getUserDetails, (state) => ({
    //     ...state,
    //     loading: true
    // })),
    // on(UsersActions.getUserDetailsSuccess, (state, { data }) => ({
    //     ...state,
    //     data,
    //     loading: false,
    //     error: false
    // })),
    // on(UsersActions.getUsersFailure, (state, { error }) => ({
    //     ...state,
    //     error,
    //     loading: false
    // }))
    //* Get User Details End */


)