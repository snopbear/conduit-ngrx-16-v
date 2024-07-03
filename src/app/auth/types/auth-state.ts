import { IBackendErrors } from 'src/app/shared/types/backend-errors/backend-errors';
import { ICurrentUser } from 'src/app/shared/types/current-user/current-user';

export interface IAuthState {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null; 
  validationErrors: IBackendErrors | null;
}
