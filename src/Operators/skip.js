import { add } from '../helpers'
import { from, fromEvent, interval } from 'rxjs'
import { take, skip, skipWhile, skipLast, skipUntil } from 'rxjs/operators'

from(['apples', 'grapes', 'oranges', 'pears']).pipe(
//   skip(2) // oranges pears
  skipLast(2) // apples grapes
).subscribe(add.li)

interval(1000).pipe(
  take(10),
  skipWhile((number) => number < 4) // 4 5 6 7 8 9 (after delay for 0-3)
).subscribe(add.li)

const button = document.getElementById('submit')
const buttonEvents = fromEvent(button, 'click')

// the interval action starts as soon as the page loads,
// but the subscribe(fn) does not commence until you click the button
// So if you wait ~ 8 seconds, it starts at 8, etc.
// interval(1000).pipe(
//   skipUntil(buttonEvents)
// ).subscribe(add.li)
