import { BackendErrorMessagesModule } from '../../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';
import { LoginEffect } from './store/effects/login.effect';
import { LogoutEffect } from './store/effects/logout.effect';
import { RegisterEffect } from './store/effects/register.effect';
import { UpdateCurrentUserEffect } from './store/effects/updateCurrentUser.effect';
import { reducers } from './store/reducers';
import { CoreModule } from 'src/app/core/core.module';

const routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([
            RegisterEffect,
            LoginEffect,
            GetCurrentUserEffect,
            UpdateCurrentUserEffect,
            LogoutEffect,
        ]),
        BackendErrorMessagesModule,
        CoreModule,
    ],
    declarations: [RegisterComponent, LoginComponent],
    providers: [AuthService, PersistanceService],
})
export class AuthModule {}
