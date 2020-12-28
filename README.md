# udemy-rxjs

## Operators

| Most recommended | Functionality                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------- |
| tap              | Tap into the stream and extract value without changing anything                             |
| map              | Effectively the same as JavaScript map()                                                    |
| filter           | Effectively the same as JavaScript filter()                                                 |
| pluck            | Extract a value from nested json objects                                                    |
| take             | Specify the indices from a given array that you want to take before completing              |
| debounceTime     |                                                                                             |
| scan             | Similar to reduce: combines all values emitted by the source, returns when source completes |
| merge            |                                                                                             |
| concat           |                                                                                             |
| combineLatest    |                                                                                             |
| concatAll        |                                                                                             |

| Others of note | Functionality                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------- |
| first          | Takes only the first item in the array                                                                              |
| last           | Takes only the last item in the array; functions as a de facto complete                                             |
| startWith      | Allows you to set an initial value                                                                                  |
| skip           | Omit values from the array                                                                                          |
| throttle       | Allows you to sample data from a stream over time                                                                   |
| debounce       | Emits a value from an Observable after a time span has elapsed                                                      |
| reduce         | Similar to scan: combines the accumulated values emitted by the source, returns a value every time the source emits |
| mergeAll       |                                                                                                                     |
| concatMap      | Takes one observable and maps it to another, after the first one completes                                          |

### SKIP

-   skip()
-   skipWhile()
-   skipUntil()
-   skipLast()

### TAKE

-   take()
-   takeWhile()
-   takeUntil()
-   takeLast()

### DEBOUNCE

-   debounce()
-   debounceTime()
