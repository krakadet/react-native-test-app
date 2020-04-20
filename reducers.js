import {GET_PICTURES} from './actions';

const initialState = {
  list: [],
  data: {},
};

function mainReducer(state = initialState, action) {
  console.log('action=>', action);

  switch (action.type) {
    case GET_PICTURES:
      return action.payload;
  }
  return state;
}
export default mainReducer;
