import { add } from '../helpers'
import { of, from, fromEvent } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { switchMap } from 'rxjs/operators'

// This will basically log nothing useable.  Use pipe and switchMap (to be explained more later)
// const users = fromFetch('https://jsonplaceholder.typicode.com/users').subscribe((result) => {
//   console.log(result)
// })

fromFetch('https://jsonplaceholder.typicode.com/users')
  .pipe(
    switchMap(
      response => {
        return response.json()
      }
    )
  )
  .subscribe(
    (result) => {
      result.forEach(user => {
        add.li(user.name)
      })
    }
  )

const submit = document.getElementById('submit')
fromEvent(submit, 'click').subscribe((event) => {
  add.li('clicked!')
})

// Both of the following do the same thing:  they will execute the function passed
// into subscribe() on each argument, or each item in the array passed.
of(1, 2, 3, 4).subscribe(add.li)
from(['apples', 'oranges', 'grapes']).subscribe(add.li)
