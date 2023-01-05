/****
 * This AutoUnsub is a class decorator that can be applied to classes in our Angular project. 
 * See, it saves the original ngOnDestroy hook, then creates a new one and hook it into 
 * the class it is applied on. So, when the class is being destroyed the new hook is called. 
 * Inside it, the functions scan through the properties of the class, if it finds 
 * an Observable property it will unsubscribe from it. Then it calls the original 
 * ngOnDestroy hook in the class if present.
 * 
 * We apply it on our AppComponent class no longer bothered about unsubscribing 
 * the observable$ in the ngOnDestroy, the Decorator will do it for us.
 * 
 * There are downsides to this(what isn’t in this world), it will be a problem if 
 * we have non-subscribing Observable in our component.
 * 
 * Ref:
 * https://blog.bitsrc.io/6-ways-to-unsubscribe-from-observables-in-angular-ab912819a78f
 */
export function AutoUnsub() {
    console.log("----------- inside AutoUnsub --------------");
    return function (constructor) {
        const orig = constructor.prototype.ngOnDestroy
        constructor.prototype.ngOnDestroy = function () {
            for (const prop in this) {
                const property = this[prop]
                if (typeof property.subscribe === "function") {
                    property.unsubscribe()
                }
            }
            orig.apply()
        }
    }
}
