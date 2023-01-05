## Dev Notes

## 20221114: TODOS

- add validator error, pure frontend

e.g: https://stackblitz.com/edit/angular-7-login-form-reactive-form?file=src%2Fapp%2Fapp.component.html

```

<small class="form-text text-muted"
        *ngIf="loginForm.controls.email.touched && loginForm.controls.email.errors?.required">
          Please enter email address.!
      </small>

      <small class="form-text text-muted"
      *ngIf="loginForm.controls.email.touched && loginForm.controls.email.errors?.email">
        Email address not well formed.!
      </small>

--- if add in component, got error

core.mjs:7635 ERROR Error: NG01101: Expected async validator to return Promise or Observable. Are you using a synchronous validator where an async validator is expected?

email: ['', Validators.required, Validators.email],

```

- Click routerlink, need to clear Error message
