import { Action, createReducer, on } from '@ngrx/store';
import { initialState } from '../state/initial-state';
import { IAuthState } from '../../types/auth-state';
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from '../actions/current-user.action';

const getCurrentUserReducer = createReducer(
  initialState,
  on(
    getCurrentUserAction,
    (state): IAuthState => ({
      ...state,
      isLoading: true, 
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  ),
//   on(
//     getCurrentUserSuccessAction,
//     (state, action): IAuthState => ({
//       ...state,
//       currentUser: action.currentUser,
//     })
//   )
  //   on(
  //     logoutAction,
  //     (): AuthStateInterface => ({
  //       ...initialState,
  //       isLoggedIn: false,
  //     })
  //   )
);

export function getCurrentUserReducers(state: IAuthState, action: Action) {
  return getCurrentUserReducer(state, action);
}
