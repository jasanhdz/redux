import normalizedData from '../schemas/index';
import { fromJS } from 'immutable';
const initialState = fromJS({
  entities: normalizedData.entities,
  categories: normalizedData.result.categories,
  search: ''
})

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SEARCH_ETITIES':
      return state.set('search', action.payload.query);
    default: 
      return state
  }
}

export default reducer;