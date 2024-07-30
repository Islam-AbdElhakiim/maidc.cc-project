import { createAction, props } from "@ngrx/store";
import { User, UsersData } from "../types";

//* Get Users Start */
export const getUsers = createAction(
    '[Users] Get Users',
    props<{ page: number; per_page: number }>()
)

export const getUsersSuccess = createAction(
    '[User] Get Users Success',
    props<{ data: UsersData }>()
);

export const getUsersFailure = createAction(
    '[User] Get Users Failure',
    props<{ error: any }>()
);
//* Get Users End */

//* Get User Details Start */
export const getUserDetails = createAction(
    '[User] Get User Details',
    props<{ id: number }>()
);

export const getUserDetailsSuccess = createAction(
    '[User] Get User Details Success',
    props<{ data: User }>()
);

export const getUserDetailsFailure = createAction(
    '[User] Get User Details Failure',
    props<{ error: any }>()
);
//* Get User Details End */

