import { add } from '../helpers'
import { Observable } from 'rxjs'

// ~~~~~ TAKEAWAYS ~~~~~~
// A promise returns a value once, and then it is done.
// An observable can continue returning a response over time, as long as a subscription is active.
// You can stop a subscription by closing it with complete()
// You can also end the subscription with unsubscribe()

let i = 1

const o = new Observable((observer) => {
  setInterval(() => {
    observer.next('Observable ' + i)
    i++
  }, 1000)
})

const subscription = o.subscribe({
  next: (message) => {
    add.li(message)
  },
  error: (error) => console.log(error),
  complete: () => add.li('This Observable is complete!')
})

setTimeout(() => {
  subscription.unsubscribe()
}, 3000)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const o = new Observable((observer) => {
//   setTimeout(() => {
//     observer.next('Observable!')
//     observer.complete()
//     observer.next('I forgot to add....') // will not execute
//   }, 1000)
// })

// // .subscribe(next, error, complete)
// o.subscribe({
//   next: (message) => {
//     add.li(message)
//   },
//   error: (error) => console.log(error),
//   complete: () => add.li('This Observable is complete!')
// })

// ~~~~~~~~~~~~~~~~~~~~
// // o and p in this simple example really behave in a very similar way
// ** Interestingly, the promise resolves the tiniest bit faster
// const o = new Observable((observer) => {
//   setTimeout(() => {
//     observer.next('Observable!')
//   }, 1000)
// })

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise!')
//   }, 1000)
// })

// o.subscribe((message) => {
//   add.li(message)
// })

// p.then((message) => {
//   add.li(message)
// })
