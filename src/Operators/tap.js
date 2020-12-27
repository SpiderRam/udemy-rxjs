import { add } from '../helpers'
import { interval } from 'rxjs'
import { tap, map, take } from 'rxjs/operators'

const counter = interval(1000)

counter.pipe(
  take(10),
  tap((value) => { add.li('before square ' + value) }),
  map(x => Math.pow(x, 2)),
  tap((value) => { add.li('after square ' + value) }),
  map(x => Math.sqrt(x))
).subscribe(add.li)
