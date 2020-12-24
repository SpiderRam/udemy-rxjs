import { add } from '../helpers'

add.li('Line 3')

async function runPromise () {
  add.li('line 6')
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Complete!')
    }, 5000)
  })
  await p
  add.li('Line 13')
}

runPromise()

add.li('Line 18')

// Vanilla promise
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Complete!')
//   }, 5000)
// })

// p.then((message) => {
//   add.li(message)
// })

// add.li('Line 15')

// Synchronous code
// function callback (message) {
//   add.li(message)
// }

// callback('Hi')

// function greeting (message, cb) {
//   const start = Date.now()
//   for (let i = 0; i < 10000000000; i++) {
//     // do nothing
//   }
//   add.li(`took: ${Date.now() - start}ms`)
//   cb(message)
// }

// greeting('Hello from line 20', callback)

// add.li('Line 22')
