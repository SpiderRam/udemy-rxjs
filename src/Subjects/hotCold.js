import { add } from '../helpers'
import { Subject, Observable } from 'rxjs'

// Hot (Multicast)

// a Subject is both an observable and an observer, so we can push values
// into it, and then subscribe to those values
const sub = new Subject()

sub.subscribe(x => add.li('Plain subscribe (S): ' + x)) // *
sub.subscribe(x => add.li('Plain subscribe (S): ' + x)) // *
sub.subscribe(x => add.li('Plain subscribe (S): ' + x)) // *

setTimeout(() => {
  sub.subscribe(x => add.li('Timed subscribe (S): ' + x)) // *
}, 1000)
setTimeout(() => {
  sub.subscribe(x => add.li('Timed subscribe (S): ' + x)) // *
}, 2000)
setTimeout(() => {
  sub.subscribe(x => add.li('Timed subscribe (S): ' + x))
}, 3000)

// All subscriptions above marked * will print the same date/time
// The 3000 subscription will not emit any value,
// since it subscribes after the value is pushed
setTimeout(() => {
  sub.next(new Date())
}, 2001)

// Cold -- Unicast

const obs = new Observable(
  (subs) => subs.next(new Date())
)

// Will all print the same time
obs.subscribe(val => add.li(`Plain subscribe: ${val}`))
obs.subscribe(val => add.li(`Plain subscribe: ${val}`))
obs.subscribe(val => add.li(`Plain subscribe: ${val}`))

// Will print times 1 second apart
setTimeout(() => {
  obs.subscribe(val => add.li(`Timed subscribe (O): ${val}`))
}, 1000)
setTimeout(() => {
  obs.subscribe(val => add.li(`Timed subscribe (O): ${val}`))
}, 2000)
setTimeout(() => {
  obs.subscribe(val => add.li(`Timed subscribe (O): ${val}`))
}, 3000)
