import { add } from '../helpers'
import { interval, fromEvent, merge, concat, combineLatest } from 'rxjs'
import { take, map } from 'rxjs/operators'

const button = document.getElementById('submit')
const streamOne = interval(1000).pipe(take(10))
const streamTwo = fromEvent(button, 'click').pipe(
  map(
    (e) => 'clicked'
  )
)

// ~~~~ Merge ~~~~
// When the page loads, streamOne will begin to print 0, 1, 2, etc.
// When the button is clicked, it will print 'clicked' amongst the streamOne values
// merge(streamOne, streamTwo).subscribe(add.li)

// ~~~~ CONCAT ~~~~
// When the page loads, streamOne will begin to print 0, 1, 2, etc.
// Clicking the button will have no effect until streamOne completes.
// After that, clicking the button will print 'clicked', but no previous
// clicks will have been recorded, or have had any effect
// concat(streamOne, streamTwo).subscribe(add.li)

// ~~~~ COMBINELATEST ~~~~
// When the page loads, streamOne will begin to print 0, 1, 2, etc.
// The values of the three streams will be combined -- the most recent from each
// Any time one stream emits a new value, the values of all three will be printed.
// All three streams must have some value before the subscription begins, hence 49 appearing from the first
const streamThree = interval(10).pipe(take(50))
const streamFour = interval(2500).pipe(take(3))
combineLatest([streamOne, streamThree, streamFour]).subscribe(add.li)
// 1,49,0
// 2,49,0
// 3,49,0
// 4,49,0
// 4,49,1
// 5,49,1
// 6,49,1
// 6,49,2
// 7,49,2
// 8,49,2
// 9,49,2
