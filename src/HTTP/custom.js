import { add } from '../helpers'
import { concatMap, switchMap, mergeMap, delay } from 'rxjs/operators'
import { fromFetch } from 'rxjs/fetch'
import { of, pipe } from 'rxjs'

// While the code in fromFetch.js is functional and acceptable,
// a better approach is to create a custom operator --
// which is really just writing reuseable functions outside of the subscribe block.

function getJson () {
  return concatMap(
    response => response.json()
  )
}

function emitEach (_delay) {
  return pipe(
    mergeMap(response => of(...response)),
    concatMap(
      response => {
        return of(response).pipe(delay(_delay))
      }
    )
  )
}

const users = fromFetch('https://jsonplaceholder.typicode.com/users')

users.pipe(
  getJson(),
  emitEach(1000)
).subscribe(
  user => {
    add.li(user.name)
  }
)
