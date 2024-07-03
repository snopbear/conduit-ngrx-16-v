import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './component/register/register.component';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './services/auth/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorMessagesModule } from '../shared/module/error-message/component/backend-error-messages/backend-error-messages.module';
import { LoginEffect } from './store/effects/login.effects';
import { LoginComponent } from './component/login/login.component';
import { loginReducers } from './store/reducers/login.reducer';
import { registerReducers } from './store/reducers/register.reducer';
import { GetCurrentUserEffect } from './store/effects/current-user.effect';
import { getCurrentUserReducers } from './store/reducers/get-user-reducer';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature('login', loginReducers),
    StoreModule.forFeature('register', registerReducers),
    StoreModule.forFeature('getCurrentUser', getCurrentUserReducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
