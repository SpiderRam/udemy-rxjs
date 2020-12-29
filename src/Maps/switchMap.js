import { fromEvent } from 'rxjs'
import { map, switchMap, takeUntil, tap } from 'rxjs/operators'

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const moves = fromEvent(canvas, 'mousemove')
const down = fromEvent(canvas, 'mousedown')
const up = fromEvent(canvas, 'mouseup')

function brush (coords) {
  context.lineWidth = 5
  context.lineTo(coords.x, coords.y)
  context.stroke()
}

// We subscribe to the mousedown event
down.pipe(
  // We set our canvas options
  tap(
    (evt) => {
      context.strokeStyle = 'blue'
      context.beginPath()
      context.moveTo(evt.offsetX, evt.offsetY)
    }
  ),
  //   We SWITCH to the moves Observable
  switchMap(
    (evt) => moves.pipe(
      // we collect our coordinates
      map(
        (evt) => {
          return { x: evt.offsetX, y: evt.offsetY }
        }
      ),
      //   And we observe until the mouse is released again
      takeUntil(up)
    )
  )
).subscribe(
  (coords) => {
    brush(coords)
  }
)
