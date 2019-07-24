import { createStore } from 'redux';
const $form = document.getElementById('form');

const handleSubmit = event => {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  store.dispatch({
    type: 'ADD_SONG',
    payload: {
      title
    }
  })
}

$form.addEventListener('submit', handleSubmit)
const initialState = [
  {"title": 'Baila baila'},
  {"title": 'taki taki rumba'},
  {"title": 'Aunque no sea conmigo'}
]

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_SONG':
      return [...state, action.payload]
    default: return state
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function render() {
  const $container = document.getElementById('playlist');
  const $playlist = store.getState();
  console.log($playlist);
  $container.innerHTML = '';
  $playlist.forEach(item => {
    const element = document.createElement('p');
    element.textContent = item.title;
    $container.appendChild(element);
  })
}

render();

const handleChange = () => render()


store.subscribe(handleChange)

