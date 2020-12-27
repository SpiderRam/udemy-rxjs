import { add, sampleData } from '../helpers'
import { pluck, first, last, startWith } from 'rxjs/operators'

// You can think of startWith as an initializer
// If we want to intialize the stream with a value then we can do so,
// but it must match the shape of the rest of the stream if we want to use it with pluck
// So we use a const to create a starting value:
const me = {
  name: 'Carmen Owen'
}

sampleData.pipe(
//   first(), // prints only the name from the first object in the array
//   last(), // prints only the name from the last object in the array
  startWith(me),
  pluck('name')
).subscribe(add.li)
