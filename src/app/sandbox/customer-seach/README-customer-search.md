# angular-switchMap: Using RxJS switchMap With Angular 7 Reactive Forms to Cancel Pending Requests


## Add console.log, to understand switchMap doing "to cancel the in-flight requests with each new request"

Note: adding "debounceTime" as 500ms ... but delay is still 2s ... still easy to test below ...

- in app.component.ts, to see API return

```
console.log(`subscribe .... results=`, results);
```

- in customers.service.ts, to track and record calling API

```
console.log(`calling .... customer=`, customer);
```

- result, type in City, ho

will see two "calling .... ", but only one "subscribe ....", which means the first "in-flight" API call is cancelled by the second one (within Delay Time)

```
calling .... customer= {name: '', address: '', city: 'h', state: '', zip: '', …}
calling .... customer= {name: '', address: '', city: 'ho', state: '', zip: '', …}
subscribe .... results= (2) [{…}, {…}]
```

## THE SWITCHMAP SOLUTION

So I began searching for a way to cancel the in-flight requests with each new request. After much digging, I learned that the RxJS operator switchMap will do just that. If you aren’t familiar with RxJS, it is a library that uses reactive programming and observable streams to handle data. SwitchMap is a flattening operator that involves two observables, an outer observable and an inner observable. According to learn RxJS:

The main difference between switchMap and other flattening operators is the cancelling effect. On each emission the previous inner observable (the result of the function you supplied) is cancelled and the new observable is subscribed. You can remember this by the phrase “switch to a new observable.”

When the outer observable emits a value, the inner observable is cancelled and a new observable is subscribed. When the inner observable is an API request, it will cancel the in-flight network request.

Other RxJS flattening operators include mergeMap (aka FlatMap) and concatMap. There are many resources online that explain the differences between the three. If you do not want to cancel in-flight requests, consider using one of these other operators.


## HOW TO CONVERT TO SWITCHMAP
To convert the original code to use switchMap, follow the steps outlined below.

### Step 1: Create an RxJS Subject
An RxJS Subject allows for both emitting events and subscribing to events while an Observable only allows for subscribing to events.

```
private customerLookup$: Subject<void> = new Subject();
```

It is common practice to subscribe to an observable directly because it is more concise, but in this instance, it is important to understand that this.customersService.get()
 
returns an Observable. The result can be assigned to a variable and subscribed separately. The below example behaves the same way as the concise version (commented out).

```
getCustomers() {
  const searchParams = this.customerForm.value;
  // this.customersService.get(searchParams).subscribe(results => { // get and subscribe
  //   this.customers = results;
  // });
 
  const getCustomers$ = this.customersService.get(searchParams); // get observable
  getCustomers$.subscribe(results => { // subscribe to observable
    this.customers = results;
  });}
```

This will come in handy in the next step.

### Step 2: Add switchMap and Subscribe to the Subject
As mentioned earlier, switchMap requires two observables. The outer observable controls the execution of the inner observable. In this case, 

```
this.customerLookup$ 
```

is the outer observable. The inner observable performs the work, which in this case is 

```
this.customersService.get()
```

The *getCustomers$* observable is returned inside the switchMap, but the result of the observable is subscribed **outside** the switchMap.

```
this.customerLookup$.pipe(switchMap(() => { const searchParams = this.customerForm.value; // add logic before api call here return this.customersService.get(searchParams); // return getCustomers$ observable})).subscribe(results => { // subscribe to results in the outer observable this.customers = results; // add logic after api call here});
```

### Step 3: Emit an Event to the Subject
Now that the switchMap is set up, it needs to be triggered when the form changes. Convert this.getCustomers() to this.customerLookup$.next() to emit a value to the outer observable.

```
this.customerForm.valueChanges.subscribe(() => {
  // this.getCustomers();
  this.customerLookup$.next();
});
```


## Error log

- angular Uncaught TypeError: Cannot read properties of undefined (reading 'fn')

```

I had similar problem with my Angular 6 application. I got rid of that after adding below script in head tag.

<script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>

```

## Ref:

https://www.credera.com/insights/using-rxjs-switchmap-angular-7-reactive-forms-cancel-pending-requests

https://rslayter.github.io/switchmap-example/


