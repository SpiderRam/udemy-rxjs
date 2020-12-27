import { add } from '../helpers'
import { interval, fromEvent } from 'rxjs'
import { debounce, debounceTime } from 'rxjs/operators'

const inputBox = document.getElementById('input')
const renderBox = document.getElementById('display-content')
const submitBtn = document.getElementById('submit')

const content = fromEvent(inputBox, 'keyup')
const submit = fromEvent(submitBtn, 'click')

content.pipe(
//   debounce(
//     // () => interval(1000) // this will wait for 1000 ms after keyup to fire the subscribe
//     () => submit // only fires the subscribe when the button is clicked (not a common use case for debounce)
//   )
  debounceTime(2000) // effectively the same as the debounce + interval combination
).subscribe(() => {
  renderBox.innerHTML = inputBox.value
})

// This works as expected, but firing an api on every keystroke is inefficient and potentially expensive
// content.pipe().subscribe(() => {
//   renderBox.innerHTML = inputBox.value
// })
