import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { registerAction } from '../../store/actions/register.action';
import { Observable } from 'rxjs';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors/selectors';
import { IRegisterRequest } from '../../types/register-request';
import { IBackendErrors } from 'src/app/shared/types/backend-errors/backend-errors';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<IBackendErrors | null> ;

  constructor(private _fb: FormBuilder, private _store: Store) {}
  initializeForm(): void {
    this.formRegister = this._fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this._store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this._store.pipe(select(validationErrorsSelector));
    // best implementation that mean it is a stream and we can do operators like map or filter
  }
  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  onSubmit(): void {
    const request:IRegisterRequest = {
      user: this.formRegister.value,
    };
    this._store.dispatch(registerAction({request}));
  }
}
