# Sandbox README

## To include Bootstrap

## Currently, best solution for partially include Bootstrap

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
