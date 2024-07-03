import { IAuthState } from "../../types/auth-state";

export const  initialState: IAuthState = {
  isSubmitting: false,
  isLoading:false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};
