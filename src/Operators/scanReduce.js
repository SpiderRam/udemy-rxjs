import { add } from '../helpers'
import { interval, from } from 'rxjs'
import { scan, reduce, take, concatMap } from 'rxjs/operators'

// The goal: the Fibonacci sequence

const fsReduce = interval(10).pipe(
  take(10),
  reduce(
    (accumulator, value) => {
      const n = value + 1
      const last = accumulator[n]
      const beforeLast = accumulator[n - 1]
      return [...accumulator, last + beforeLast]
    }, [0, 1] // (optional) seed for giving the accumulator an initial value
  )
).subscribe(add.li)

const FS = interval(50).pipe(
  take(10),
  reduce(
    (accumulator, value) => {
      const n = value + 1
      const last = accumulator[n]
      const beforeLast = accumulator[n - 1]
      return [...accumulator, last + beforeLast]
    }, [0, 1] // (optional) seed for giving the accumulator an initial value
  )
)

FS.pipe(
  concatMap(sequence => from(sequence))
).subscribe(add.li)

const fsScan = interval(1000).pipe(
  take(10),
  scan(
    (accumulator, value) => {
      const n = value + 1
      const last = accumulator[n]
      const beforeLast = accumulator[n - 1]
      return [...accumulator, last + beforeLast]
    }, [0, 1] // (optional) seed for giving the accumulator an initial value
  )
).subscribe(add.li)
