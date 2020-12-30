import { add } from '../helpers'
import { ajax } from 'rxjs/ajax'
import { retry } from 'rxjs/operators'

const ajaxUsers = ajax.getJSON('https://jsonplaceholder.typicode.com/users')

ajaxUsers.pipe(
  retry(3) // retry, repeat, et al. exist to help handle unreliable API calls
).subscribe(
  response => {
    response.forEach(user => {
      add.li(user.name)
    })
  }
)
