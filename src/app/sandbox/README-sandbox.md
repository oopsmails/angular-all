# Sandbox README

## To include Bootstrap

## Best solution for partially include Bootstrap as of 20221202

- Ref:

https://stackoverflow.com/questions/70924279/adding-bootstrap-only-to-specific-components-in-angular-version-13

### If only need bootstrap CSS

> Download the minified CSS Bootstrap file from here getbootstrap.com/docs/5.1/getting-started/download, see bootstrap-5.1.3-dist.zip.
> Save Bootstrap css file in assets folder.
> In any component needs to use bootstrap, do following:

```
@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss', '../../../assets/scss/bootstrap.min.css'],
  // encapsulation: ViewEncapsulation.ShadowDom, <------------------ don't do this if only need CSS!!!
})
export class CustomerSearchComponent implements OnInit, OnDestroy {
```

> No need and do not to use _ViewEncapsulation_ anywhere!!!
> No need to put following in component.scss

```
// @import url('https://unpkg.com/bootstrap@4.6.0/dist/css/bootstrap.min.css');
```

### If not only need bootstrap CSS, but also need to use some bootstrap (either ng-bootstrap or ngx-bootstrap) components

Take _TooltipModule_ of ngx-boostrap as example

> Add ngx-bootstrap in project

```
ng add ngx-bootstrap

or

npm install ngx-bootstrap --save

added in package.json:

"ngx-bootstrap": "^9.0.0",

```

> Put _TooltipModule_ in model.ts file

```
TooltipModule.forRoot(),
```

> In component.html, use _tooltip_

```
<button type="button" (click)="onReset()" class="btn btn-warning float-right">Reset</button>
```

> In component.ts, same as above, include _bootstrap.css_ from _asset_ folder
> In component.ts, use _encapsulation: ViewEncapsulation.ShadowDom,_ to propogate bootstrap css in to shadow dom, but NOT propogate to other components!

```
@Component({
  selector: 'app-form-validation-content',
  templateUrl: './form.validaton.content.component.html',
  styleUrls: ['./form.validaton.content.component.scss', '../../../assets/scss/bootstrap.min.css'], <------- needed
  // encapsulation: ViewEncapsulation.None,
  encapsulation: ViewEncapsulation.ShadowDom, <------------ ALSO needed
  // encapsulation: ViewEncapsulation.Emulated,
})
export class FormValidationContentComponent implements OnInit, OnDestroy {
```

## Almost best solution for partially include Bootstrap

need to apply to only some pages

- e.g,

src\app\sandbox\form-validation\form.validaton.component.html

src\app\sandbox\customer-seach\customer-search.component.html

**Important**:

- Using `encapsulation: ViewEncapsulation.ShadowDom,` in individual component !!!
- Add `@import url('https://unpkg.com/bootstrap@4.6.0/dist/css/bootstrap.min.css');` in scss
- NO NEED to install ngx-bootstrap, if ONLY for CSS
- Install ngx-bootstrap, for testing around, e.g, TooltipModule

> Performance issue .... need to investigation!

## ngx-bootstrap: ok but hard to be partially using in individual components.

```
ng add ngx-bootstrap

or

npm install ngx-bootstrap --save

added in package.json:

"ngx-bootstrap": "^9.0.0",

```

## Trying to involve bootstrap CSS

### bootstrap directly

npm install bootstrap --save --> no! this is pure bootstrap, need jQuery, etc.

### ngb

npm install --save @ng-bootstrap/ng-bootstrap --> no, many errors because angular and ng-bootstrap version conflicts.
