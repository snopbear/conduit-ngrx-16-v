import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBackendErrors } from 'src/app/shared/types/backend-errors/backend-errors';
import { AuthService } from '../../services/auth/auth.service';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors/selectors';
import { ILoginRequest } from '../../types/login-request';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErrors | null>;
  form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const request: ILoginRequest = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
