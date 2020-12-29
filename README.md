# udemy-rxjs

## Maps

### SwitchMap

-   allows you to switch from one Observable to another
-   often used with authentication (i.e. awaiting a token), among other things

### ExhaustMap

-   similar to switchMap, but it will run until the current observable completes
-   good for operations such as form submission, or other use cases in which you need a full sequence to complete without interruptions or restarts
