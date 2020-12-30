import { add } from '../helpers'
import { fromFetch } from 'rxjs/fetch'
import { catchError, retry, switchMap } from 'rxjs/operators'
import { of, throwError, EMPTY } from 'rxjs'

function checkStatus () {
  return switchMap(
    resp => {
      return (resp.status === 400) ? throwError() : of('Looks good')
    }
  )
}

const users = fromFetch('https://httpbin.org/status/400')

/* eslint-disable node/handle-callback-err */
users.pipe(
  checkStatus(),
  catchError(
    err => {
    //   return EMPTY // allows you to return nothing from a dud API response without anything breaking
    //   return of('There was a problem')
      return throwError('There was a problem')
    }
  )
).subscribe(
  resp => {
    console.log('resp:', resp) // without throwError, this will run whether it is 200 or 400
  },
  error => {
    console.error('error: ', error) // to fire this, use throwError
  }
)
