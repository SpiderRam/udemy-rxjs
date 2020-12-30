# udemy-rxjs

## Maps

### SwitchMap

-   allows you to switch from one Observable to another
-   often used with authentication (i.e. awaiting a token), among other things

### ExhaustMap

-   similar to switchMap, but it will run until the current observable completes
-   good for operations such as form submission, or other use cases in which you need a full sequence to complete without interruptions or restarts

### MergeMap

-   the switching mechanism is not present, all values as they arrive are available and can be emitted

### ConcatMap

-   same as mergeMap except that order will be preserved -- observables will execute fully before the next one begins
