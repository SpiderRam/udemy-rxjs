import { add } from '../helpers'
import { interval } from 'rxjs'
import { take, throttle } from 'rxjs/operators'

interval(10).pipe(
  take(10) // 0 1 2 3 4 5 6 7 8 9
).subscribe(add.li)

interval(10).pipe(
  throttle(() => interval(1000)),
  take(10) // 0 100 201 302 403 504 605 706 807 908
).subscribe(add.li)
