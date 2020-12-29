import { add, animate } from '../helpers'
import { fromEvent, interval } from 'rxjs'
import { map, switchMap, take, exhaustMap } from 'rxjs/operators'

const startButton = document.getElementById('start')
const startClicked = fromEvent(startButton, 'click')
const circle = document.getElementById('circle')

startClicked.pipe( // on click, circle moves from left to right, and...
  exhaustMap(() => { // ... subsequent clicks are ignored until process completes
    //   switchMap(() => { // ... starts over with every click no matter where it is in the process
    return animate(5000)
  })
).subscribe((t) => {
  circle.style.marginLeft = `${t * 95}vw`
})

// interval(1000).pipe(
//   take(3),
//   map(
//     value => `source(${value})`
//   ),
//   exhaustMap(
//     x => {
//       add.li(`Source: ${x}`)
//       // This generated Observable has to complete
//       // before any value to the source is listened to.
//       // If the values from the source complete before the
//       // generated Observable, they will be ignored.

//       //   with interval 500 ms, only one set of values is emitted, because the second and
//       //   third source emissions occur while the inner observable is still executing
//       //   return interval(500).pipe(

//       //   with interval 10 ms, all three source observables are emitted, because the
//       //   inner completes before each successive fire
//       return interval(10).pipe(
//         take(5),
//         map(
//           value => `inner(${value * 10})`
//         )
//       )
//     }
//   )
// ).subscribe(
//   value => add.li(`Emitted Value: ${value}`)
// )
