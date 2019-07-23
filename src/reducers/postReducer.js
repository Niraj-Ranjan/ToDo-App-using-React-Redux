import { FETCH_POSTS, NEW_POST, REMOVE_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case REMOVE_POST:
        console.log(action.id);
        const filterList = state.items.filter(item =>
          item.id !==action.id
        );
        console.log(filterList);
        
        return filterList


    default:
      return state;
  }
}