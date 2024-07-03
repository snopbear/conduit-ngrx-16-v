import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ICurrentUser } from "src/app/shared/types/current-user/current-user";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";
import { AuthService } from "../../services/auth/auth.service";
import { PersistanceService } from "src/app/shared/service/persistance/persistance.service";
import { Router } from "@angular/router";

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persistanceService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );



  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
   private router: Router)
  {}
}
