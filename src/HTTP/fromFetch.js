import { add } from '../helpers'
import { from } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { fromFetch } from 'rxjs/fetch'

// const getUsers = fetch('https://jsonplaceholder.typicode.com/users')
// const users = from(getUsers)

// fromFetch does the same as above:
const users = fromFetch('https://jsonplaceholder.typicode.com/users')

users.pipe(
  switchMap( // ref here for good info: https://ncjamieson.com/avoiding-switchmap-related-bugs/
    response => response.json()
  )
).subscribe(
  (users) => {
    users.forEach(user => {
      add.li(user.name)
    })
  }
)
