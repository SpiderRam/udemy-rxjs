import { add } from '../helpers'
import { interval } from 'rxjs'
import { map, filter, take } from 'rxjs/operators'

const numbers = ['zero', 'one', 'two', 'three', 'four']
const counter = interval(100).pipe(take(4))

counter.pipe(
  filter((value) => {
    return value % 2 === 0
  }),
  map((value) => {
    return numbers[value]
  })
).subscribe(add.li) // zero two

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// INTERESTING NOTE:  with one or the other commented out, the code below prints the expected outcome.
// When both are left in, the printed outcome is
// 0 0 1 2 2 3
// This illustrates push vs. pull architecture
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// counter.pipe().subscribe(add.li) // 0 1 2 3

// counter.pipe(
//   filter((value) => {
//     return value % 2 === 0
//   })
// ).subscribe(add.li) // 0 2
