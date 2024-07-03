import { createReducer, on, Action } from '@ngrx/store';
import { IAuthState } from '../../types/auth-state';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';
import { initialState } from '../state/initial-state';


//
const registerReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function registerReducers(state: IAuthState, action: Action) {
  return registerReducer(state, action);
}
