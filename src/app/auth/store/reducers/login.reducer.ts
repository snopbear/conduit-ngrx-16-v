import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "../state/initial-state";
import { loginAction, loginFailureAction, loginSuccessAction } from "../actions/login.action";
import { IAuthState } from "../../types/auth-state";

const loginReducer = createReducer(
  initialState,
  on(
    loginAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true,
    })
  ),
  on(
    loginFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function loginReducers(state: IAuthState, action: Action) {
  return loginReducer(state, action);
}
