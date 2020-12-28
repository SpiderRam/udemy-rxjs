import { add } from '../helpers'
import { interval, fromEvent } from 'rxjs'
import { take, map, concatAll, tap, mergeAll } from 'rxjs/operators'

const button = document.getElementById('submit')
const clicks = fromEvent(button, 'click')

const source = clicks.pipe(
  tap(
    //   this is just to illustrate when the click event is being received
    (ev) => add.li('click')
  ),
  map(
    // Inner Observable
    () => {
      return interval(1000).pipe(take(3))
    }
  )
)

source.pipe(
//   concatAll()
//   mergeAll()
  mergeAll(1) // Same as concatAll, the argument specifies the max number of concurrent subscriptions
).subscribe(add.li)
