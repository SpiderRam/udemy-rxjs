import { add } from '../helpers'
import { fromEvent, interval } from 'rxjs'
import { take, takeWhile, takeLast, takeUntil } from 'rxjs/operators'

const button = document.getElementById('submit')
const buttonEvents = fromEvent(button, 'click')

interval(500).pipe(
  take(10)
//   takeWhile(number => number < 5) // 0 1 2 3 4 (inverse of skipWhile)
//   takeLast(5) // 5 6 7 8 9 (must be used here with take(n) because takeLast/skipLast will not do anything on an infinite response)
//   takeUntil(buttonEvents) // Prints numbers starting with 0 until the button is clicked
).subscribe(add.li)
