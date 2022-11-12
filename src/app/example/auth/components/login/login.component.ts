import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EXAMPLE_BACK_TO_HOME, EXAMPLE_HOME_LINK } from 'src/app/example/example.constantes';

import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { loginAction } from '../../store/actions/login.action';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
    selector: 'mc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    linkText = EXAMPLE_BACK_TO_HOME;
    routerLinkInput = EXAMPLE_HOME_LINK;

    form: FormGroup;
    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrorsInterface | null>;

    constructor(private fb: FormBuilder, private store: Store) {}

    ngOnInit(): void {
        // console.log(document.styleSheets[2]);
        // document.styleSheets[1].disabled = true;
        // document.styleSheets[2].disabled = true;
        // document.styleSheets[3].disabled = true;
        this.initializeForm();
        this.initializeValues();
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    initializeForm(): void {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onSubmit(): void {
        const request: LoginRequestInterface = {
            user: this.form.value,
        };
        this.store.dispatch(loginAction({ request }));
    }
}