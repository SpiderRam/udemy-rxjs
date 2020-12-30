import { add } from '../helpers'
import { interval } from 'rxjs'
import { concatMap, map, mergeMap, take, tap } from 'rxjs/operators'

interval(2000).pipe(
  take(3),
  map(
    value => `${value * 100}`
  ),
  // mergeMap( // renders values as they arrive
  concatMap( // preserves sequential order
    x => {
      return interval(1000).pipe(
        take(3),
        map(
          value => `inner(${value}), outer(${x}))`
        )
      )
    }
  )
).subscribe(
  value => add.li(`Emitted Value: ${value}`)
)
