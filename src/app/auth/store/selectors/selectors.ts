import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAppState } from "src/app/shared/types/app-state/app-state";
import { IAuthState } from "../../types/auth-state";


export const authFeatureSelector = createFeatureSelector<IAuthState>('auth');


export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.validationErrors
);


// export const isLoggedInSelector = createSelector(
//   authFeatureSelector,
//   (authState: IAuthState) => authState.isLoggedIn 
// );

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (state: IAuthState) => state.isLoggedIn !== null && state.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.currentUser
);
