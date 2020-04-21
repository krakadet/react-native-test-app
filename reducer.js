import {GET_PICTURES} from './actions';

const initialState = {
  list: [],
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PICTURES:
      return action.payload;
  }
  return state;
}
