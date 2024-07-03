import { createAction, props } from '@ngrx/store';

import { IRegisterRequest } from '../../types/register-request';
import { ActionType } from '../../types/action-type.enum';
import { ICurrentUser } from 'src/app/shared/types/current-user/current-user';
import { IBackendErrors } from 'src/app/shared/types/backend-errors/backend-errors';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{ request: IRegisterRequest }>()
);

export const registerSuccessAction = createAction(
  ActionType.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const registerFailureAction = createAction(
  ActionType.REGISTER_FAILURE,
  props<{ errors: IBackendErrors }>()
);
