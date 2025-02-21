import './style.css'
import './button-event.js'

document.querySelector('#app').innerHTML = `
  <button type="button" class="btn-add">
  Add item
</button>
<button type="button" class="btn-remove">
  Remove item
</button>
<ul role="list"></ul>
`

