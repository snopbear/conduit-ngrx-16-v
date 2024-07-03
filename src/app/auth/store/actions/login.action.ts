import {  createAction, props } from "@ngrx/store";
import { ILoginRequest } from "../../types/login-request";
import { ICurrentUser } from "src/app/shared/types/current-user/current-user";
import { ActionType } from "../../types/action-type.enum";
import { IBackendErrors } from "src/app/shared/types/backend-errors/backend-errors";

export const loginAction = createAction(
  ActionType.LOGIN,
  props<{ request: ILoginRequest }>()
);

export const loginSuccessAction = createAction(
  ActionType.LOGIN_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const loginFailureAction = createAction(
  ActionType.LOGIN_FAILURE,
  props<{ errors: IBackendErrors }>()
);
