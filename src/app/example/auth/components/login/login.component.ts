import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { EXAMPLE_BACK_TO_HOME, EXAMPLE_HOME_LINK } from 'src/app/example/example.constantes';

import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { loginAction } from '../../store/actions/login.action';
import { cleanValidationErrorAction } from '../../store/actions/sync.action';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  linkText = EXAMPLE_BACK_TO_HOME;
  routerLinkInput = EXAMPLE_HOME_LINK;

  loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    // user365@test.com, user365/test
    this.loginFormGroup = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      ],
      // email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginFormGroup.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginFormGroup.invalid) {
      return;
    }

    const request: LoginRequestInterface = {
      user: this.loginFormGroup.value,
    };
    this.store.dispatch(loginAction({ request }));
  }

  ngOnDestroy(): void {
    console.log('LoginComponent, ngOnDestroy ... should clean up errors if any ....');
    this.store.dispatch(cleanValidationErrorAction());
  }
}
