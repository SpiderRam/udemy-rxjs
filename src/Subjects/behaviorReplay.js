import { add } from '../helpers'
import { BehaviorSubject, ReplaySubject, interval } from 'rxjs'
import { take } from 'rxjs/operators'

// ~~~~ REPLAY ~~~~

// 2nd: 100, 2nd: 0, 2nd: 1, 1st: 2, 1st: 3, 1st: 4, 1st: 5, 1st: 6
// const repNums = new BehaviorSubject(100)

// 2nd: 0, 2nd: 1,, 2nd: 2, 1st: 0, 1st: 1, 1st: 2, 1st: 3, 1st: 4
// const repNums = new ReplaySubject()

// 2nd: 0, 2nd: 1,, 2nd: 2, 1st: 1, 1st: 2, 1st: 3, 1st: 4, 1st: 5
const repNums = new ReplaySubject(2) // giving ReplaySubject an argument tells it how many values back to replay

interval(1000).subscribe(
  (value) => {
    repNums.next(value)
  }
)

setTimeout(() => {
  repNums.pipe(take(5)).subscribe(
    (val) => {
      add.li(`1st: ${val}`)
    }
  )
}, 3000)

repNums.pipe(take(3)).subscribe(
  (val) => {
    add.li(`2nd: ${val}`)
  }
)

// ~~~~ BEHAVIOR ~~~~

// with no starting value, the subscription to nums will log undefined, 0, 1, 2, etc.
// const nums = new BehaviorSubject()

// If you add a starting value, you will see 100, 0, 1, 2, etc.
const nums = new BehaviorSubject(100)

interval(1000).subscribe(
  (value) => {
    nums.next(value)
  }
)

// nums.pipe(take(5)).subscribe(add.li)
