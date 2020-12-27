import { add, sampleData } from '../helpers'
import { pluck } from 'rxjs/operators'

sampleData.pipe(
  pluck('company', 'name')
).subscribe(add.li)
