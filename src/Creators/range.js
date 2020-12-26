import { add } from '../helpers'
import { of, range } from 'rxjs'
import { delay, concatMap } from 'rxjs/operators'

// Will start at index 50 and count up 50 values, a.k.a. 50-99
// To get to 100, pass (50, 51)
const numbers = range(50, 50)

// numbers.subscribe(add.li)

// This approach allows you to create the equivalent of a setInterval, bt controlling where it stops and ends
numbers.pipe(
  concatMap((value) => of(value).pipe(delay(1000)))
).subscribe(add.li)
